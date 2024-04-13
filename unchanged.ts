let magician: string[] = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];

function copyArray(arr: string[]){
    return[...arr]
}


function make_great( magicianArray: string[] ){
   for(let i=0; i<magicianArray.length; i++){
    magicianArray[i] = ' The Great ' + magicianArray[i]
   }
        
    }

    function show_magicians(magicians: string[]){
        magicians.forEach(element => {
            console.log(element);
        });
    }

   const copyMagicianArray = copyArray(magician);

    make_great(copyMagicianArray);

    console.log('\n\nThis is My Orignal Array:')
    show_magicians(magician);

    console.log('\n\nThis is My Modified Copy Array:')
    show_magicians(copyMagicianArray);

