
let personName : string= 'Amna';

const personName_Arry : string[]= ['Person', 'Car'];

//Data Type of Person Object

interface person{
    name : string,
    age : number,
    nationality : string,
    student : boolean
}

//Person Object

let person : person = {
    name: 'Amna',
    age: 20,
    nationality: 'pakistan',
    student : true
}
console.log(person);

//Data Type of Car Object

interface car {
    maker : string,
    color : string,
    Model : number,
    autometic : boolean

}

// Car Object

let car = {
    maker: 'Toyota',
    color : 'Black',
    Model : 2022,
    autometic : true

}
console.log(car);