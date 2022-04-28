//const { redirect } = require("express/lib/response");

//const { text } = require("express"); <--- dejo esto comentado, siempre que se crea un texto se crea esto que daña el código

let socket = io();


function setup() {
    frameRate(60);
    createCanvas(1920, 1080);
}

function preload() {
    //carga de imagenes
    feedback = loadImage('data/Feedback (pantalla 6).png');
    agradecimiento = loadImage('data/Agradecimiento escanea QR (pantalla 7).png');

}

function draw() {
    background(255, 164, 162);

    
}




   



 