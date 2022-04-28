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
            //rectangulo del boton con transparencia al 0%
            fill(241, 179, 60);
            noStroke();
            rect(104, 655, 206, 49, 17);

            image(formulario, 0, 0);

            //Ingresa el nombre
            nameInput.position(48, 381);
            nameInput.size(319, 27);
            nameInput.show();
    
            //Ingresa el correo
            emailInput.position(48, 531);
            emailInput.size(319, 27);
            emailInput.show();

            
    
            break;
    }

    
}




   



 