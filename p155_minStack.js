/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.topIdx = 0;
  this.data = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.data[this.topIdx] = x;
    this.topIdx++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
   var res = this.data.pop()
  if (this.topIdx >= 1) {
    this.topIdx--;
  }
  return res
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.data[this.topIdx - 1]
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return Math.min.apply(null, this.data)
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */