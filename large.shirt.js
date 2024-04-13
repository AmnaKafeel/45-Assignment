"use strict";
function make_shirt(size = 'Large', text = 'I Love Typescript') {
    console.log(`Creating a ${size} Shirt with the message: ${text}`);
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'I Love Phyton');
