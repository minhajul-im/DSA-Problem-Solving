var middleNode = function(head) {
  let slow = fast = head;
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
    if(fast.next) fast = fast.next;
   
  }
  return slow;
};