var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var num = 0;
while (num < ingredients.length){
  console.log(ingredients[num]);
  num ++;
}
// Write a for loop that prints out the contents of ingredients:
for (var count = 0; count < ingredients.length; count++){
  console.log(ingredients[count]);
};
// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (var n = ingredients.length - 1; n >= 0; n--){
  console.log(ingredients[n]);
};