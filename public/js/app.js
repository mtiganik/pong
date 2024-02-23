import Brain from "./brain.js";

function validateIndexHtml(){
  if(document.querySelectorAll("#app").length != 1){
    throw Error("More or less than one div with id 'app' found!")
  }
  if(document.querySelectorAll("div").length != 1){
    throw Error("More or less than one div found in index.html")

  }
}
function main(){
  validateIndexHtml();
  let appDiv = document.querySelectorAll("#app")
  let brain = new Brain();
}

// =============== ENTRY POINT ==================

console.log("App startup...")
main();