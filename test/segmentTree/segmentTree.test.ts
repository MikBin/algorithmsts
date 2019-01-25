import { buildSegmentTree, queryRange, buildSegTreeIterative, iterativeQueryRange, updateLeafNode, updateLeafNodeIterative } from "../../src/segmentTree/segmentTree";
import { baseSegmentTreeNode } from "../../src/segmentTree/interfaces";

interface segmentNode extends baseSegmentTreeNode {
  min: number;
  max: number;
  sum: number;
  minIdx: number;
  maxIdx: number;

};

const nodeFactoryFn = (val: number, l: number, r: number): segmentNode => {
  let node: segmentNode = {
    left: l,
    right: r,
    min: Number.MAX_VALUE,
    max: -Number.MAX_VALUE,
    sum: 0,
    minIdx: -1,
    maxIdx: -1
  };

  if (r - l == 0) {
    node.min = val;
    node.max = val;
    node.maxIdx = l;
    node.minIdx = l;
    node.sum = val;
  }

  return node;
};

/**@TODO this can be  used for querying too, just create the parent locally...
 * and btw theres no need of parent as the left and right info can be taken from left anr right child */
const nodeMergerFn = (parent: segmentNode, leftChild: segmentNode, rightChild: segmentNode): segmentNode => {
  parent.max = Math.max(leftChild.max, rightChild.max);
  parent.min = Math.min(leftChild.min, rightChild.min);
  parent.max == leftChild.max ? parent.maxIdx = leftChild.maxIdx : parent.maxIdx = rightChild.maxIdx;
  parent.min == leftChild.min ? parent.minIdx = leftChild.minIdx : parent.minIdx = rightChild.minIdx;
  parent.sum = leftChild.sum + rightChild.sum;
  return parent;
};

const nodeSegLeafUpdater = (t: number, leaf: segmentNode): void => {
  leaf.max = leaf.min = leaf.sum = t;
}

const nodeQueryMerger = (leftNode: segmentNode, rightNode: segmentNode) => {
  if (leftNode.left == -1) return rightNode;
  if (rightNode.left == -1) return leftNode;
  let mergedNode: segmentNode = {
    left: leftNode.left,
    right: rightNode.right,
    min: Number.MAX_VALUE,
    max: -Number.MAX_VALUE,
    sum: leftNode.sum + rightNode.sum,
    minIdx: -1,
    maxIdx: -1
  };

  [mergedNode.minIdx, mergedNode.min] = leftNode.min < rightNode.min ? [leftNode.minIdx, leftNode.min] : [rightNode.minIdx, rightNode.min];
  [mergedNode.maxIdx, mergedNode.max] = leftNode.max > rightNode.max ? [leftNode.maxIdx, leftNode.max] : [rightNode.maxIdx, rightNode.max];

  return mergedNode;
};

describe("testing segmentTree setup query and update: ", () => {

  let testArr: Array<number> = [3, 45, 6, 7, 8, 23, 1, 2, 55, 6, 7, 85, 34, 6, 12, 66];
  /**@TODO test edge cases and different lengths */
  const SEGMENT: segmentNode[] = buildSegmentTree(testArr, nodeFactoryFn, nodeMergerFn);
  const SEG_ITER: segmentNode[] = buildSegTreeIterative(testArr, nodeFactoryFn, nodeMergerFn);
  it("builds a segmentTree from a small array:", () => {

    SEGMENT.forEach((node, idx) => {
      if (idx > 0) {
        expect(node.left).not.toEqual(-1);
        expect(node.right).not.toEqual(-1);
        // expect(node.right).toBeGreaterThanOrEqual(node.left);
        expect(node.min).not.toEqual(Number.MAX_VALUE);
        expect(node.max).not.toEqual(-Number.MAX_VALUE);
      }

    });

  });

  /**@TODO test by comparing iterative and recoursive creation of trees in different cases */
  it("builds a segmentTree using iterative build:", () => {

    SEG_ITER.forEach((node, idx) => {
      if (idx > 0) {
        expect(node.left).not.toEqual(-1);
        expect(node.right).not.toEqual(-1);
        // expect(node.right).toBeGreaterThanOrEqual(node.left);
        expect(node.min).not.toEqual(Number.MAX_VALUE);
        expect(node.max).not.toEqual(-Number.MAX_VALUE);
      }

    });

  });

  it("queries a range: ", () => {
    let res = queryRange(SEGMENT, 1, 4, 7, nodeQueryMerger);
    expect(res.sum).toEqual(34);
    expect(res.max).toEqual(23);
    expect(res.min).toEqual(1);
    expect(res.minIdx).toEqual(6);
    expect(res.maxIdx).toEqual(5);

  });

  it("queries a range in iterative tree by recoursive call: ", () => {
    let res = queryRange(SEG_ITER, 1, 4, 7, nodeQueryMerger);
    expect(res.sum).toEqual(34);
    expect(res.max).toEqual(23);
    expect(res.min).toEqual(1);
    expect(res.minIdx).toEqual(6);
    expect(res.maxIdx).toEqual(5);

  });

  it("queries a range in iterative tree by iterative call: ", () => {
    let res = iterativeQueryRange(SEG_ITER, 4, 7, nodeQueryMerger);

    expect(res.sum).toEqual(34);
    expect(res.max).toEqual(23);
    expect(res.min).toEqual(1);
    expect(res.minIdx).toEqual(6);
    expect(res.maxIdx).toEqual(5);

  });

  let testArr19: Array<number> = [3, 45, 6, 7, 8, 23, 1, 2, 55, 6, 7, 85, 34, 6, 12, 66, 34, 22, 8];

  const SEG_ITER19: segmentNode[] = buildSegTreeIterative(testArr19, nodeFactoryFn, nodeMergerFn);
  /* for (let i = 0; i < SEG_ITER19.length; i++) {
     console.log(i, SEG_ITER19[i]);
   }*/
  it("creates segment tree of 19 length source: ", () => {

    SEG_ITER19.forEach((node, idx) => {

      if (idx > 0) {

        expect(node.left).not.toEqual(-1);
        expect(node.right).not.toEqual(-1);
        //expect(node.right).toBeGreaterThanOrEqual(node.left);
        expect(node.min).not.toEqual(Number.MAX_VALUE);
        expect(node.max).not.toEqual(-Number.MAX_VALUE);
      }

    });

  });

  it("queries a range in iterative tree by recoursive call: tree from 19 length source ", () => {
    let res = iterativeQueryRange(SEG_ITER19, 4, 7, nodeQueryMerger);
    expect(res.sum).toEqual(34);
    expect(res.max).toEqual(23);
    expect(res.min).toEqual(1);
    expect(res.minIdx).toEqual(6);
    expect(res.maxIdx).toEqual(5);

  });

  it("queries from beginning: tree from 19 length source ", () => {
    let res = iterativeQueryRange(SEG_ITER19, 0, 7, nodeQueryMerger);
    let resOld = iterativeQueryRange(SEG_ITER, 0, 7, nodeQueryMerger);
    let resRec = queryRange(SEGMENT, 1, 0, 7, nodeQueryMerger);
    //console.log(res, resRec, resOld);

    expect(res).toEqual(resOld);
    expect(res).toEqual(resRec);

  });

  it("updates a leaf in recoursive tree reducing the maximum in that interval", () => {
    updateLeafNode(SEGMENT, 20, 5, nodeSegLeafUpdater, nodeMergerFn);
    let res = queryRange(SEGMENT, 1, 4, 7, nodeQueryMerger);
    expect(res.sum).toEqual(31);
    expect(res.max).toEqual(20);
    expect(res.min).toEqual(1);
    expect(res.minIdx).toEqual(6);
    expect(res.maxIdx).toEqual(5);
  });

  it("updates a leaf in iterative built tree reducing the maximum in that interval", () => {

    updateLeafNodeIterative(SEG_ITER, 20, 5, nodeSegLeafUpdater, nodeMergerFn);
    let res = queryRange(SEG_ITER, 1, 4, 7, nodeQueryMerger);
    expect(res.sum).toEqual(31);
    expect(res.max).toEqual(20);
    expect(res.min).toEqual(1);
    expect(res.minIdx).toEqual(6);
    expect(res.maxIdx).toEqual(5);
  });

  it("modifies place in query range for tree19 too and check queries are the same on all trees ", () => {
    updateLeafNodeIterative(SEG_ITER19, 20, 5, nodeSegLeafUpdater, nodeMergerFn);
    let res = iterativeQueryRange(SEG_ITER19, 0, 7, nodeQueryMerger);
    let resOld = iterativeQueryRange(SEG_ITER, 0, 7, nodeQueryMerger);
    let resRec = queryRange(SEGMENT, 1, 0, 7, nodeQueryMerger);
    // console.log(res, resRec, resOld);

    expect(res).toEqual(resOld);
    expect(res).toEqual(resRec);

  });

  it("creates new minimum and new maximum then queries whole tree ", () => {
    let resWholePrev = iterativeQueryRange(SEG_ITER19, 0, 18, nodeQueryMerger);
    updateLeafNodeIterative(SEG_ITER19, 0, 18, nodeSegLeafUpdater, nodeMergerFn);
    updateLeafNodeIterative(SEG_ITER19, 100, 1, nodeSegLeafUpdater, nodeMergerFn);
    let resWhole = iterativeQueryRange(SEG_ITER19, 0, 18, nodeQueryMerger);
    let resLeftBranch = iterativeQueryRange(SEG_ITER19, 0, 8, nodeQueryMerger);
    let resRightBranch = iterativeQueryRange(SEG_ITER19, 9, 18, nodeQueryMerger);
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < 9; i++) { leftSum += testArr19[i]; }
    for (let i = 9; i < 19; i++) { rightSum += testArr19[i]; }
    expect(resWhole.max).toEqual(100);
    expect(resWhole.min).toEqual(0);
    expect(resWhole.sum).toEqual(47 + resWholePrev.sum);

    expect(resLeftBranch.max).toEqual(100);
    expect(resLeftBranch.min).toEqual(1);
    expect(resLeftBranch.sum).toEqual(leftSum + 52);

    expect(resRightBranch.max).toEqual(85);
    expect(resRightBranch.min).toEqual(0);
    expect(resRightBranch.sum).toEqual(rightSum - 8);
  });
});
