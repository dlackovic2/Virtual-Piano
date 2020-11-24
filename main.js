document.addEventListener("keydown", function(e){
    if (e.code === "KeyA"
        || e.code === "KeyS"
        || e.code === "KeyD"
        || e.code === "KeyF"
        || e.code === "KeyG"
        || e.code === "KeyH"
        || e.code === "KeyJ"
        || e.code === "KeyW"
        || e.code === "KeyE"
        || e.code === "KeyT"
        || e.key === "Y"
        || e.key === "y"
        || e.code === "KeyU"
    ) {
        console.log("The '" + e.key + "' key is pressed");
        let audio = new Audio("audio/" + e.key.toUpperCase() + ".mp3");
        audio.play();
    } else {
        console.log("Wrong key has been pressed!");
    }
});