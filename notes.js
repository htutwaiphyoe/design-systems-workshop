const fs = require("fs");
const chalk = require("chalk");

// read data from file
const loadFile = () => {
    try {
        return JSON.parse(fs.readFileSync(`${__dirname}/notes.json`, "utf8"));
    } catch (e) {
        return [];
    }
};

// save data to file
const saveFile = (notes) => {
    fs.writeFileSync(`${__dirname}/notes.json`, JSON.stringify(notes), "utf8");
};

// add note to data
exports.addNote = (title, body) => {
    const notes = loadFile();
    const duplicateNote = notes.filter((note) => note.title === title);

    const note = {
        title,
        body,
    };
    if (duplicateNote.length > 0) {
        console.log(chalk.yellowBright.inverse("Title is already taken"));
    } else {
        notes.push(note);
        saveFile(notes);
        console.log(chalk.green.inverse("Note added successfully!"));
    }
};

// remove note from data

exports.removeNote = (title) => {
    const notes = loadFile();
    const newNotes = notes.filter((note) => note.title !== title);
    saveFile(newNotes);
    if (notes.length === newNotes.length)
        console.log(chalk.yellowBright.inverse("There is no note with title " + title));
    else console.log(chalk.green.inverse("Note removed successfully"));
};
