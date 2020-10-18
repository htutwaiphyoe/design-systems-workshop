const yargs = require("yargs");
const notes = require("./notes");
yargs.version("20.10.18");
yargs.command({
    command: "add",
    description: "Add a new note",
    builder: {
        title: {
            description: "Note Title",
            demandOption: true,
            type: "string",
        },
        body: {
            description: "Note Body",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    },
});

yargs.parse();
