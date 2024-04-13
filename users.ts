
let current_users : string[] =['NabeEl', 'FaTima', 'Amna', 'Marium', 'AlisHa'];

let new_users : string[] = ['Ali', 'NabeEl', 'Faizan', 'Marium', 'Taha'];

new_users.forEach(newUserName => {
let lowerCase : string = newUserName.toLowerCase();

if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
    console.log(`The Usermame ${newUserName} is not avalible, Please write a different Username. `);
}
else{
    console.log(`The Username ${newUserName} is availble.`)
}

})