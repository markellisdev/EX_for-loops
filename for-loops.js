

// for (var i = 5; i < 121; i += 5) {
	
// 	console.log(i);

// }

// for (var i = 4096; i >= 1; i /= 2) {
// 	console.log(("I = ") + i);
// }

var presidents = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "William Henry Harrison", "John Tyler"];

for (var i = 0; i < presidents.length; i++) {
	console.log("President #" + (i + 1) + " was " + presidents[i]);
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var key in antSpecies) {
	console.log("Key is " + key);
}
