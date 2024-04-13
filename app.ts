import { log } from "console";

let guest_list: string[]=['Marium', 'Mansoor', 'Nabeel', 'Zainab', 'Noreem',];
let Not_Coming: string = "Zainab";
let New_guest: string = "Zameel";
guest_list[3] = New_guest


console.log(',\nUnfortunaintly we cannot arrange a big Table for Dinner, thats Why Only two Persons Allowed');

guest_list.unshift('Muniba', 'Kafeel', 'Jaleel');

console.log("Updated List of guest:", guest_list );

while(guest_list.length> 2 ) {
    let removedguest : string| undefined = guest_list.pop()
    if(removedguest !== undefined){
        console.log(`sorry, ${removedguest}, We Cant invite you for today dinner`)
    }
}
 guest_list.forEach(guest => {
    console.log(`Dear Guest ${guest} You Both are still invited in Dinner`)
 });
  

guest_list.splice(0, guest_list.length)
console.log("Updated list of guest:", guest_list);