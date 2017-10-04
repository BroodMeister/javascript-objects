function countLetters(sentenceIn) {

   var sentenceOut = sentenceIn.toLowerCase().split(" ").join("");

   var letterInstances = { };

   for (var i = 0; i < sentenceOut.length; i++) {
       if (letterInstances[sentenceOut[i]] === undefined ){
           letterInstances[sentenceOut[i]] = 1;
       } else {
           letterInstances[sentenceOut[i]] += 1;
       }
   }
   return letterInstances;
}

console.log(countLetters("This is a sentence"));
console.log(countLetters("lighthouse in the house"));