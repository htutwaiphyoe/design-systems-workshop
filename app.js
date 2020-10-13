const yargs = require("yargs");
const notes = require("./notes");

yargs.version("1.1.0");

yargs.command({
    command: "add",
    description: "Add a new note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    },
});

yargs.command({
    command: "remove",
    description: "Remove a note",
    builder: {
        title: {
            description: "Note Title",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.removeNote(argv.title);
    },
});

yargs.command({
    command: "read",
    description: "Read a note",
    builder: {
        title: {
            type: String,
            description: "Note Title",
            demandOption: true,
        },
    },
    handler(argv) {
        notes.readNote(argv.title);
    },
});

yargs.command({
    command: "list",
    description: "List notes",
    handler() {
        notes.listNotes();
    },
});

yargs.parse();
