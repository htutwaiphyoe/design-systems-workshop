const fs = require("fs");
exports.getNotes = getNotes = () => {
    return fs.readFileSync("notes.txt", "utf8");
};

exports.setNotes = setNotes = (notes) => {
    fs.writeFileSync("notes.txt", notes);
};
