
let magician: string[] = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];

function make_great(magicianArry: string[] ){
for(let i=0; i<magician.length; i++){
    
magician[i] = ' The Great ' + magicianArry[i]
}
}


function show_magician(magicians: string[]){
    magicians.forEach(element => {
        console.log(element);
    });

}

make_great(magician);
show_magician(magician);