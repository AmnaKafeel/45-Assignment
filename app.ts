let guest_list: string[] = ['Marium','Mansoor','Nabeel','Zainab','Noreen'];
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe Invited you for Dinner tomorrow.\nThankyou\n')
}
let Not_Coming: string ='Zainab'
let New_Guest: string ="Zameel"
guest_list[3] = New_Guest
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe Invited you for Dinner tomorrow.\nThankyou\n')
}
console.log(`Mis ${Not_Coming} Will Not Coming for Tomorrow Dinner.`);