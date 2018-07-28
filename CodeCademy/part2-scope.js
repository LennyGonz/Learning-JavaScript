/******************************************************************************** 
  --------------------------------  Global Scopes  --------------------------------
  ********************************************************************************/
  /*
  Global Scope - variables defined in the global scope are declared outside of a set
  of curly braces {}, referred to as a BLOCK, and are thus available throughout a 
  program. We'll cover more on blocks in subsequent exercises.
  */
  
  // 2 FUNCTIONS NAMED colorOfSky
  // const color = 'blue';
  // const colorOfSky = () =>{
  //   return color; 
  // }
  // console.log(colorOfSky());
  
  
  // 1. Here the variable color is declared outside of the function block,
  //    giving it global scope
  
  // 2. In turn, color can be accessed within the colorOfSky function.
  
  // Global variables make data accessible from any place within a program.
  
  const satellite = 'The Moon';
  const galaxy = 'The Milky Way';
  let stars = 'North Star';
  
  const myNightSky = () => {
  return 'Night Sky: '+ satellite + ',' + stars + ',' + galaxy;
  }
  console.log(myNightSky())
  
  // This returns Night Sky: The Moon,North Star,The Milky Way
  // myNightSky() function is able to access the global variable
  // without any problem since the variables are available GLOBALLY
  
  /******************************************************************************** 
  --------------------------------  Block Scopes  --------------------------------
  ********************************************************************************/
  
  /* 
  A block refers to the {} braces of a function, a loop, or an IF statement, 
  and serves as an important structural marker for our code.
  
  Block scope means that a variable defined in the block is only accessible
  within the curly braces.
  
  Block scope works like this:
  */
  const colorOfSky = () => {
    let color = 'blue';
    console.log(color);
  }
  colorOfSky();
  // console.log(color); // ReferenceError
  
  // 1. We define a function colorOfSky();
  // 2. Within the function, the color variable is only available within the curly
  //    braces of the function.
  // 3. If we try to log the same variable outside the function, throws a 
  //    ReferenceError.
  
  // const colorOfSky = () =>{
  //   const dusk = true;
  //   let color = 'blue';
  
  //   if(dusk){
  //     let color = 'pink';
  //     console.log(color); // pink
  //   }
  //   console.log(color); // blue
  // };
  
  colorOfSky(); // prints out blue bc it's a global variable
  console.log(color); // ReferenceError
  
  const cloudCount = () =>{
    let i=2;
    console.log(i);
    for(let i=0; i<10; i++){
      console.log(i);
    }
    cloudCount();
    console.log(i)//ReferenceError
  }
  // 1. Here the variable i is defined in the cloudCount() function.
  // 2. Within the for loop block, we again define "i", as a value that will be
  //    incremented
  // 3. The local value of i, whether defined in the function block or the for loop
  //    has no impact on the global scope of our program.
  