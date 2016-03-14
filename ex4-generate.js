 module.exports = function *generate(isEven) {
     // `yield` either odd or even numbers based on `isEven`
     var value = (isEven ? 2 : 1);
     while (true) {
             yield value;
             value += 2;
         };
     };
