function loopyLighthouse(range, multiples, words){
  var start = range[0];
  var end = range[1];
  var mul1 = multiples[0];
  var mul2 = multiples[1];
  var word1 = words[0];
  var word2 = words[1];
  var word3 = word1.concat(word2);
  for (var n = start; n <= end; n++){
    if (n % mul1 == 0 && n % mul2 == 0){
    console.log(word3);
    }
    if (n % mul1 == 0){
    console.log(word1);
    }
    if (n % mul2 == 0){
    console.log(word2);
    }
    else {
    console.log(n);
    }
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);