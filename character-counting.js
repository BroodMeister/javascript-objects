function countLetters(input) {

   var output = input.toLowerCase().split(" ").join("");

   var letters = { };

   for (var i = 0; i < output.length; i++) {
       if (letters[output[i]] === undefined ){
           letters[output[i]] = 1;
       } else {
           letters[output[i]] += 1;
       }
   }
   return letters;
}

// Test

console.log(countLetters("This is a sentence"));
console.log(countLetters("lighthouse in the house"));
