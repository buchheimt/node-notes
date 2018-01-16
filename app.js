console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];
console.log(`Command: ${command}`);
console.log('yargs', argv);

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Added note!');
    notes.logNote(note);
  } else {
    console.log(`Error: A note with title '${argv.title}' already exists`);
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  const note = notes.getNote(argv.title);
  if (note) {
    console.log('Reading note...');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title);
  const message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}

