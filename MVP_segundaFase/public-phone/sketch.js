let socket = io();

//aqui se van a crear los inputs
let nameInput;
let emailInput;

//Declaración de pantallas
let pantalla;

//declaración de imagenes
let formulario;
let agradecimiento;

function preload() {
    formulario = loadImage("data/formulario.png");
    agradecimiento = loadImage("data/Gracias.png");
}

function setup() {
    pantalla = 0;

    nameInput = createInput('');
    emailInput = createInput('');

    canvas = createCanvas(414, 896);
}

function draw() {
    background(414, 896);

    switch (pantalla) {
        case 0:
            image(formulario, 0, 0);
            break;
    }

    
}




   



 