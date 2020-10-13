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
    handler: function (argv) {
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
    handler: function (argv) {
        notes.removeNote(argv.title);
    },
});

yargs.command({
    command: "read",
    description: "Read a note",
    handler: function () {
        console.log("Reading");
    },
});

yargs.command({
    command: "list",
    description: "List notes",
    handler: function () {
        console.log("Listing notes");
    },
});

yargs.parse();
