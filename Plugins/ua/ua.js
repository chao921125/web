/**
 * JS Linked-List for es5 & es6
 * @Auth CC
 */

function LinkedList() {
  this.head = null;
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    LinkedList: LinkedList,
  };
} else if (typeof define === 'function' && define.amd) {
  define([], function() {
    return {
      LinkedList: LinkedList,
    };
  });
} else {
  window.LinkedList = LinkedList;
}
