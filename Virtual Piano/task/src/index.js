document.addEventListener("keydown", function(event) {
    let audio = new Audio("audio");
    if (event.code == "KeyA") {
        audio.src = audio.src + "/A.mp3";
        audio.play();
    }
    else if (event.code == "KeyS") {
        audio.src = audio.src + "/S.mp3";
        audio.play();
    }
    else if (event.code == "KeyD") {
        audio.src = audio.src + "/D.mp3";
        audio.play();
    }
    else if (event.code == "KeyF") {
        audio.src = audio.src + "/F.mp3";
        audio.play();
    }
    else if (event.code == "KeyG") {
        audio.src = audio.src + "/G.mp3";
        audio.play();
    }
    else if (event.code == "KeyH") {
        audio.src = audio.src + "/H.mp3";
        audio.play();
    }
    else if (event.code == "KeyJ") {
        audio.src = audio.src + "/J.mp3";
        audio.play();
    }
    else if (event.code == "KeyW") {
        audio.src = audio.src + "/W.mp3";
        audio.play();
    }
    else if (event.code == "KeyE") {
        audio.src = audio.src + "/E.mp3";
        audio.play();
    }
    else if (event.code == "KeyT") {
        audio.src = audio.src + "/T.mp3";
        audio.play();
    }
    else if (event.code == "KeyY") {
        audio.src = audio.src + "/Y.mp3";
        audio.play();
    }
    else if (event.code == "KeyU") {
        audio.src = audio.src + "/U.mp3";
        audio.play();
    }
    else {
        console.log("This key not event");
    }
});
