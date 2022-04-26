//const { redirect } = require("express/lib/response");



//const { text } = require("express"); <--- dejo esto comentado, siempre que se crea un texto se crea esto que daña el código

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
        //Pantalla presentación producto y experiencia 1
        //---------------------------------------------------------------------------------------------------------
        case 0:
            
            fill(255, 164, 162);
            rect(0, 0, 1560, 720);

            fill(255);
            textSize(50);
            text('Pantalla para presentación producto y experiencia 1', 50, 100);
            break;
        //Pantalla presentación producto y experiencia 2
        //---------------------------------------------------------------------------------------------------------
        case 1:
            fill(0);
            rect(0, 0, 1560, 720);

            fill(255);
            textSize(50);
            text('Pantalla para presentación producto y experiencia 2', 50, 100);
            break;
        
        case 2:
        //Pantalla para dar las Instrucciones del juego
        //---------------------------------------------------------------------------------------------------------
            fill(219, 68, 109);
            rect(0, 0, 1560, 720);

            fill(255);
            textSize(50);
            text('Pantalla para la presentación de las instruciones', 50, 100)
            break;

        case 3:
        //Pantalla para indicar que la persona se pare en el tapete
        //---------------------------------------------------------------------------------------------------------
            fill(75, 74, 232);
            rect(0, 0, 1560, 720);

            fill(255);
            textSize(50);
            text('Pantalla que indica que la persona se pare en el tapete', 50, 100);
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

