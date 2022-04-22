//const { redirect } = require("express/lib/response");

let socket = io();
let pantalla;
let contador;


function setup() {
    frameRate(60);
    createCanvas(1560, 720);

    pantalla = 0;
    contador = 0;

}

function draw() {
    background(255, 164, 162);

    switch (pantalla) {
        case 0:
            fill(255, 164, 162);
            rect(0, 0, 1560, 720);
            break;

        case 1:
            fill(0);
            rect(0, 0, 1560, 720);
            break;
        
        case 2:
            fill(219, 68, 109);
            rect(0, 0, 1560, 720);
            break;

        case 3:
            fill(75, 74, 232);
            rect(0, 0, 1560, 720);
            break;
    
    }
}


socket.on('cambio', (pantallaC) => {
    switch(pantallaC){

        case "sumar":
        if (pantalla < 3){
            pantalla += 1;
        }
         break;
     
        case "restar":
        if (pantalla > 0){ 
            pantalla -= 1;
        }
         break;
     }
    console.log(pantallaC);
})



 /*socket.on('positions', (positions) => {
    
    character.x = map(positions.x, 0, 100, 0, windowWidth);
    character.y = map(positions.y, 0, 100, 0, windowHeight);

});


socket.on('subirTamano', (subirTamano) => {
    
    character.tam +=5

});

socket.on('disminuirTamano', (disminuirTamano) => {
    
    character.tam -=5
}); */

