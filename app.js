const validator = require("validator");
const chalk = require("chalk");
console.log(validator.isEmail("foo@bar.com"));
console.log(validator.isURL("http://foo.com"));

console.log(chalk.bgGreen("Success!"));
