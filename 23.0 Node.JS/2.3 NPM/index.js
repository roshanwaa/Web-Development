import generateName from 'sillyname';
import { all, random } from 'superheroes';

var sillyName = generateName();
console.log(sillyName);

all;
//=> ['3-D Man', 'A-Bomb', …]

let names = random();
//=> 'Spider-Ham'
console.log("I'am " + names);
