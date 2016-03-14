module.exports = function makeCounter(someObj, maxnum) {
     var maxnum = maxnum || 10
     var values = [];
     for (var i = 0; i < maxnum; i++)
         values[i] = i + 1;
     var iter = 0;
     
     someObj.next = function() {
         var isDone = (iter < values.length) ? false : true;
         var result = {value: values[iter],
                       done: isDone};
         iter++;
         return result;};
    }

