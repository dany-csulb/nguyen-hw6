//Homework 6 Exercise 6
// Use the HTML <d1> tag to create the list (more on this tag). Each term of the dictionary should be given more importance with a <strong> tag

const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

var list = "<dl>", i;

for ( let i=0; i < words.length; i++) {
  list += "<strong><dt>"+words[i]["term"]+"</strong></dt>"+"<dd>"+words[i]["definition"]+"</dd>";
}

list += "</dl>";
document.getElementById("content").innerHTML = list;