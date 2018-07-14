function sort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i=i+1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }
  
  var num = [7,2,8,9,1];
 sort(num);
  console.log(num);