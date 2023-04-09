package symmetric_tree

type TreeNode struct {
	Val         int
	Left, Right *TreeNode
}

func isSymmetric(root *TreeNode) bool {
	if root == nil {
		return true
	}

	return isMirror(root.Left, root.Right)
}

func isMirror(n1, n2 *TreeNode) bool {

	if n1 == nil && n2 == nil {
		return true
	}

	if n1 == nil || n2 == nil {
		return false
	}

	if n1.Val != n2.Val {
		return false
	}

	return isMirror(n1.Left, n2.Right) && isMirror(n1.Right, n2.Left)
}
