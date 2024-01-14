import maxDepth, { TreeNode } from './maximum-depth-of-binary-tree';

describe('maxDepth tests', () => {
  it('should return the maximum depth of a binary tree correctly', () => {
    const tree: TreeNode = {
      val: 3,
      left: { val: 9, left: null, right: null },
      right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null },
      },
    };

    expect(maxDepth(tree)).toBe(3);
  });

  it('should return the maximum depth correctly in right skewed binary tree', () => {
    const tree: TreeNode = {
      val: 1,
      left: null,
      right: { val: 2, left: null, right: null },
    };

    expect(maxDepth(tree)).toBe(2);
  });

  it('should return the maximum depth correctly when the tree has only one node', () => {
    const tree: TreeNode = {
      val: 1,
      left: null,
      right: null,
    };

    expect(maxDepth(tree)).toBe(1);
  });
});
