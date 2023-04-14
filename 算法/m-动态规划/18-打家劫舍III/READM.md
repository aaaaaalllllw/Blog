## 打家劫舍 III

一定是数的后序遍历

```js
function rob(TreeNode root){
  if(root==null) return 0
  if(root.left==null&&root.right==null) return root.val

  //偷父节点
  let val=root.val
  if(root.left) val1+=rob(root.left.left)+rob(root.left.right);//取左孩子下层孩子的值
  if(root.right) val1+=rob(root.right.left)+rob(root.right.right)

  //不偷父节点
  let val2=rob(root.val)+rob(root.right)//考虑root的左右孩子
  return Math.max(vak1,val2)
}
```

## 记忆化递推

```c++
class Solution {
public:
    unordered_map<TreeNode* , int> umap; // 记录计算过的结果
    int rob(TreeNode* root) {
        if (root == NULL) return 0;
        if (root->left == NULL && root->right == NULL) return root->val;
        if (umap[root]) return umap[root]; // 如果umap里已经有记录则直接返回
        // 偷父节点
        int val1 = root->val;
        if (root->left) val1 += rob(root->left->left) + rob(root->left->right); // 跳过root->left
        if (root->right) val1 += rob(root->right->left) + rob(root->right->right); // 跳过root->right
        // 不偷父节点
        int val2 = rob(root->left) + rob(root->right); // 考虑root的左右孩子
        umap[root] = max(val1, val2); // umap记录一下结果
        return max(val1, val2);
    }
};
```

## 动态规划

在上面两种方法，其实对一个节点 偷与不偷得到的最大金钱都没有做记录，而是需要实时计算。

而动态规划其实就是使用状态转移容器来记录状态的变化，这里可以使用一个长度为 2 的数组，记录当前节点偷与不偷所得到的的最大金钱。

**这道题目算是树形 dp 的入门题目，因为是在树上进行状态转移，我们在讲解二叉树的时候说过递归三部曲，那么下面以递归三部曲为框架，其中融合动规五部曲的内容进行解读**

现在这个节点，偷或者不偷 dp[不偷，偷]

```js

```
