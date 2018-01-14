console.log('starting notes.js');

module.exports.age = 26;

module.exports.addNote = () => {
  console.log('addNote');
  return 'New note';
}

module.exports.add = (x, y) => x + y;