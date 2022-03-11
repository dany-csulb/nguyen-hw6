// Homework 6 Exercise 5
//Write JavaScript code to display a table as shown below. Note the following:
//   Table displays number 1 - 12 (number on each row)
//   Numbers divisible by 4 have a blue background
//   Text is center aligned
//

for (var i=0; i < 12; i++) {
  var output = document.getElementById("output");
  var rows = document.createElement("tr");
  var columns = document.createElement("td");

  columns.innerText = i+1;
  rows.appendChild(columns)
  output.appendChild(rows);

  if ((i+1) % 4 == 0) {
    columns.classList.add("four")
  }
}
