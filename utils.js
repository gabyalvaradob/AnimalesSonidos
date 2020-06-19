class Beat {
    constructor (audioFile){
    this.audio = new Audio(audioFile);
}
    play = () => {
        this.audio.currentTime = 0 //esto hace que se pueda tocar varias veces segun el click, es decir, resetea el audio al presionar
        this.audio.play();
    }
}

class Button {
    constructor(color, keyCode){
        this.color = color;
        this.keyCode = keyCode;
        this.element = document.getElementById(keyCode);
        this.setButtonColorInHTML();
        this.setATransitionEndListener();
    }

    setATransitionEndListener = () => {
        this.element.addEventListener('transitionend',() =>{
            this.deselect();
        });
    }

    setButtonColorInHTML = () => {
        this.element.style.borderColor = this.color;
    }

    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = `0px 0px 17px 0px, ${this.color}`
    }

    deselect = () => {
        this.element.style.backgroundColor = 'transparent';
        this.element.style.boxShadow = `none`;
    }
}

class Animal {
    constructor(image){
        this.url = image;
    }
    showImage = () => {
        document.getElementById("imagenAnimal").style.backgroundImage='url("' + this.url + '")';
    }
}

class Nombres {
    constructor(spanish, english){
        this.esp = spanish;
        this.ing = english;
    }
    mostrarNombre = () =>{
        document.getElementById('spanish').innerText=this.esp;
        document.getElementById('english').innerText=this.ing;
    }
}