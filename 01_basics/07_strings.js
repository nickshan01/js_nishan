const discordName = "luci"
const discordLevel = "90"
//console.log("My discord name " + discordName + "my discord level is "+ discordLevel);

console.log(`my discord name is ${discordName}. And my discord leel is ${discordLevel}`);

const gameName = new String("hello world");
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.charAt(4));
console.log(gameName.concat(gameName, "!!"));
console.log(gameName.indexOf("l"));
console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.includes(123));
console.log(gameName.slice(5, 7));
console.log(gameName.repeat(3));
console.log(gameName.split("o"));
//console.log(Math.floor(Math.random() * 10) + 1);
console.log(gameName.trim(" "));

const url = "https://www.baidu%20com"
console.log(url.replace("%20","_"))
