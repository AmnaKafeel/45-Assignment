"use strict";
let magician = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function make_great(magicianArry) {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = ' The Great ' + magicianArry[i];
    }
}
function show_magician(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magician(magician);
