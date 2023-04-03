var hasCycle = function(head) {
  if (!head || !head.next) return false;
 
   let x = head;
   let y = head;
   while (y) {
     x = x.next;
     y = y.next;
     if (y) y = y.next;
 
     if (x === y) return true;
   }
   return false;
 
 };