import Brain from "./brain.js";
import UI from "./ui.js";

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
  let appDiv = document.querySelector("#app")
  let brain = new Brain();
  console.log(appDiv)
  let ui = new UI(brain,appDiv)
  ui.draw();
  window.addEventListener('resize',  (e) => {
    console.log(e)
    ui.draw();
  });

  document.addEventListener('keypress', (e) => {
    console.log(e)
    switch(e.key){
      case 'q': 
      brain.movePaddle(brain.leftPaddle, -1)
      break;
      case 'a': 
      brain.movePaddle(brain.leftPaddle,1)
      break;
      case 'o': 
      brain.movePaddle(brain.leftPaddle, -1)
      break;
      case 'l': 
      brain.movePaddle(brain.leftPaddle, 1)

      break;
    }
  })
}

// =============== ENTRY POINT ==================

console.log("App startup...")
main();