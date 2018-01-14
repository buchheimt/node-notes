console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

console.log(notes.add(7, 6));

// let res = notes.addNote();
// console.log(res);

// let user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, err => {
//   if (err) console.log('Unable to write to file');
// });