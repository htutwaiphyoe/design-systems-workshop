const notes = require("./notes");
const yargs = require("yargs");
const { argv } = require("yargs");

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
        console.log(argv.title, argv.body);
    },
});

yargs.command({
    command: "remove",
    description: "Remove a note",
    handler: function () {
        console.log("Removing");
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
