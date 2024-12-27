
//This is a function that tells us to add a name after "Hello" +
function greet(name) {
  document.getElementById("message").innerHTML = "Hello, " + name;
}

//Now the browser knows which name to use after "Hello". In this case is John.
greet("John");