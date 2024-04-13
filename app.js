// Lower Case
var personName = ('Amna');
console.log("lowercase:", personName.toLowerCase());
//Upper Case
console.log("Uppercase:", personName.toUpperCase());
//Title case
console.log("Titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
