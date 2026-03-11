# AGENTS.md

## Jules Orchestrator Mode

When acting as a Jules orchestrator, you manage Jules as a remote senior developer via the Jules MCP server and coordinate PR workflows via the GitHub MCP server.

**Important:** Jules is a highly skilled software engineer and architect. You don't need to tell Jules how to write code or structure projects. Just give Jules complex, well-defined tasks and review the results.

**Core principle:** The local agent must not waste context window tokens on active polling. A decoupled background monitor and event watcher handle polling independently and only trigger the local agent when human-level input or a final review is required.

---

## Available Jules MCP Tools

| Tool | Purpose |
|------|---------|
| `jules_create_session` | Create a new coding session on a GitHub repo/branch |
| `jules_get_session` | Fetch session metadata, state, and outputs |
| `jules_list_sessions` | List all sessions with pagination support |
| `jules_delete_session` | Delete a session |
| `jules_send_message` | Send instructions or feedback to an active session |
| `jules_approve_plan` | Approve a pending plan (when `requirePlanApproval: true`) |
| `jules_list_activities` | List activities for a session (events, plans, messages) |
| `jules_get_activity` | Get a single activity by ID |
| `jules_extract_pr_from_session` | Extract PR info from completed session outputs |
| `jules_list_sources` | List available GitHub repositories (sources) |
| `jules_get_source` | Get details for a specific source/repository |

---

## Creating Sessions

### Required Parameters

| Parameter | Description |
|-----------|-------------|
| `owner` | GitHub repository owner (username or organization) |
| `repo` | GitHub repository name |
| `branch` | Starting branch name. Use descriptive feature branches (e.g., `feat/counting-sort-viz`) |
| `prompt` | Clear, detailed task description. Include file paths, expected behavior, and testing requirements |

### Optional Parameters

| Parameter | Description |
|-----------|-------------|
| `title` | Session title for easier identification |
| `requirePlanApproval` | Set to `true` to pause before execution so you can review the plan |
| `automationMode` | Automation mode. Defaults to `"AUTO_CREATE_PR"` — Jules automatically publishes a PR upon completion |

### Example Session Creation

```json
{
  "owner": "MikBin",
  "repo": "algorithmsts",
  "branch": "feat/new-algorithm",
  "prompt": "Implement a counting sort visualization in the visualization/ directory. Follow existing patterns in visualization/algorithms/sorting/. Include step-by-step animation and complexity display.",
  "title": "Counting Sort Visualization",
  "automationMode": "AUTO_CREATE_PR"
}
```

---

## Session States

| State | Description | Action Required |
|-------|-------------|-----------------|
| `QUEUED` | Session is in queue | Wait |
| `PLANNING` | Jules is analyzing the task | Wait |
| `AWAITING_PLAN_APPROVAL` | Plan ready for review | Review plan, then call `jules_approve_plan` |
| `AWAITING_USER_FEEDBACK` | Jules needs clarification | Read activities, respond via `jules_send_message` |
| `IN_PROGRESS` | Jules is actively working | Wait |
| `COMPLETED` | Work finished | Extract outputs, review and merge PR |
| `FAILED` | Session encountered an error | Check activities for error details |

---

## Monitoring Sessions

### Listing Sessions

Use `jules_list_sessions` with pagination:

```json
{
  "pageSize": 10,
  "pageToken": "optional-token-from-previous-response"
}
```

### Getting Session Details

Use `jules_get_session` to fetch metadata, state, and outputs:

```json
{
  "session_id": "the-session-id"
}
```

### Listing Activities

Monitor progress with `jules_list_activities`:

```json
{
  "session_id": "the-session-id",
  "pageSize": 20,
  "pageToken": "optional-token"
}
```

### Getting Specific Activity

Get detailed info about a single activity:

```json
{
  "session_id": "the-session-id",
  "activity_id": "the-activity-id"
}
```

---

## Working with Sources (Repositories)

### List Available Sources

Use `jules_list_sources` to see connected GitHub repositories:

```json
{
  "pageSize": 20,
  "pageToken": "optional-token"
}
```

### Get Source Details

Use `jules_get_source` for details about a specific repository:

```json
{
  "source_id": "the-source-id"
}
```

---

## Publishing PRs from Completed Sessions

### Option 1: Auto-create PR (Recommended)

Set `automationMode: "AUTO_CREATE_PR"` (default) when creating the session. Jules will automatically open a PR when work is complete. The PR URL will appear in session outputs.

### Option 2: Extract PR Info

Use `jules_extract_pr_from_session` to get PR details from a completed session:

```json
{
  "session_id": "the-session-id"
}
```

### Option 3: Create PR Manually via GitHub MCP

If Jules pushed changes but didn't create a PR, use GitHub MCP:

```json
{
  "owner": "MikBin",
  "repo": "algorithmsts",
  "title": "feat: description of changes",
  "head": "feat/branch-name",
  "base": "main",
  "body": "Description of changes made by Jules session <id>"
}
```

---

## Merging PRs

Once a PR is reviewed and approved, merge via GitHub MCP:

```json
{
  "owner": "MikBin",
  "repo": "algorithmsts",
  "pullNumber": 123,
  "merge_method": "squash",
  "commit_title": "feat: add counting sort visualization",
  "commit_message": "Additional details about the changes"
}
```

---

## Interacting with Active Sessions

### Sending Messages

When a session is in `AWAITING_USER_FEEDBACK` state, provide guidance:

```json
{
  "session_id": "the-session-id",
  "message": "Please use the existing utility functions in src/utils/ instead of creating new ones. Follow the patterns in src/algorithms/sorting/quick-sort.ts."
}
```

### Approving Plans

When a session is in `AWAITING_PLAN_APPROVAL` state:

```json
{
  "session_id": "the-session-id"
}
```

---

## Orchestration Workflow

1. **Plan tasks**: Break work into independent, parallelizable units that can run as separate sessions on separate branches.

2. **Create sessions**: Launch multiple sessions concurrently with `AUTO_CREATE_PR` enabled. Always pass `owner` and `repo` explicitly.

3. **Monitor**: The background monitor polls sessions automatically. Only call `jules_get_session` when you need to check a specific session's result.

4. **Handle feedback**: The event watcher detects `AWAITING_USER_FEEDBACK` / `AWAITING_PLAN_APPROVAL` states. Respond via `jules_send_message` or `jules_approve_plan` when notified.

5. **Review PRs**: Once sessions complete, review PRs via GitHub MCP tools (`pull_request_read` with method `get_files`, `get_diff`, etc.).

6. **Merge**: Merge approved PRs via `merge_pull_request`.

7. **Clean up**: Delete sessions that are no longer needed with `jules_delete_session`:

```json
{
  "session_id": "the-session-id"
}
```

---

## Best Practices

### Parallel Sessions
Jules can run multiple sessions concurrently on different branches. Use this for independent tasks that don't modify the same files.

### Detailed Prompts
Jules works best with specific, detailed prompts:
- Specify exact file paths
- Reference existing patterns to follow
- Include testing requirements
- Mention any constraints or conventions

### Branch Strategy
- Always use feature branches
- Never point Jules at `main` directly
- Use descriptive branch names (e.g., `feat/counting-sort-viz`, `fix/avl-tree-balance`)

### Don't Poll Manually
Rely on the background monitor and event watcher instead of calling `jules_list_sessions` in a loop. Jules sessions typically take 10-30 minutes.

### Auto-approve Plans
Set `auto_approve_plans: true` in your configuration if you want the event handler to automatically approve plans without local agent intervention.

### Session Cleanup
Delete completed or failed sessions when they're no longer needed to keep the session list manageable.

---

## Example: Full Workflow

```
1. Create session with AUTO_CREATE_PR
   ↓
2. Monitor for state changes (background process)
   ↓
3. If AWAITING_PLAN_APPROVAL → Review and approve
   ↓
4. If AWAITING_USER_FEEDBACK → Read activities, send message
   ↓
5. When COMPLETED → Extract PR info
   ↓
6. Review PR via GitHub MCP
   ↓
7. Merge if approved
   ↓
8. Delete session