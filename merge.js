function concat(array1, array2){
  for (var n = 0; n < array2.length; n++){
    var item = array2[n];
    array1.push(item);
  }
  return array1;
};

function merge(array1, array2){
  concat(array1, array2);
  return array1.sort(function(a, b){return a-b})
};

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
