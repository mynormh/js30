// Primitive types are copied
console.groupCollapsed("Primitive types");

let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = "Mynor";
let name2 = name;
console.log(name, name2);
name = "Ricky";
console.log(name, name2);

console.groupEnd();

// Arrays are referenced
console.groupCollapsed("Arrays");

let players = ["Mynor", "Harry", "Luke", "Emma"];
let team = players;
console.log(players, team);
players[3] = "Sarah";
console.log(players, team);

// We can make a copy of the array instead, there are multiple ways to do this
// Use .slice()
console.group("slice");
players = ["Mynor", "Harry", "Luke", "Emma"];
team = players.slice();
console.log(players, team);
players[3] = "Sarah";
console.log(players, team);
console.groupEnd();

// Create a new array and concat(..) the old one
console.group("concat");
players = ["Mynor", "Harry", "Luke", "Emma"];
team = [].concat(players);
console.log(players, team);
players[3] = "Sarah";
console.log(players, team);
console.groupEnd();

// Use ES6's spread operator ...
console.group("spread");
players = ["Mynor", "Harry", "Luke", "Emma"];
team = [...players];
console.log(players, team);
players[3] = "Sarah";
console.log(players, team);
console.groupEnd();

// Use Array.from(..)
console.group("Array.from");
players = ["Mynor", "Harry", "Luke", "Emma"];
team = Array.from(players);
console.log(players, team);
players[3] = "Sarah";
console.log(players, team);
console.groupEnd();

console.groupEnd();

// Objects are also referenced
console.groupCollapsed("Objects");

let person = {
  name: "Mynor Morales",
  age: 30
};

let captain = person;
console.log(person, captain);
captain.age = 99;
console.log(person, captain);

// We can create a copy with Object.assign(..)
console.group("Object.assign");
person = {
  name: "Mynor Morales",
  age: 30
};
captain = {};
Object.assign(captain, person);
console.log(person, captain);
captain.age = 99;
console.log(person, captain);
console.groupEnd();

// Or we can also use the spread operator
console.group("spread");
person = {
  name: "Mynor Morales",
  age: 30
};
captain = { ...person };
console.log(person, captain);
captain.age = 99;
console.log(person, captain);
console.groupEnd();

console.groupEnd();

// These are only shallow copies
console.groupCollapsed("ShallowCopy");
person = {
  name: "Mynor",
  age: 30,
  social: {
    twitter: "@mynormh",
    facebook: "mynormh.developer"
  }
};

captain = { ...person };
console.log(person, captain);
captain.age = 99;
captain.social.twitter = "@NOTmynormh";
console.log(person, captain);

// We can make deep copies
console.group("Deep Copy");
person = {
  name: "Mynor",
  age: 30,
  social: {
    twitter: "@mynormh",
    facebook: "mynormh.developer"
  }
};

captain = JSON.parse(JSON.stringify(person));
console.log(person, captain);
captain.age = 99;
captain.social.twitter = "@NOTmynormh";
console.log(person, captain);
console.groupEnd();

console.groupEnd();
