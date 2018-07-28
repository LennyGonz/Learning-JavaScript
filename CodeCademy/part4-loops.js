/******************************************************************************** 
--------------------------------  Nested Loops  --------------------------------
********************************************************************************/

/*
If you and a friend have 2 lists of vacation spots and want to see
if there are any locations that overlap we can use NESTED LOOPS

The big idea is that we can run a FOR loop inside another 
FOR loop to compare the items in two arrays

Every time the outer for loop runs ONCE,
the inner FOR loop will run completely

These are called NESTED for loops and we can use them to check to see if any of your
vacation spots match your friend's spots
*/
// EXAMPLE 1
for(let i=0; i<myArray.length; i++){
	for(let j=0;j<yourArray.length; j++){
		continue;
	}
}
let myPlaces = ['Sioux Falls','Houston','Phoenix'];

let friendPlaces = ['Houston','Sioux Falls', 'Missoula'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
		if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log(friendPlaces[friendPlacesIndex]);
      console.log(myPlaces[myPlacesIndex]);
      //either works
      //the order of the same cities printed out on is based on 
      //the order they are in myPlaces because it's the outer loop
      //if friendPlaces were in the outer loop, the order of cities in
      // that array would matter
    }
  }
}