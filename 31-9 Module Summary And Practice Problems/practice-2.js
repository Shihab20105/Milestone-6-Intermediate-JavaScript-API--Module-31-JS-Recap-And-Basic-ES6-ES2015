/*                      31-9 Module Summary and Practice Problems */

// ======================== Practice Problem 2 =======================

/*
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the name of your friends
b) Check if the length of each element is even, push elements with even length to a new array and return the result

Print the result.
*/

/*
// Arrow function
const evenLengthFriends = (friends) => {
  const result = [];
  for (let friend of friends) {
    if (friend.length % 2 === 0) {
      result.push(friend);
    }
  }
  return result;
};

// Example usage
const friendsArray = ["Maya", "Liam", "Sophia", "Noah", "Emma", "Oliver", "Ava"];
const output = evenLengthFriends(friendsArray);

console.log(output);

/* 
Output:
[ 'Maya', 'Liam', 'Sophia', 'Noah', 'Emma', 'Oliver' ]
*/

/* 
"Maya" → length = 4 ✅ even

"Liam" → length = 4 ✅ even

"Sophia" → length = 6 ✅ even

"Noah" → length = 4 ✅ even

"Emma" → length = 4 ✅ even

"Oliver" → length = 6 ✅ even

"Ava" → length = 3 ❌ odd
*/
// =============================================== //

// Cleaner version using the '.filter()' method instead of 'for...of' and 'push':

// Arrow function with .filter()
const evenLengthFriends = (friends) => 
  friends.filter(friend => friend.length % 2 === 0);

// Example usage
const friendsArray = ["Maya", "Liam", "Sophia", "Noah", "Emma", "Oliver", "Ava"];
const output = evenLengthFriends(friendsArray);

console.log(output);
/* 
Output:
[ 'Maya', 'Liam', 'Sophia', 'Noah', 'Emma', 'Oliver' ]
*/
//=================================================== //

// Some debug logs so you can see each friend’s name and length, and why it was included or skipped:

/*
// Arrow function with debug logs
const evenLengthFriends = (friends) => {
  const result = [];
  for (let friend of friends) {
    console.log(`${friend} → length: ${friend.length}`); // debug
    if (friend.length % 2 === 0) {
      console.log(`✅ ${friend} has even length, adding to result`);
      result.push(friend);
    } else {
      console.log(`❌ ${friend} has odd length, skipping`);
    }
  }
  return result;
};

// Example usage
const friendsArray = ["Maya", "Liam", "Sophia", "Noah", "Emma", "Oliver", "Ava"];
const output = evenLengthFriends(friendsArray);

console.log("\nFinal Result:", output);
 
Output:
Maya → length: 4
✅ Maya has even length, adding to result
Liam → length: 4
✅ Liam has even length, adding to result
Sophia → length: 6
✅ Sophia has even length, adding to result
Noah → length: 4
✅ Noah has even length, adding to result
Emma → length: 4
✅ Emma has even length, adding to result
Oliver → length: 6
✅ Oliver has even length, adding to result
Ava → length: 3
❌ Ava has odd length, skipping

Final Result: [ 'Maya', 'Liam', 'Sophia', 'Noah', 'Emma', 'Oliver' ]
*/

