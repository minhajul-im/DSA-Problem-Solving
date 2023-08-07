// 232. Implement Queue using Stacks

const Node = function (val, next = null) {
  this.val = val;
  this.next = next;
};
var MyQueue = function () {
  this.fast = null;
  this.last = null;
  this.size = 0;
};

/**
 * @param {number} x
 * @return {void}
 */

MyQueue.prototype.push = function (x) {
  const node = new Node(x);

  if (!this.fast) {
    this.fast = node;
    this.last = node;
  } else {
    this.last.next = node;
    this.last = node;
  }

  this.size++;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.fast) return null;

  const firstNode = this.fast;

  if (this.size === 1) this.last = null;

  this.fast = this.fast.next;

  this.size--;

  return firstNode.val;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.fast) return this.fast.val;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.size === 0;
};

let arr = ["MyQueue", "push", "push", "peek", "pop", "empty"];

console.log(MyQueue(arr));
