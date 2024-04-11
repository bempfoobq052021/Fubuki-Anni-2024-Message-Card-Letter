/* // common function to apply one transition rule
function transition(elem, styleProps) {
  return new Promise((resolve, reject) => {
    function handleTransitionEnd() {
      console.log("Transition Ended...");
      resolve(elem);
    }
    elem.addEventListener("transitionend", handleTransitionEnd, { once: true });
    Object.entries(styleProps).forEach(([prop, value]) => {
      elem.style.setProperty(prop, value);
    });
  });
}

// common function to apply animations to an element.
function animate(elem, animation, remove_animation = null) {
  return new Promise((resolve, reject) => {
    function handleAnimationEnd() {
      console.log("animation ended...");
      resolve(elem);
    }
    elem.addEventListener("animationend", handleAnimationEnd, { once: true });
    if(remove_animation != null) elem.classList.remove(remove_animation);
    elem.classList.add(animation);
  });
}

async function init() {
  const LETTER = document.querySelector(".LETTER");
  // first fadeout text
  await animate(LETTER, "move_down");
  console.log("moving down");
  await animate(LETTER, "flip_and_return", "move_down");
  console.log("flip and return");
}

document.addEventListener("DOMContentLoaded", (e) => {
  document.querySelector("#drawcard").addEventListener("click", init);
}); */

/* Dragging Behaviour and Bounding Box Checks for Coins 
Source: https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop2
*/

function coin_init(ev){
    ev.dataTransfer.setData("element_class", ev.target.class);
    document.getElementById("debug_coin_state_display").innerHTML = "init completed";
    console.log("coin initialization completed");
}

function coin_enters_target(ev){
    
    document.getElementById("debug_coin_state_display").innerHTML = "entering target";
}

function coin_hovering(ev){
    ev.preventDefault();
}

function coin_drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("element_class");
    if(ev.target.id !== "drop_target"){
        document.getElementById("debug_coin_state_display").innerHTML = "dropped outside target";
        document.getElementById("ev_target_id").innerHTML = ev.target.id;
        return 10;
    }
    else {
        document.getElementById("debug_coin_state_display").innerHTML = "coin dropped";
        ev.target.appendChild(document.getElementById(data));
        document.getElementById("ev_target_id").innerHTML = ev.target.id;
        console.log("coin dropped");
    }
}

function coin_position_readjust(ev){
    
}

function coin_leaves_target(ev){
    
}
