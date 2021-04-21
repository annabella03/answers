/* 
    1. Create let counter = 1
    2. Create let char = first char of the giver string.
    3. Create new string newS = ''
    4. Create a loop to pass through the whole string from the 2nd char.
    5. For every character from the given string, check if it is equal to "char" let.
    6. If it is equal increment counter by 1 and continue to the next char.
    7. If it isn't, add to "newS" the "char" let and then the "counter" let, reset the "counter" let to equal 1 again and
       char to equal the new char.
    8. Check if it is the last character of the string, if it is add to "newS" let the "char" and the "counter".
    9. After finishing the loop, return "newS".
*/

function lookAndSay(s) {
  let newS = '';
  let char;
  let counter = 1;

  for (let i = 0; i < s.length; i++) {
    if (!char) char = s[i];
    else {
      if (s[i] == char) counter++;
      else {
        newS += char + counter;
        counter = 1;
        char = s[i];
      }
    }

    if (i == s.length - 1) newS += char + counter;
  }

  return newS;
}
console.log(lookAndSay('1'));
console.log(lookAndSay('22111332'));
console.log(lookAndSay('4442'));
