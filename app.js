var guest_list = ['Marium', 'Mansoor', 'Nabeel', 'Zainab', 'Noreen'];
var Not_Coming = ('Zainab');
var New_Guest = ('Zameel');
guest_list[3] = New_Guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Mr/Mis' + guest_list[i] + ',\nWe Invited you For Dinner Tomorrow.\nThankYou.');
}
guest_list.unshift('Muniba', 'Kafeel', 'Jaleel');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Mr/Mis' + guest_list[i] + ',\nWe Invited you For Dinner Tomorrow.We Found a Bigger Dinner Table, So Please Come with your Family.\nThankYou.');
}
