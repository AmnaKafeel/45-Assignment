let guest_list: string[] =['Marium', 'Mansoor', 'Nabeel', 'Zainab', 'Noreen'];

let Not_Coming: string = ('Zainab');
let New_Guest: string =('Zameel');
guest_list[3] = New_Guest
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Mr/Mis' + guest_list[i] + ',\nWe Invited you For Dinner Tomorrow.\nThankYou.')
}
guest_list.unshift('Muniba', 'Kafeel', 'Jaleel');
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Mr/Mis' + guest_list[i] + ',\nWe Invited you For Dinner Tomorrow.We Found a Bigger Dinner Table, So Please Come with your Family.\nThankYou.')
}