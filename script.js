function greet() {
    var name = prompt("What's your name?");
    if (name !== null && name !== "") {
      alert("Hello, " + name + "!");
    }
  }
  
  // Function to change the background color
  function changeColor(color) {
    document.body.style.backgroundColor = color;
  }
  
  // Function to toggle a class on an element
  function toggleClass() {
    var element = document.getElementById("toggleElement");
    element.classList.toggle("highlight");
  }