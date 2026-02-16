var textinput;

function init(){
//add your javascrip between these two lines of code
  var button = document.getElementById("entrybutton");
  textinput = document.getElementById("entryinput");
  
  function sendAlert(){    
    alert("Chris Everhart: " + textinput.value);
  } 

  function updateTextOutput() {
    document.getElementById('textoutput').innerHTML = textinput.value;
  }

  button.addEventListener('click', sendAlert);
  button.addEventListener('click', updateTextOutput);    
}

window.addEventListener('load', init);