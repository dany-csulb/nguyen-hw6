// Homework 6 Exercise 4
// Create and run a function to add a link to the College of Business between the CSULB link and the IS link.

function addElement() {
  var a = document.createElement("a");
  var links = document.getElementById("links");
  var cobElement = document.createElement("li");

  a.textContent = "College of Business";
  a.setAttribute("href", "https://www.csulb.edu/college-of-business");
  cobElement.appendChild(a);
  links.appendChild(cobElement);
}

addElement();