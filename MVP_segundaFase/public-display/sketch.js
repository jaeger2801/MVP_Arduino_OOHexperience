//const { redirect } = require("express/lib/response");

//const { text } = require("express"); <--- dejo esto comentado, siempre que se crea un texto se crea esto que daña el código

let socket = io();
let pantalla;
let contadorSkipping;

//variable para la implementación de una barra de carga
let ancho;
let timer;


function setup() {
    frameRate(60);
    createCanvas(1920, 1080);

    pantalla = 0;
    contadorSkipping = 0;
    ancho = 100;
    timer = 5

}

function preload() {
    //sonidoFeedback('')
    
}

function draw() {
    background(255, 164, 162);

    switch (pantalla) {
        //Pantalla presentación producto y experiencia 1
        //---------------------------------------------------------------------------------------------------------
        case 0: 
            
            
            fill(255, 164, 162);
            rect(0, 0, 1920, 1080);

            fill(255);
            textSize(50);
            text('Pantalla para presentación producto y experiencia 1', 50, 100);
            break;

        //Pantalla presentación producto y experiencia 2
        //---------------------------------------------------------------------------------------------------------
        case 1:


            fill(0);
            rect(0, 0, 1920, 1080);

            fill(255);
            textSize(50);
            text('Pantalla para presentación producto y experiencia 2', 50, 100);
            break;
        
        case 2:
            
        //Pantalla para dar las Instrucciones del juego
        //---------------------------------------------------------------------------------------------------------
            

            fill(219, 68, 109);
            rect(0, 0, 1920, 1080);

            fill(255);
            textSize(50);
            text('Pantalla para la presentación de las instruciones', 50, 100)
            break;

        case 3:

        //Pantalla para indicar que la persona se pare en el tapete
        //---------------------------------------------------------------------------------------------------------

        //función de socket que solo funciona en esta pantalla para la verificación de que la persona está en el tapete
        socket.on('verifica', () => {
            pantalla = 4
        })

            fill(75, 74, 232);
            rect(0, 0, 1920, 1080);

            fill(255);
            textSize(50);
            text('Pantalla que indica que la persona se pare en el tapete', 50, 100);
            break;

        case 4:
        //Pantalla para indicar que la persona está parada en el tapete
        //---------------------------------------------------------------------------------------------------------
          

            fill(75, 74, 232);
            rect(0, 0, 1920, 1080);
        
            fill(255);
            textSize(50);
            text('pantalla indica, todo está en orden, conteo regresivo', 50, 100);

            //barra de carga
            fill(255);
            textSize(150);
            text(timer, 1920/2-35, 1080/2+80);

            if(frameCount%65 == 0){
                ancho -= 20;
                
                if(ancho <= 80){
                    timer = 4;
                }

                if(ancho <= 60){
                    timer = 3;
                }

                if(ancho <= 40){
                    timer = 2;
                }

                if(ancho <= 20){
                    timer = 1;
                }

                if(ancho <= 0){
                    pantalla = 5
                }
            }
            break;
        
        case 5:

        //pantalla donde se ejecuta el juego
            if(pantalla = 5){
                socket.off('verifica') 
            }

           
            fill(0, 74, 232);
            rect(0, 0, 1920, 1080);

            fill(255);
            textSize(50);
            text('Aqui sucede el juego', 50, 100);

            //texto que registra el skipping del jugador
            fill(255);
            textSize(150);
            text(contadorSkipping, 1920/2-35, 1080/2+80);

            
            break;

            
    }
    console.log(contadorSkipping);
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

//función de socket que tiene como función contar la cantidad de repeticiones que hace el jugador

socket.on('skipping', () => {
    if(pantalla == 5){
    contadorSkipping += 1;
    }
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

