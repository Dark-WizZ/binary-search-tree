class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr) {
    this.arr = this.#uniqueSort(arr);
    this.root = this.buildTree(this.arr, 0, this.arr.length - 1);
  }

  buildTree(arr, start, end) {
    if (start > end) return null;
    let mid = parseInt((end + start) / 2);
    let node = new Node(arr[mid]);
    node.left = this.buildTree(arr, start, mid - 1);
    node.right = this.buildTree(arr, mid + 1, end);
    return node;
  }

  insert(value) {
    let node = this.root;
    while (node) {
      if (node.left && node.data > value) {
        node = node.left;
      } else if (node.right && node.data < value) {
        node = node.right;
      } else if (node.data === value) {
        return;
      } else break;
    }
    if (node.data > value) {
      node.left = new Node(value);
    } else {
      node.right = new Node(value);
    }
  }

  delete(value, root = this.root) {
    if (!root) return root;

    if (value < root.data) {
      root.left = this.delete(value, root.left);
    } else if (value > root.data) {
      root.right = this.delete(value, root.right);
    } else {
      //node found with the searched value
      //node either have one or no child
      if (!root.left) return root.right;
      if (!root.right) return root.left;

      //node have two childs
      root.data = this.#findMinVal(root.right);
      //swap the node with just next large value
      root.right = this.delete(root.data, root.right);
    }
    return root;
  }

  find(value, root = this.root) {
    if (!root) return;
    if (root.data == value) return root;
    if (value < root.data) {
      return this.find(value, root.left);
    } else {
      return this.find(value, root.right);
    }
  }

  levelOrder(fn) {
    let q = [this.root];
    let res = [];
    while (q.length) {
      let node = q.shift();
      if (fn && node) fn(node);
      res.push(node.data);
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    return res;
  }

  inorder(fn) {
    let res = [];
    function recurse(root) {
      if (!root) return;
      recurse(root.left);
      if (fn) fn(root);
      res.push(root.data);
      recurse(root.right);
    }
    recurse(this.root);
    return res;
  }

  preorder(fn) {
    let res = [];
    function recurse(root) {
      if (!root) return;
      if (fn) fn(root);
      res.push(root.data)
      recurse(root.left);
      recurse(root.right);
    }
    recurse(this.root);
    return res;
  }

  postorder(fn) {
    let res = [];
    function recurse(root) {
      if (!root) return;
      recurse(root.left);
      recurse(root.right);
      if (fn) fn(root);
      res.push(root.data);
    }
    recurse(this.root);
    return res;
  }

  height(node) {
    if (!node) return -1;
    return Math.max(this.height(node.left) + 1, this.height(node.right) + 1);
  }

  depth(node, root = this.root) {
    if (!node) return -1;
    if (node.data == root.data) return 0;
    if (node.data < root.data) {
      return this.depth(node, root.left) + 1;
    } else if (node.data > root.data) {
      return this.depth(node, root.right) + 1;
    }
  }

  isBalanced() {
    return (
      Math.abs(this.height(this.root.left) - this.height(this.root.right)) < 2
    );
  }

  rebalance() {
    let arr = this.inorder();
    this.root = this.buildTree(arr, 0, arr.length - 1);
  }

  #findMinVal = (root) => {
    let min = root.data;
    while (root.left) {
      min = root.left.data;
      root = root.left;
    }
    return min;
  };

  #uniqueSort = (arr) => {
    if (!arr.length) return;
    arr = arr.sort((a, b) => a - b);
    return [...new Set(arr)];
  };

  prettyPrint(node=this.root, prefix = "", isLeft = true) {
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}


export default Tree; 