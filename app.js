var guest_list = ['Marium', 'Mansoor', 'Nabeel', 'Zainab', 'Noreen'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe Invited you for Dinner tomorrow.\nThankyou\n');
}
var Not_Coming = 'Zainab';
var New_Guest = "Zameel";
guest_list[3] = New_Guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe Invited you for Dinner tomorrow.\nThankyou\n');
}
console.log("Mis ".concat(Not_Coming, " Will Not Coming for Tomorrow Dinner."));
