 module.exports = function generate(isEven) {
      // return an Iterator for even numbers if isEven is true
      // or, return an Iterator for odd numbers if isEven is false
      // If `.next(swap)` receives `true`, swap between even <-> odd
     var value = (isEven)? 0 : -1;
     var iterator = {};
     iterator.next = function(swap) {
         value += (swap)? 1 : 2;
         return {value: value};
     };
     return iterator;
 };
     
         
            
     

