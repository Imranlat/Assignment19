//19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.



let guestList: string[] = ["Ali", "Malik", "Fahad", "Muras", "Mani", "Shani"];

console.log(`Dear ${guestList[0]}, you are cordially invited to Hi-tea.`);
console.log(`Dear ${guestList[1]}, you are cordially invited to Hi-tea.`);
console.log(`Dear ${guestList[2]}, you are cordially invited to Hi-tea.`);
console.log(`Dear ${guestList[3]}, you are cordially invited to Hi-tea.`);
console.log(`Dear ${guestList[4]}, you are cordially invited to Hi-tea.`);
console.log(`Dear ${guestList[5]}, you are cordially invited to Hi-tea.`);

console.log("We just found out that the new dinner table won't arrive in time for the Hi-tea, and we can only invite two guests.");

while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to Hi-tea.`);
}

console.log(`Number of people invited to Hi-tea: ${guestList.length}`);