"use strict";
function make_sandwich(item) {
    console.log('\nMaking your Sandwich With:');
    item.forEach(element => console.log("- " + element));
    console.log('Enjoy Your Sandwich !\n');
}
make_sandwich(['Ham', 'Cheese', 'lettuce']);
make_sandwich(['Turkey', 'Bacon']);
make_sandwich(['Peanut Butter', 'Jelly']);
