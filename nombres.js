let beats = {
    "65": {
        beat: new Beat("./assets/nombres/Perro.m4a"),
        button: new Button("#00fffe", 65),
        animal: new Animal("./assets/dog.png"),
        nombre: new Nombres("Español: Perro", "Inglés: Dog")
    },
    "83": {
        beat: new Beat("./assets/nombres/Gato.m4a"),
        button: new Button("#00fffe", 83),
        animal: new Animal("./assets/cat.png"),
        nombre: new Nombres("Español: Gato", "Inglés: Cat")
    },
    "68": {
        beat: new Beat("./assets/nombres/Vaca.m4a"),
        button: new Button("#FF0000", 68),
        animal: new Animal("./assets/cow.png"),
        nombre: new Nombres("Español: Vaca", "Inglés: Cow")
    },
    "70": {
        beat: new Beat("./assets/nombres/Gallo.m4a"),
        button: new Button("#FF0000", 70),
        animal: new Animal("./assets/chicken.png"),
        nombre: new Nombres("Español: Gallo", "Inglés: Rooster")
    },
    "71": {
        beat: new Beat("./assets/nombres/Caballo.m4a"),
        button: new Button("#FF0000", 71),
        animal: new Animal("./assets/horse.png"),
        nombre: new Nombres("Español: Caballo", "Inglés: Horse")
    },
    "72": {
        beat: new Beat("./assets/nombres/Cerdo.m4a"),
        button: new Button("#FF0000", 72),
        animal: new Animal("./assets/pig.png"),
        nombre: new Nombres("Español: Cerdo", "Inglés: Pig")
    },
    "74": {
        beat: new Beat("./assets/nombres/Oveja.m4a"),
        button: new Button("#FF0000", 74),
        animal: new Animal("./assets/sheep.png"),
        nombre: new Nombres("Español: Oveja", "Inglés: Sheep")
    },
    "75": {
        beat: new Beat("./assets/nombres/Leon.m4a"),
        button: new Button("#00cc00", 75),
        animal: new Animal("./assets/lion.png"),
        nombre: new Nombres("Español: León", "Inglés: Lion")
    },
    "76": {
        beat: new Beat("./assets/nombres/Rana.m4a"),
        button: new Button("#00cc00", 76),
        animal: new Animal("./assets/frog.png"),
        nombre: new Nombres("Español: Rana", "Inglés: Frog")
    }
}

triggerBeat = (event) => {
    const keyCode = event.keyCode;
    if (keyCode in beats){
        let keyPress=beats[keyCode];
        keyPress.beat.play();
        keyPress.button.select();
        keyPress.animal.showImage();
        keyPress.nombre.mostrarNombre();
    } else {
        console.log("Tecla sin sonido")
    }
}

document.addEventListener('keydown', triggerBeat)
