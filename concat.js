function concat(array1, array2){
  for (var n = 0; n < array2.length; n++){
    var item = array2[n];
    array1.push(item);
  }
  return(array1);
}


concat([ 1, 2, 3 ], []);
concat([ 1, 2, 3 ], [ 4, 5, 6 ]);
concat([], [ 9, 7, 2 ]);