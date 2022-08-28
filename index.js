function isPalindrome(word) {
  // Write your algorithm here
  for(let startIndex = 0; startIndex < word.length / 2; startIndex ++) {
    const endIndex = word.length - 1 -startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }                                                                         
  }
  return true;
}

/* 
  Add your pseudocode here
*///iterate from the begining to the middle of the string
//compare the letter being iterated over to the corresponding letter at the end of the string


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
