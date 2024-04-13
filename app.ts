// Lower Case

let personName: string= ('Amna');
console.log("lowercase:", personName.toLowerCase());

//Upper Case

console.log("Uppercase:", personName.toUpperCase());

//Title case

console.log("Titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));