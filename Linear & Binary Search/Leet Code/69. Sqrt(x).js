var mySqrt = function(x) {

  let left = 1, right = x, mid;
  while (left <= right){
      mid = Math.floor((left + right)/ 2);

      let n = mid * mid;
      if(n > x){right = mid - 1}
      else if(n < x) {left = mid + 1}
      else return mid;
  }
  
   return right
};