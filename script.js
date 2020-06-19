let beats = {
    "65": {
        beat: new Beat("./assets/dog.mp3"),
        button: new Button("#00fffe", 65),
        animal: new Animal("./assets/dog.png")
    },
    "83": {
        beat: new Beat("./assets/cat.mp3"),
        button: new Button("#00fffe", 83),
        animal: new Animal("./assets/cat.png")
    },
    "68": {
        beat: new Beat("./assets/cow.mp3"),
        button: new Button("#FF0000", 68),
        animal: new Animal("./assets/cow.png")
    },
    "70": {
        beat: new Beat("./assets/rooster.mp3"),
        button: new Button("#FF0000", 70),
        animal: new Animal("./assets/chicken.png")
    },
    "71": {
        beat: new Beat("./assets/Horse.mp3"),
        button: new Button("#FF0000", 71),
        animal: new Animal("./assets/horse.png")
    },
    "72": {
        beat: new Beat("./assets/pig.mp3"),
        button: new Button("#FF0000", 72),
        animal: new Animal("./assets/pig.png")
    },
    "74": {
        beat: new Beat("./assets/sheep.mp3"),
        button: new Button("#FF0000", 74),
        animal: new Animal("./assets/sheep.png")
    },
    "75": {
        beat: new Beat("./assets/lion.mp3"),
        button: new Button("#00cc00", 75),
        animal: new Animal("./assets/lion.png")
    },
    "76": {
        beat: new Beat("./assets/frog.mp3"),
        button: new Button("#00cc00", 76),
        animal: new Animal("./assets/frog.png")
    }
}

triggerBeat = (event) => {
    const keyCode = event.keyCode;
    if (keyCode in beats){
        let keyPress=beats[keyCode];
        keyPress.beat.play();
        keyPress.button.select();
        keyPress.animal.showImage();
    } else {
        console.log("Tecla sin sonido")
    }
}

document.addEventListener('keydown', triggerBeat)
