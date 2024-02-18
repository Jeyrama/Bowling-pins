/*
Task:
Did you ever play Bowling? Short: You have to throw a bowl into 10 Pins arranged like this:
I I I I  # each Pin has a Number:    7 8 9 10
 I I I                                4 5 6
  I I                                  2 3
   I                                    1

You will get an array of integers between 1 and 10, e.g. [3, 5, 9], and have to remove them from the field like this:
I I   I
 I   I
  I   
   I   

Return a string with the current field.

Note that:
The pins rows are separated by a newline (\n)
Each Line must be 7 chars long
Fill the missing pins with a space character ( )
*/


// Solution 

function bowlingPins(arr) {
  let count = 0;
  let pins = Array.from({length: 4}, (_, i) => {
    return ' '.repeat(i) + 'I '.repeat(4 - i).trim() + ' '.repeat(i);
  }).reverse().join('\n');
  
  return [...pins].map(char => {
    if (char === 'I') {
      count++;
      if (arr.includes(count)) return ' ';
    }
    return char;
  }).join('').split('\n').reverse().join('\n');
}

// or

function bowlingPins(arr) {
  let map = [ -1, 27, 18, 20, 9, 11, 13, 0, 2, 4, 6]
  ,  pins = "I I I I\n I I I \n  I I  \n   I   ".split('');
  
  for (let pos of arr)
    pins[map[pos]] = ' ';
    
  return pins.join('');
}