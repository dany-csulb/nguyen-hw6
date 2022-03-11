// Homework 6 Exercise 2
// Complete the code to display the text only (no HTML) for 400 level courses

const displayText400 = () => {
  var elements = document.getElementsByClassName("400level");

  for (var i=0; i < elements.length; i++) {
    console.log(elements[i].innerText);
  }
}

displayText400();