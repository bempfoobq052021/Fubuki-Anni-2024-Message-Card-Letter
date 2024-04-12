/* Knob Functions */

function turn_knob(){
    document.getElementById("knob_img").classList.add("knob_turned");
}

/* Coin Insert Functions */
/* Dragging Behaviour and Bounding Box Checks for Coins 
Source: https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop2
*/

function coin_init(ev){
    ev.dataTransfer.setData("element_class", ev.target.class);
    document.getElementById("debug_state_display").innerHTML = "init completed";
    console.log("coin initialization completed");
}

function coin_enters_target(ev){
    
    document.getElementById("debug_state_display").innerHTML = "entering target";
}

function coin_hovering(ev){
    ev.preventDefault();
}

function coin_drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("element_class");
    if(ev.target.id !== "drop_target"){
        document.getElementById("debug_state_display").innerHTML = "dropped outside target";
        document.getElementById("ev_target_id").innerHTML = ev.target.id;
        return 10;
    }
    else {
        document.getElementById("debug_state_display").innerHTML = "coin dropped";
        document.getElementById("ev_target_id").innerHTML = ev.target.id;
        console.log("coin dropped");
        turn_knob();
    }
}

function coin_position_readjust(ev){
    
}

function coin_leaves_target(ev){
    
}