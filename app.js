const validator = require("validator");

console.log(validator.isEmail("foo@bar.com"));
console.log(validator.isURL("http://foo.com"));
