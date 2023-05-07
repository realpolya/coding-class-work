/* 

1. Create two to four lists of words or phrases. Each list should have some sort of theme, or be similar in some way. As a guiding principle, each list should have 5+ items to start. Your lists should be separate in some way (in theme, purpose, or structure).

2. Write the formula for selecting a random element from an array. Use string interpolation to swap out one of the words in the poem for a randomly selected element from your list.

Hint: Formula for selecting a random element from an array
let randomElement = arrayName[Math.floor(Math.random()*arrayName.length)];

3. Write a function that logs the randomized poem to the console.

4. Invoke (call) the function to run the poem.

5. Check the console for the result.

Sample Poem: // A house of steel / Among high mountains / Using candles / Inhabited by people who sleep almost all the time.

*/

let array_one = [
    "a house of wood",
    "a house of brick",
    "a house of broken dishes",
    "a house of discarded clothing",
    "a house of dust"
  ];
  
  let array_two = [
    "among other houses",
    "among small hills",
    "among high montains",
    "by a river",
    "by an abandoned lake"
  ];
  
  // let randomElement = arrayName[Math.floor(Math.random()*arrayName.length)];
  
  function renderPoem() {
    // select random element from array 01
    let elementFromArrayOne = array_one[Math.floor(Math.random()*array_one.length)];

    // select random element from array 02
    let elementFromArrayTwo = array_two[Math.floor(Math.random()*array_two.length)];

    //use querySelector to grap the dive with a class of poem
    let poem = document.querySelector('.poem')
    
    // create a new element ... paragraph tag
    let paragraph = document.createElement('p')

    //add the text attribute
    paragraph.textContent = `${elementFromArrayOne} ${elementFromArrayTwo}`

    //add class attribute
    paragraph.classList.add('line')

    //elementFromArrayOne + "" + elementFromArrayTwo

    // append that paragraph to the div with a class of poem
    poem.appendChild(paragraph)
  }
  

  let btn = document.querySelector("button");
  btn.addEventListener("click", renderPoem);
  