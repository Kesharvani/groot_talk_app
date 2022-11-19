var listenerr = document.querySelector("#btn");
var inputselector = document.querySelector("#ipt");
var outputselector = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/groot.json";
function getURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("Something wrong with the server! try again after some time");
}
function translateintogroot() {
  var inputText = inputselector.value;

  fetch(getURL(inputText))
    .then((response) => response.json())
    .then((out) => {
      var transfer = out.contents.translated;
      outputselector.innerText = transfer;
    })
    .catch(errorHandler);
}

listenerr.addEventListener("click", translateintogroot);
