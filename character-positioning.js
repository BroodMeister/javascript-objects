function getLetterPositions(input) {
  var output = input.toLowerCase();

  var letterInstances = {};

  for (i in output) {
    letterInstances[output[i]] === undefined?
        (letterInstances[output[i]] = [i]):
        letterInstances[output[i]].push(i);
  }
  return letterInstances;
}

console.log(getLetterPositions("This is a sentence"));
console.log(getLetterPositions("lighthouse in the house"));
