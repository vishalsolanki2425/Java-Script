let person = {
    name: "vishal solanki",
    age : 19,
    gender : "male",
    hobbies : ["cricket", "football", "coding"],
    address : {
        city : "surat",
        state : "gujarat",
        pincode : 395004
    },
}
// for(let i in person){
//     console.log(i, person[i])
// }

for (let i in person) {
    if (Array.isArray(person[i])) {
        console.log(i + ":");
        person[i].forEach((hobby) => console.log("  " + hobby));
    } else if (typeof person[i] === "object") {
        console.log(i + ":");
        for (let key in person[i]) {
            console.log(`  ${key}: ${person[i][key]}`);
        }
    } else {
        console.log(`${i}: ${person[i]}`);
    }
}