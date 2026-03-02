# AGENTS.md

## Jules Orchestrator Mode

When acting as a Jules orchestrator, you manage Jules as a remote senior developer via the Jules MCP server and coordinate PR workflows via the GitHub MCP server.

### Available Jules MCP Tools

| Tool | Purpose |
|------|---------|
| `jules_create_session` | Create a new coding session on a GitHub repo/branch |
| `jules_get_session` | Get session metadata, state, and outputs |
| `jules_list_sessions` | List all sessions with pagination |
| `jules_list_activities` | Monitor session progress (events, plans, messages) |
| `jules_get_activity` | Get a single activity by ID |
| `jules_send_message` | Send instructions or feedback to an active session |
| `jules_approve_plan` | Approve a pending plan (when `requirePlanApproval: true`) |
| `jules_cancel_or_delete_session` | Cancel or delete a session |
| `jules_extract_pr_from_session` | Extract PR info from completed session outputs |
| `jules_list_sources` / `jules_get_source` | List/get connected GitHub repositories |

### Creating Sessions

When creating sessions, use these key parameters:

- **`prompt`**: Clear, detailed task description. Be specific about file paths, expected behavior, and testing requirements.
- **`branch`**: Use a descriptive feature branch name (e.g., `feat/counting-sort-viz`).
- **`automationMode: "AUTO_CREATE_PR"`**: Automatically creates a pull request when Jules finishes. **Always use this for hands-off workflows.**
- **`requirePlanApproval: true`**: Pause before execution so you can review the plan. Use when you want oversight.

### Session States

| State | Action |
|-------|--------|
| `QUEUED` | Wait — session is in queue |
| `PLANNING` | Wait — Jules is analyzing the task |
| `AWAITING_PLAN_APPROVAL` | Review plan, then call `jules_approve_plan` |
| `AWAITING_USER_FEEDBACK` | Read activities to understand what Jules needs, then `jules_send_message` |
| `IN_PROGRESS` | Wait — Jules is actively working |
| `COMPLETED` | Extract outputs and handle PR (see below) |
| `FAILED` | Check activities for error details |

### Publishing PRs from Completed Sessions

The Jules API does **not** have a dedicated "publish PR" endpoint. Use one of these strategies:

#### Option 1: Auto-create PR at session creation (recommended)
Set `automationMode: "AUTO_CREATE_PR"` when creating the session. Jules will automatically open a PR when work is done. The PR URL will appear in session outputs.

#### Option 2: Send a message asking Jules to publish
If a session was created without `AUTO_CREATE_PR` and is still active or just completed:
```
jules_send_message(session_id, "Please publish a pull request with your changes now.")
```
This is a workaround — Jules may or may not act on it depending on session state.

#### Option 3: Create PR manually via GitHub MCP
If Jules pushed changes to a branch but didn't create a PR, use the GitHub MCP server directly:
```
github.create_pull_request(
  owner, repo,
  title: "feat: description of changes",
  head: "feat/branch-name",   # Jules's working branch
  base: "main",               # target branch
  body: "Description of changes made by Jules session <id>"
)
```

### Merging PRs

Once a PR exists and is reviewed, merge it via the GitHub MCP:
```
github.merge_pull_request(owner, repo, pull_number, merge_method: "squash")
```

### Orchestration Workflow

1. **Plan tasks**: Break work into independent, parallelizable units that can run as separate sessions on separate branches.
2. **Create sessions**: Launch multiple sessions concurrently with `AUTO_CREATE_PR` enabled.
3. **Monitor**: Periodically call `jules_list_sessions` and `jules_get_session` to check states.
4. **Handle feedback**: If a session is `AWAITING_USER_FEEDBACK` or `AWAITING_PLAN_APPROVAL`, read its activities and respond.
5. **Review PRs**: Once sessions complete, review the PRs via `github.get_pull_request_files` and `github.get_pull_request`.
6. **Merge**: Merge approved PRs via `github.merge_pull_request`.
7. **Clean up**: Delete sessions that are no longer needed with `jules_cancel_or_delete_session`.

### Tips

- **Parallel sessions**: Jules can run multiple sessions concurrently on different branches. Use this for independent tasks.
- **Detailed prompts**: Jules works best with specific, detailed prompts including file paths, conventions to follow, and testing instructions.
- **Branch strategy**: Always use feature branches. Never point Jules at `main` directly.
- **Monitor don't micromanage**: Check session status periodically rather than polling constantly. Jules sessions typically take 10-30 minutes.
