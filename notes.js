const fs = require("fs");
const chalk = require("chalk");
exports.addNote = (title, body) => {
    const notes = loadNotes();
    const index = notes.findIndex((note) => note.title === title);
    if (index === -1) {
        notes.push({ title, body });
        saveNotes(notes);
        console.log(chalk.green.inverse("Note was added successfully."));
    } else {
        console.log(chalk.bgYellow("Title is already in use!"));
    }
};

exports.removeNote = (title) => {
    const notes = loadNotes();
    const index = notes.findIndex((note) => note.title === title);
    if (index !== -1) {
        notes.splice(index, 1);
        saveNotes(notes);
        console.log(chalk.bgGreen("Note was removed successfully."));
    } else {
        console.log(chalk.bgRed("There is no note with title " + title));
    }
};

exports.readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if (note) {
        console.log(`${note.title}\n\n${note.body}`);
    } else {
        console.log(chalk.bgRed("There is no note with title " + title));
    }
};

exports.listNotes = () => {
    const notes = loadNotes();
    notes.forEach((note) => console.log(`${note.title}\n\n${note.body}\n\n`));
};
const saveNotes = (notes) => {
    fs.writeFileSync(`${__dirname}/notes.json`, JSON.stringify(notes), "utf8");
};
const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync(`${__dirname}/notes.json`, "utf8"));
    } catch (err) {
        return [];
    }
};
