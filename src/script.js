import Tree from './bst'

function genRanArr(n){
  let res = [];
  for(let i=0; i<n; i++){
    res.push(Math.floor(Math.random()*100));
  }
  return res;
}

function printTree(){
  console.log('level -> ', tree.inorder());
  console.log('pre -> ', tree.preorder());
  console.log('post -> ', tree.postorder());
  console.log('in -> ', tree.inorder());
  tree.prettyPrint()
}

const tree = new Tree(genRanArr(20));

console.log('isTreeBalance? ', tree.isBalanced());

printTree()

for(let i=0; i<10; i++){
  tree.insert(Math.floor(Math.random()*100)+100);
}

console.log('isTreeBalance? ', tree.isBalanced());
tree.rebalance();
console.log('isTreeBalance? ', tree.isBalanced());

printTree();