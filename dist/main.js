/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bst.js":
/*!********************!*\
  !*** ./src/bst.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tree); 

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bst */ "./src/bst.js");


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

const tree = new _bst__WEBPACK_IMPORTED_MODULE_0__["default"](genRanArr(20));

console.log('isTreeBalance? ', tree.isBalanced());

printTree()

for(let i=0; i<10; i++){
  tree.insert(Math.floor(Math.random()*100)+100);
}

console.log('isTreeBalance? ', tree.isBalanced());
tree.rebalance();
console.log('isTreeBalance? ', tree.isBalanced());

printTree();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPLEVBQUUseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsVUFBVTtBQUNqRTtBQUNBLHFDQUFxQyxPQUFPLEVBQUUseUJBQXlCO0FBQ3ZFO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7VUN6THBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOd0I7O0FBRXhCO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLDRDQUFJOztBQUVyQjs7QUFFQTs7QUFFQSxhQUFhLE1BQU07QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWSIsInNvdXJjZXMiOlsid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS8uL3NyYy9ic3QuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5sZWZ0ID0gbnVsbDtcbiAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgfVxufVxuXG5jbGFzcyBUcmVlIHtcbiAgY29uc3RydWN0b3IoYXJyKSB7XG4gICAgdGhpcy5hcnIgPSB0aGlzLiN1bmlxdWVTb3J0KGFycik7XG4gICAgdGhpcy5yb290ID0gdGhpcy5idWlsZFRyZWUodGhpcy5hcnIsIDAsIHRoaXMuYXJyLmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgYnVpbGRUcmVlKGFyciwgc3RhcnQsIGVuZCkge1xuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIG51bGw7XG4gICAgbGV0IG1pZCA9IHBhcnNlSW50KChlbmQgKyBzdGFydCkgLyAyKTtcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKGFyclttaWRdKTtcbiAgICBub2RlLmxlZnQgPSB0aGlzLmJ1aWxkVHJlZShhcnIsIHN0YXJ0LCBtaWQgLSAxKTtcbiAgICBub2RlLnJpZ2h0ID0gdGhpcy5idWlsZFRyZWUoYXJyLCBtaWQgKyAxLCBlbmQpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgaW5zZXJ0KHZhbHVlKSB7XG4gICAgbGV0IG5vZGUgPSB0aGlzLnJvb3Q7XG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLmxlZnQgJiYgbm9kZS5kYXRhID4gdmFsdWUpIHtcbiAgICAgICAgbm9kZSA9IG5vZGUubGVmdDtcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5yaWdodCAmJiBub2RlLmRhdGEgPCB2YWx1ZSkge1xuICAgICAgICBub2RlID0gbm9kZS5yaWdodDtcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5kYXRhID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgYnJlYWs7XG4gICAgfVxuICAgIGlmIChub2RlLmRhdGEgPiB2YWx1ZSkge1xuICAgICAgbm9kZS5sZWZ0ID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLnJpZ2h0ID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZSh2YWx1ZSwgcm9vdCA9IHRoaXMucm9vdCkge1xuICAgIGlmICghcm9vdCkgcmV0dXJuIHJvb3Q7XG5cbiAgICBpZiAodmFsdWUgPCByb290LmRhdGEpIHtcbiAgICAgIHJvb3QubGVmdCA9IHRoaXMuZGVsZXRlKHZhbHVlLCByb290LmxlZnQpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPiByb290LmRhdGEpIHtcbiAgICAgIHJvb3QucmlnaHQgPSB0aGlzLmRlbGV0ZSh2YWx1ZSwgcm9vdC5yaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vbm9kZSBmb3VuZCB3aXRoIHRoZSBzZWFyY2hlZCB2YWx1ZVxuICAgICAgLy9ub2RlIGVpdGhlciBoYXZlIG9uZSBvciBubyBjaGlsZFxuICAgICAgaWYgKCFyb290LmxlZnQpIHJldHVybiByb290LnJpZ2h0O1xuICAgICAgaWYgKCFyb290LnJpZ2h0KSByZXR1cm4gcm9vdC5sZWZ0O1xuXG4gICAgICAvL25vZGUgaGF2ZSB0d28gY2hpbGRzXG4gICAgICByb290LmRhdGEgPSB0aGlzLiNmaW5kTWluVmFsKHJvb3QucmlnaHQpO1xuICAgICAgLy9zd2FwIHRoZSBub2RlIHdpdGgganVzdCBuZXh0IGxhcmdlIHZhbHVlXG4gICAgICByb290LnJpZ2h0ID0gdGhpcy5kZWxldGUocm9vdC5kYXRhLCByb290LnJpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH1cblxuICBmaW5kKHZhbHVlLCByb290ID0gdGhpcy5yb290KSB7XG4gICAgaWYgKCFyb290KSByZXR1cm47XG4gICAgaWYgKHJvb3QuZGF0YSA9PSB2YWx1ZSkgcmV0dXJuIHJvb3Q7XG4gICAgaWYgKHZhbHVlIDwgcm9vdC5kYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kKHZhbHVlLCByb290LmxlZnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kKHZhbHVlLCByb290LnJpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBsZXZlbE9yZGVyKGZuKSB7XG4gICAgbGV0IHEgPSBbdGhpcy5yb290XTtcbiAgICBsZXQgcmVzID0gW107XG4gICAgd2hpbGUgKHEubGVuZ3RoKSB7XG4gICAgICBsZXQgbm9kZSA9IHEuc2hpZnQoKTtcbiAgICAgIGlmIChmbiAmJiBub2RlKSBmbihub2RlKTtcbiAgICAgIHJlcy5wdXNoKG5vZGUuZGF0YSk7XG4gICAgICBpZiAobm9kZS5sZWZ0KSB7XG4gICAgICAgIHEucHVzaChub2RlLmxlZnQpO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUucmlnaHQpIHtcbiAgICAgICAgcS5wdXNoKG5vZGUucmlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgaW5vcmRlcihmbikge1xuICAgIGxldCByZXMgPSBbXTtcbiAgICBmdW5jdGlvbiByZWN1cnNlKHJvb3QpIHtcbiAgICAgIGlmICghcm9vdCkgcmV0dXJuO1xuICAgICAgcmVjdXJzZShyb290LmxlZnQpO1xuICAgICAgaWYgKGZuKSBmbihyb290KTtcbiAgICAgIHJlcy5wdXNoKHJvb3QuZGF0YSk7XG4gICAgICByZWN1cnNlKHJvb3QucmlnaHQpO1xuICAgIH1cbiAgICByZWN1cnNlKHRoaXMucm9vdCk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByZW9yZGVyKGZuKSB7XG4gICAgbGV0IHJlcyA9IFtdO1xuICAgIGZ1bmN0aW9uIHJlY3Vyc2Uocm9vdCkge1xuICAgICAgaWYgKCFyb290KSByZXR1cm47XG4gICAgICBpZiAoZm4pIGZuKHJvb3QpO1xuICAgICAgcmVzLnB1c2gocm9vdC5kYXRhKVxuICAgICAgcmVjdXJzZShyb290LmxlZnQpO1xuICAgICAgcmVjdXJzZShyb290LnJpZ2h0KTtcbiAgICB9XG4gICAgcmVjdXJzZSh0aGlzLnJvb3QpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwb3N0b3JkZXIoZm4pIHtcbiAgICBsZXQgcmVzID0gW107XG4gICAgZnVuY3Rpb24gcmVjdXJzZShyb290KSB7XG4gICAgICBpZiAoIXJvb3QpIHJldHVybjtcbiAgICAgIHJlY3Vyc2Uocm9vdC5sZWZ0KTtcbiAgICAgIHJlY3Vyc2Uocm9vdC5yaWdodCk7XG4gICAgICBpZiAoZm4pIGZuKHJvb3QpO1xuICAgICAgcmVzLnB1c2gocm9vdC5kYXRhKTtcbiAgICB9XG4gICAgcmVjdXJzZSh0aGlzLnJvb3QpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBoZWlnaHQobm9kZSkge1xuICAgIGlmICghbm9kZSkgcmV0dXJuIC0xO1xuICAgIHJldHVybiBNYXRoLm1heCh0aGlzLmhlaWdodChub2RlLmxlZnQpICsgMSwgdGhpcy5oZWlnaHQobm9kZS5yaWdodCkgKyAxKTtcbiAgfVxuXG4gIGRlcHRoKG5vZGUsIHJvb3QgPSB0aGlzLnJvb3QpIHtcbiAgICBpZiAoIW5vZGUpIHJldHVybiAtMTtcbiAgICBpZiAobm9kZS5kYXRhID09IHJvb3QuZGF0YSkgcmV0dXJuIDA7XG4gICAgaWYgKG5vZGUuZGF0YSA8IHJvb3QuZGF0YSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVwdGgobm9kZSwgcm9vdC5sZWZ0KSArIDE7XG4gICAgfSBlbHNlIGlmIChub2RlLmRhdGEgPiByb290LmRhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlcHRoKG5vZGUsIHJvb3QucmlnaHQpICsgMTtcbiAgICB9XG4gIH1cblxuICBpc0JhbGFuY2VkKCkge1xuICAgIHJldHVybiAoXG4gICAgICBNYXRoLmFicyh0aGlzLmhlaWdodCh0aGlzLnJvb3QubGVmdCkgLSB0aGlzLmhlaWdodCh0aGlzLnJvb3QucmlnaHQpKSA8IDJcbiAgICApO1xuICB9XG5cbiAgcmViYWxhbmNlKCkge1xuICAgIGxldCBhcnIgPSB0aGlzLmlub3JkZXIoKTtcbiAgICB0aGlzLnJvb3QgPSB0aGlzLmJ1aWxkVHJlZShhcnIsIDAsIGFyci5sZW5ndGggLSAxKTtcbiAgfVxuXG4gICNmaW5kTWluVmFsID0gKHJvb3QpID0+IHtcbiAgICBsZXQgbWluID0gcm9vdC5kYXRhO1xuICAgIHdoaWxlIChyb290LmxlZnQpIHtcbiAgICAgIG1pbiA9IHJvb3QubGVmdC5kYXRhO1xuICAgICAgcm9vdCA9IHJvb3QubGVmdDtcbiAgICB9XG4gICAgcmV0dXJuIG1pbjtcbiAgfTtcblxuICAjdW5pcXVlU29ydCA9IChhcnIpID0+IHtcbiAgICBpZiAoIWFyci5sZW5ndGgpIHJldHVybjtcbiAgICBhcnIgPSBhcnIuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgIHJldHVybiBbLi4ubmV3IFNldChhcnIpXTtcbiAgfTtcblxuICBwcmV0dHlQcmludChub2RlPXRoaXMucm9vdCwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkge1xuICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnByZXR0eVByaW50KFxuICAgICAgICBub2RlLnJpZ2h0LFxuICAgICAgICBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmRhdGF9YCk7XG4gICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5wcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcbiAgICB9XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUcmVlOyAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUcmVlIGZyb20gJy4vYnN0J1xuXG5mdW5jdGlvbiBnZW5SYW5BcnIobil7XG4gIGxldCByZXMgPSBbXTtcbiAgZm9yKGxldCBpPTA7IGk8bjsgaSsrKXtcbiAgICByZXMucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwKSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gcHJpbnRUcmVlKCl7XG4gIGNvbnNvbGUubG9nKCdsZXZlbCAtPiAnLCB0cmVlLmlub3JkZXIoKSk7XG4gIGNvbnNvbGUubG9nKCdwcmUgLT4gJywgdHJlZS5wcmVvcmRlcigpKTtcbiAgY29uc29sZS5sb2coJ3Bvc3QgLT4gJywgdHJlZS5wb3N0b3JkZXIoKSk7XG4gIGNvbnNvbGUubG9nKCdpbiAtPiAnLCB0cmVlLmlub3JkZXIoKSk7XG4gIHRyZWUucHJldHR5UHJpbnQoKVxufVxuXG5jb25zdCB0cmVlID0gbmV3IFRyZWUoZ2VuUmFuQXJyKDIwKSk7XG5cbmNvbnNvbGUubG9nKCdpc1RyZWVCYWxhbmNlPyAnLCB0cmVlLmlzQmFsYW5jZWQoKSk7XG5cbnByaW50VHJlZSgpXG5cbmZvcihsZXQgaT0wOyBpPDEwOyBpKyspe1xuICB0cmVlLmluc2VydChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwKSsxMDApO1xufVxuXG5jb25zb2xlLmxvZygnaXNUcmVlQmFsYW5jZT8gJywgdHJlZS5pc0JhbGFuY2VkKCkpO1xudHJlZS5yZWJhbGFuY2UoKTtcbmNvbnNvbGUubG9nKCdpc1RyZWVCYWxhbmNlPyAnLCB0cmVlLmlzQmFsYW5jZWQoKSk7XG5cbnByaW50VHJlZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==