// Iteration 1: Names and Input

let hacker1 = 'Joana'
console.log("The driver's name is " + hacker1 );
let hacker2 = 'Sparta'
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }
  else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
   }
  else if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length + hacker2.length} characters!`)
  }


// Iteration 3: Loops
//3.1
let spaceDriver = ''
for (let i=0; i < hacker1.length ; i++) {
  spaceDriver += hacker1[i] + ' '
  spaceDriver = spaceDriver.toUpperCase()
}
console.log(spaceDriver);

//3.2
let reverseHacker =''
for (let i = hacker2.length -1; i >= 0; i-- ) {
  reverseHacker += hacker2[i];
}
console.log(reverseHacker)

//3.3
//think this one is wong. Couldn't understand which strings we had to compare it to.

for (let i = 0; i < hacker1.length; ++1) {
    if (hacker1[i] < hacker2[i]) {
      console.log("The driver's name goes first.");
      break;
    }
    else if (hacker1[i] > hacker2[i]) {
      console.log("Yo, the navigator goes first definitely.");
      break;
    }
    else {
      console.log("What?! You both have the same name?");
    }
  }


//BONUS 1
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet odio et sapien porttitor congue. Sed id nunc facilisis urna cursus mollis. Etiam vehicula vehicula justo sit amet auctor. Vivamus imperdiet ultricies sapien faucibus egestas. Mauris sodales vestibulum metus, non ultricies velit sagittis quis. Nunc congue vitae purus non porttitor. Etiam in finibus augue, non lobortis tortor. Praesent id malesuada elit. Cras tristique nisl erat, hendrerit bibendum ante egestas sed.Curabitur quis auctor velit, at vehicula mauris. Mauris ac mi consequat, viverra tortor ac, fermentum libero. Suspendisse porta faucibus est, ut pellentesque ipsum varius vitae. Donec dapibus libero quis orci aliquet pellentesque. Sed porttitor efficitur auctor. Cras fermentum sem et blandit malesuada. Cras finibus tincidunt laoreet. Morbi finibus bibendum massa, vel facilisis arcu auctor cursus. Phasellus mi erat, rhoncus sed neque quis, porttitor elementum eros. Nam ut sapien sodales turpis suscipit sodales et eu dolor. Vivamus sit amet orci at quam commodo pellentesque. Donec placerat consequat magna, eget varius nisi tempus viverra. Mauris posuere erat sapien, sed mattis neque imperdiet in. Donec volutpat diam eu efficitur egestas. Ut risus velit, pharetra eu malesuada sit amet, convallis nec justo. Ut tempor vestibulum urna id volutpat. Maecenas rutrum posuere eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam dictum ultrices vulputate. In tempor nisl nec tortor commodo faucibus. Mauris nec purus ante. Pellentesque consequat, arcu quis sodales luctus, urna dui eleifend quam, faucibus pharetra ipsum nunc ac sapien."

let textCount = text.length;
console.log (textCount)

