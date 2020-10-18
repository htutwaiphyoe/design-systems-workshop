const fs = require("fs");
const chalk = require("chalk");
const loadFile = () => {
    try {
        return JSON.parse(fs.readFileSync(`${__dirname}/notes.json`, "utf8"));
    } catch (e) {
        return [];
    }
};
const saveFile = (notes) => {
    fs.writeFileSync(`${__dirname}/notes.json`, JSON.stringify(notes), "utf8");
};
exports.addNote = (title, body) => {
    const notes = loadFile();
    const duplicateNote = notes.filter((note) => note.title === title);
    const note = {
        title,
        body,
    };
    if (duplicateNote) {
        console.log(chalk.yellowBright.inverse("Title is already taken"));
    } else {
        notes.push(note);
        saveFile(notes);
        console.log(chalk.green.inverse("Note added successfully!"));
    }
};
