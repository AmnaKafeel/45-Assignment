
//Equality & Inequality Test no1

console.log("Equality test with string: ", "Apple" === "Apple" );

//Equality & Inequality Test no2

console.log("Inequality test with string: ", ("Apple" as string) != "Orange" );

//Tests us the Lower Case Function

console.log("Lower Case Function Tests:" , "HELLO".toLowerCase() === "hello");

//Numerical Tests involving Equality,
 console.log("Equality test with numbers:", 26 === 26);


 //Numerical Tests involving inequality,
 console.log("Inequality test with numbers:", (26 as Number) != 36);

//greater than Test,

console.log("Greater than Test :", 10 > 6 );

//greater than Test,

console.log("Greater than Test :", 10 < 22 );

//greater than or equal to,

console.log("Greater than & Equal to Tests:", 10 >= 9);

//less than or equal to.;
console.log("Less Than or Equal to:", 99 <= 100);

//Tests Using "and"  Operator.
console.log("And Operator Test:", 5 === 5 && 10 > 8 );

//Tests Using "Or" Operator.
console.log("Or Operator Test:", 5 === 5 || false);

//Tests Wether an Item is in a array
const fruit: string[]= ['Apple', 'Mango', 'Orange'];
console.log('Test"Apple" in the array:', fruit.includes("Apple"));

//Tests Wether an Item is not in a array

console.log('Test"Banana" is not in  array:', !fruit.includes("Banana"));