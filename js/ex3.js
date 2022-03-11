// Homework 6 Exercise 3
// Create and run a function to change all paragraph elements to bold with a yellow background

function elementChange() {
  const elements = document.getElementsByTagName('p');
  
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "yellow";
    elements[i].style.fontWeight = "bold";
  }
}

elementChange();