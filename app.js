console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

let filteredArray = _.uniq(['Tyler', 1, 2, 3, 1, 'Bob', 'Bob', 'Emma']);
console.log(filteredArray);

// console.log(_.isString('hi'));
// console.log(_.isString(true));

// console.log(notes.add(7, 6));

// let res = notes.addNote();
// console.log(res);

// let user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, err => {
//   if (err) console.log('Unable to write to file');
// });

