import { baseSegmentTreeNode } from "./interfaces";

export const insertNode = <T, U extends baseSegmentTreeNode>(segTreeArray: Array<U>, originArray: Array<T>, i: number, left: number, right: number, segmentNodeFactory: (t: T, l: number, r: number, i: number) => U): number => {
  const LR_DIFF: number = right - left;
  segTreeArray[i] = segmentNodeFactory(originArray[left], left, right, i);
  if (LR_DIFF === 0) return i;

  let leftIdx = 2 * i + 1;
  let rightIdx = 2 * i + 2;
  let leftLeft = left;
  let leftRight = Math.floor(LR_DIFF / 2) + left;
  let rightLeft = leftRight + 1;
  let rightRight = right;

  insertNode(segTreeArray, originArray, leftIdx, leftLeft, leftRight, segmentNodeFactory);
  insertNode(segTreeArray, originArray, rightIdx, rightLeft, rightRight, segmentNodeFactory);

  return i;
}

/*
output array type is different from  input one as the output is segmentTree
*/
export const buildSegmentTree = <T, U extends baseSegmentTreeNode>(sourceArray: Array<T>, segmentNodeFactory: (t: T, l: number, r: number, i: number) => U, segmentNodeMerger: (parent: U, u1: U, u2: U) => U): Array<U> => {
  let l: number = sourceArray.length;
  let n: number = Math.ceil(Math.log2(l));
  let L: number = Math.pow(2, n + 1);
  const SEG_TREE_ARRAY: Array<U> = new Array(L);
  /**fill with baseSegmentTreeEmptyNodes */
  for (let i = 0; i < L; i++) SEG_TREE_ARRAY[i] = <U>{ left: -1, right: -1 };
  insertNode(SEG_TREE_ARRAY, sourceArray, 0, 0, l - 1, segmentNodeFactory);

  let j: number = L - 1;

  while (SEG_TREE_ARRAY[j].left == -1 || SEG_TREE_ARRAY[j].right >= l) {
    j--;
  }
  j++;
  SEG_TREE_ARRAY.length = j;
  L = j;

  for (let i = L - 1; i >= 0; i--) {
    let node = SEG_TREE_ARRAY[i];
    if (node.left !== -1 && node.right < l) {
      let leftChild: U = SEG_TREE_ARRAY[i * 2 + 1];
      let rightChild: U = SEG_TREE_ARRAY[i * 2 + 2];
      segmentNodeMerger(node, leftChild, rightChild);
    }

  }

  return SEG_TREE_ARRAY;

}
