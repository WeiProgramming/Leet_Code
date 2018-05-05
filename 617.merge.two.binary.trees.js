/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */


var mergeTrees = function(t1, t2) {
    if((t1.val) && (t2.val)){
        tree = new TreeNode(t1.val + t2.val);
        mergeTrees(t1.left,t2.left);
    }
    if(!t1.left && t2.left){
        tree = new TreeNode(t2.left.val);
        mergeTrees(t1.left,t2.left)
    }
    else if(t1.left && !t2.left){
        tree = new TreeNode(t1.left.val);
        mergeTrees(t1.left,t2.left)
    }
    else if(!t1.left && !t2.left){ //both null go back up and check right node
        mergeTrees(t1.right,t2.right);
    }
};