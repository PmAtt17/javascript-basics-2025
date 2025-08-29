//@ts-check
//This will be our first Javascript file

console.log("Sup from JavaScript")
let username = "KYLE";
let FavSong = "Let It Grow";

FavSong = " KILE";

console.log(username + FavSong);

//we concanetenate and change numders to stings magicly
let whatHappens = username + FavSong + 1000;
console.log(whatHappens);
let likes = 1000;
let suds = 10;

//@ts-ignore I know what I'm doing
whatHappens = likes / suds;
+
console.log (whatHappens);

let noCap = true;
let cap = false;
let is2greaterThan3 = 2 > 3;
console.log(noCap, cap, is2greaterThan3);

// define a constant
const pls_dont_change_me = "NOT ALLOWED";


let favSnacks = ["chips","chicken alfredo","left ok overs","sandwichs"];
console.log(favSnacks), favSnacks[1];
console.log("this is the numder of snacks",favSnacks.length);
let squad = ["Des","Harper"]
let profile = {
    username: "JEFF",
    favgame: "Wupo",
    likes: 1000,
    sudscibers: 10,
    friends: squad,
}
console.log(profile);