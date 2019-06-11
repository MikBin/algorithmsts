import {
  baseSegmentTreeNode,
  segmentTreeRangeNodePropagator,
  segmentTreeNodeFactory,
  segmentTreeNodeMerger,
  segmentTreeQueryMerger,
  segmentTreeLeafNodeUpdater,
  segmentTreeRangeNodeUpdater
} from './interfaces'

/**
 * as  upper tight c++ implementation: https://codeforces.com/blog/entry/18051
 *
 * ITERATIVE VERSION: https://www.geeksforgeeks.org/iterative-segment-tree-range-minimum-query/
 * https://www.quora.com/What-are-the-advantage-of-binary-indexed-tree-BIT-or-fenwick-tree-over-segment-tree
 * make it faster with the above link using non recoursive queries
 */

export const insertNode = <T, U extends baseSegmentTreeNode>(
  segTreeArray: Array<U>,
  originArray: Array<T>,
  i: number,
  left: number,
  right: number,
  segmentNodeFactory: segmentTreeNodeFactory<T, U>
): number => {
  const LR_DIFF: number = right - left
  segTreeArray[i] = segmentNodeFactory(originArray[left], left, right)
  if (LR_DIFF === 0) return i

  let leftIdx = 2 * i
  let rightIdx = 2 * i + 1
  let leftLeft = left
  let leftRight = Math.floor(LR_DIFF / 2) + left
  let rightLeft = leftRight + 1
  let rightRight = right

  insertNode(segTreeArray, originArray, leftIdx, leftLeft, leftRight, segmentNodeFactory)
  insertNode(segTreeArray, originArray, rightIdx, rightLeft, rightRight, segmentNodeFactory)

  return i
}

export const buildSegTreeIterative = <T, U extends baseSegmentTreeNode>(
  sourceArray: Array<T>,
  segmentNodeFactory: segmentTreeNodeFactory<T, U>,
  segmentNodeMerger: segmentTreeNodeMerger<U>
): Array<U> => {
  let n: number = sourceArray.length

  const SEG_TREE_ARRAY: Array<U> = new Array(2 * n)
  for (let i = 0; i < n; i++) {
    SEG_TREE_ARRAY[n + i] = segmentNodeFactory(sourceArray[i], i, i)
  }
  for (let i = n - 1; i > 0; i--) {
    let l = i << 1
    let r = (i << 1) | 1
    let left = SEG_TREE_ARRAY[l].left
    let right = SEG_TREE_ARRAY[r].right
    SEG_TREE_ARRAY[i] = segmentNodeFactory(sourceArray[i], left, right)
    //SEG_TREE_ARRAY[i].leftChild = SEG_TREE_ARRAY[l];
    //SEG_TREE_ARRAY[i].rightChild = SEG_TREE_ARRAY[r];
    segmentNodeMerger(SEG_TREE_ARRAY[i], SEG_TREE_ARRAY[l], SEG_TREE_ARRAY[r])
  }
  return SEG_TREE_ARRAY
}

export const buildSegmentTree = <T, U extends baseSegmentTreeNode>(
  sourceArray: Array<T>,
  segmentNodeFactory: segmentTreeNodeFactory<T, U>,
  segmentNodeMerger: segmentTreeNodeMerger<U>
): Array<U> => {
  let l: number = sourceArray.length
  let n: number = Math.ceil(Math.log2(l))
  let L: number = Math.pow(2, n + 1)
  const SEG_TREE_ARRAY: Array<U> = new Array(L)
  /**fill with baseSegmentTreeEmptyNodes */
  for (let i = 0; i < L; i++) SEG_TREE_ARRAY[i] = <U>{ left: -1, right: -1 }
  insertNode(SEG_TREE_ARRAY, sourceArray, 1, 0, l - 1, segmentNodeFactory)

  let j: number = L - 1

  while (SEG_TREE_ARRAY[j].left == -1 || SEG_TREE_ARRAY[j].right >= l) {
    j--
    //console.log(`reducing to ${j}`)
  }
  j++

  SEG_TREE_ARRAY.length = j
  L = j

  for (let i = L - 1; i > 0; i--) {
    let node = SEG_TREE_ARRAY[i]
    if (node.right - node.left !== 0) {
      let leftChild: U = SEG_TREE_ARRAY[i * 2]
      let rightChild: U = SEG_TREE_ARRAY[i * 2 + 1]
      segmentNodeMerger(node, leftChild, rightChild)
    }
  }

  return SEG_TREE_ARRAY
}

/** @TODO make an iterative query range that updates lazy values too???? */
export const iterativeQueryRange = <U extends baseSegmentTreeNode>(
  segmentTree: Array<U>,
  l: number,
  r: number,
  queryMerger: segmentTreeQueryMerger<U>
): U => {
  let n = segmentTree.length / 2
  let left = l
  let right = r
  right++ //as this algorithm queries [left,right) so to be consistent with the above one right++ is needed (doing right-- instead --right would get same result?)
  //@TODO optimize for compilers
  let resLeft = <U>{ left: -1, right: -1 }
  let resRight = <U>{ left: -1, right: -1 }
  //console.log("query merger iterative started", left, right);
  for (left += n, right += n; left < right; left >>= 1, right >>= 1) {
    // console.log(`query merger cycle: ${left} ${right}`);
    if (left & 1) {
      //console.log(`querymerger going to merge left:${left} ${resLeft.left} ${resLeft.right}  ${segmentTree[left].left} ${segmentTree[left].right}`);
      resLeft = queryMerger(resLeft, segmentTree[left++])
    }
    if (right & 1) {
      // console.log(`querymerger going to merge right:${right} ${resRight.left} ${resRight.right}  ${segmentTree[right - 1].left} ${segmentTree[right - 1].right}`);
      resRight = queryMerger(segmentTree[--right], resRight)
    }
  }

  let answer = JSON.parse(JSON.stringify(queryMerger(resLeft, resRight)))
  answer.left = l
  answer.right = r

  return answer
}

export const queryRange = <U extends baseSegmentTreeNode>(
  segmentTree: Array<U>,
  nodeIndex: number,
  left: number,
  right: number,
  queryMerger: segmentTreeQueryMerger<U>
): U => {
  let Node: U = segmentTree[nodeIndex]
  if (!Node) return <U>{ left: -1, right: -1 }
  if (Node.left > right || Node.right < left) return <U>{ left: -1, right: -1 }
  if (Node.left >= left && Node.right <= right) return Node

  let leftBranch = queryRange(segmentTree, 2 * nodeIndex, left, right, queryMerger)
  let rightBranch = queryRange(segmentTree, 2 * nodeIndex + 1, left, right, queryMerger)
  /**@TODO return a full copy of the result --> cannot risk to return a piece of the tree and get it modified elsewere */
  return queryMerger(leftBranch, rightBranch)
}

export const updateLeafNode = <T, U extends baseSegmentTreeNode>(
  segmentTree: Array<U>,
  sourceVal: T,
  updateIndex: number,
  segmentNodeLeafUpdater: (t: T, leafNode: U) => void,
  segmentNodeMerger: segmentTreeNodeMerger<U>
): void => {
  let index = 1
  let Node = segmentTree[index]
  let left = Node.left
  let right = Node.right
  let aux = 0
  while (right - left !== 0) {
    let mid: number = left + (right - left) / 2
    if (updateIndex <= mid) {
      index *= 2
      Node = segmentTree[index]
    } else {
      index = index * 2 + 1
      Node = segmentTree[index]
    }
    left = Node.left
    right = Node.right
  }

  segmentNodeLeafUpdater(sourceVal, segmentTree[index])

  let r = 0
  while (index > 1) {
    aux = index
    index >>= 1
    r = aux & 1

    segmentNodeMerger(segmentTree[index], segmentTree[aux - r], segmentTree[aux + (r ^ 1)])
  }
}

export const updateLeafNodeIterative = <T, U extends baseSegmentTreeNode>(
  segmentTree: Array<U>,
  sourceVal: T,
  updateIndex: number,
  segmentNodeLeafUpdater: segmentTreeLeafNodeUpdater<T, U>,
  segmentNodeMerger: segmentTreeNodeMerger<U>
): void => {
  let index: number = segmentTree.length / 2 + updateIndex
  let aux: number = 0

  segmentNodeLeafUpdater(sourceVal, segmentTree[index])

  let r: number = 0
  while (index > 1) {
    aux = index
    index >>= 1
    r = aux & 1

    segmentNodeMerger(segmentTree[index], segmentTree[aux - r], segmentTree[aux + (r ^ 1)])
  }
}

/**@TODO make interface for lazy node updater
 * must use recoursive queryRange from top to bottom to have lazyness work
 */
export const updateRangeLazy = <T, U extends baseSegmentTreeNode>(
  segmentTree: Array<U>,
  sourceVal: T,
  nodeIndex: number,
  left: number,
  right: number,
  segmentNodeUpdater: segmentTreeRangeNodeUpdater<T, U>,
  segmentNodeMerger: segmentTreeNodeMerger<U>,
  segmentNodePropagator: segmentTreeRangeNodePropagator<U>
): void => {
  let Node: U = segmentTree[nodeIndex]
  if (!Node) return
  /**check for lazy value to be propagated even if node is out of range??? add a flag on segmentNode Interface???? call it _lazy:boolean
   * if(Node._lazy) segmentNodeUpdater(???)
   */
  let leftChild: U = segmentTree[2 * nodeIndex]
  let rightChild: U = segmentTree[2 * nodeIndex + 1]
  if (Node.left != Node.right) segmentNodePropagator(Node, leftChild, rightChild)

  if (Node.left > right || Node.right < left) return //completely out of range

  if (Node.left >= left && Node.right <= right) {
    //fully inside range
    /**chidlren are lazily updated inside segmentNodeUpdater */
    if (Node.left == Node.right) return segmentNodeUpdater(sourceVal, Node)
    return segmentNodeUpdater(sourceVal, Node, leftChild, rightChild)
  }

  //partial range overlap
  updateRangeLazy(
    segmentTree,
    sourceVal,
    2 * nodeIndex,
    left,
    right,
    segmentNodeUpdater,
    segmentNodeMerger,
    segmentNodePropagator
  )
  updateRangeLazy(
    segmentTree,
    sourceVal,
    2 * nodeIndex + 1,
    left,
    right,
    segmentNodeUpdater,
    segmentNodeMerger,
    segmentNodePropagator
  )
  //console.log(`calling updaterange on ${Node.left}/${Node.right} updating range: ${left}-${right}`)
  segmentNodeMerger(Node, leftChild, rightChild)

  /*update this root Node given value to be updated in some of its descendants 
  http://se7so.blogspot.com/2012/12/segment-trees-and-lazy-propagation.html
  a partialParentRangeUpdater is needed
  */
}

/**propagates down whatever change is done on each node starting from root, needs a function that takes a node and its two children and modifies them */
export const propagateDown = <U extends baseSegmentTreeNode>(
  segmentTree: Array<U>,
  lazyNodesUpdater: segmentTreeNodeMerger<U>
): void => {
  for (let i = 0; i < segmentTree.length; i++) {
    let node = segmentTree[i]
    if (node && node.left < node.right) {
      lazyNodesUpdater(node, segmentTree[i * 2], segmentTree[i * 2 + 1])
    }
  }
}

export const updateBottomUm = <U extends baseSegmentTreeNode>(
  segmentTree: Array<U>,
  segmentNodeMerger: segmentTreeNodeMerger<U>
): void => {}
//@TODO https://codeforces.com/blog/entry/18051
//updateRAnge and lazyPropagation
//@TODO add outof bound query exception or just call within original array bounds
export class SegmentTree<T, U extends baseSegmentTreeNode> {
  private _SEG_TREE: Array<U>
  //protected segmentNodeMerger:segmentTreeNodeMerger<U>;
  //protected segmentNodeFactory:segmentTreeNodeFactory<T,U>;
  constructor(
    sourceArray: Array<T>,
    protected segmentNodeFactory: segmentTreeNodeFactory<T, U>,
    protected segmentNodeMerger: segmentTreeNodeMerger<U>,
    protected segmentNodeQuery: segmentTreeQueryMerger<U>,
    protected segmentLeaftUpdater: segmentTreeLeafNodeUpdater<T, U>
  ) {
    this._SEG_TREE = buildSegTreeIterative(sourceArray, segmentNodeFactory, segmentNodeMerger)
  }
  query(left: number, right: number): U {
    return iterativeQueryRange(this._SEG_TREE, left, right, this.segmentNodeQuery)
  }
  updateLeaf(value: T, position: number): void {
    updateLeafNodeIterative(
      this._SEG_TREE,
      value,
      position,
      this.segmentLeaftUpdater,
      this.segmentNodeMerger
    )
  }
  getTree() {
    return this._SEG_TREE
  }
}
