  module.exports = function filterForNumbers(iterable) {
      // loop over iterable, adding numeric values to a new array
      // then return the new array of numbers
      var retval = [];
      for (var entry of iterable) {
          console.log(typeof entry);
          if (typeof entry === 'number')
              retval.push(entry);
      }
      return retval;
    }
