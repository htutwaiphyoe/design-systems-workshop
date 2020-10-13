const fs = require("fs");

exports.addNote = (title, body) => {
    const notes = loadNotes();
    const index = notes.findIndex((note) => note.title === title);
    if (index === -1) {
        notes.push({ title, body });
        saveNotes(notes);
        console.log("Note was added successfully.");
    } else {
        console.log("Title is already in use!");
    }
};

exports.removeNote = (title) => {
    const notes = loadNotes();
    const index = notes.findIndex((note) => note.title === title);
    if (index !== -1) {
        notes.splice(index, 1);
        console.log("Note was removed successfully.");
    } else {
        console.log("There is no note with title" + title);
    }
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
