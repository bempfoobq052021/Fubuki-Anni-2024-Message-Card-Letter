// common function to apply one transition rule
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
});
