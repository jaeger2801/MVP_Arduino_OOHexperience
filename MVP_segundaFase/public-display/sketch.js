//const { redirect } = require("express/lib/response");

//const { text } = require("express"); <--- dejo esto comentado, siempre que se crea un texto se crea esto que daña el código

let socket = io();
let pantalla;
let contadorSkipping;

//variable para la implementación de una barra de carga
let ancho;
let timer;

//Carga de interfaces/imagenes
let presentacionProducto; //pantalla 0
let presentacionExperiencia; //pantalla 1
let instruciones; //pantalla 2
let indicativoTapete; //pantalla 3
let indicativoPreparación //pantalla 4
let juego //pantalla 5
let feedback //pantalla 6
let agradecimiento //pantalla 7


function setup() {
    frameRate(60);
    createCanvas(1920, 1080);

    pantalla = 5;
    contadorSkipping = 0;
    ancho = 100;
    timer = 5

}

function preload() {
    //carga de imagenes
    presentacionProducto = loadImage('data/Presentación producto (pantalla 0).png');
    presentacionExperiencia = loadImage('data/Presentación Experiencia (pantalla 1).png');
    instruciones = loadImage('data/Instrucciones (compressed).gif');
    indicativoTapete = loadImage('data/Indicativo persona frente sensor (pantalla 3).png');
    indicativoPreparación = loadImage('data/Conteo pre juego (pantalla 4).png');
    juego = loadImage('data/Juego (compressed).gif');
    feedback = loadImage('data/Feedback (pantalla 6).png');
    agradecimiento = loadImage('data/Agradecimiento escanea QR (pantalla 7).png');

    //sonidoFeedback('')
    
}

function draw() {
    background(255, 164, 162);

    switch (pantalla) {
        //Pantalla presentación producto y experiencia 1
        //---------------------------------------------------------------------------------------------------------
        case 0: 
            
            image(presentacionProducto, 0, 0);
            /* fill(255, 164, 162);
            rect(0, 0, 1920, 1080); */

            fill(255);
            textSize(50);
            text('Pantalla para presentación producto y experiencia 1', 50, 100);
            break;

        //Pantalla presentación producto y experiencia 2
        //---------------------------------------------------------------------------------------------------------
        case 1:

            image(presentacionExperiencia, 0, 0);
           /*  fill(0);
            rect(0, 0, 1920, 1080); */

            /* fill(255);
            textSize(50);
            text('Pantalla para presentación producto y experiencia 2', 50, 100); */
            break;
        
        case 2:
            
        //Pantalla para dar las Instrucciones del juego
        //---------------------------------------------------------------------------------------------------------
            
            image(instruciones,0 ,0);
            /* fill(219, 68, 109);
            rect(0, 0, 1920, 1080); */

           /*  fill(255);
            textSize(50);
            text('Pantalla para la presentación de las instruciones', 50, 100) */
            break;

        case 3:

        //Pantalla para indicar que la persona se pare en el tapete
        //---------------------------------------------------------------------------------------------------------

        //función de socket que solo funciona en esta pantalla para la verificación de que la persona está en el tapete
        socket.on('verifica', () => {
            pantalla = 4
        })

        image(indicativoTapete, 0, 0);

            /* fill(75, 74, 232);
            rect(0, 0, 1920, 1080);

            fill(255);
            textSize(50);
            text('Pantalla que indica que la persona se pare en el tapete', 50, 100); */
            break;

        case 4:
        //Pantalla para indicar que la persona está parada en el tapete
        //---------------------------------------------------------------------------------------------------------
          
        image(indicativoPreparación,0,0);

           /*  fill(75, 74, 232);
            rect(0, 0, 1920, 1080); */
        
            /* fill(36,129,142);
            textSize(50);
            text('pantalla indica, todo está en orden, conteo regresivo', 50, 100);
 */
            //barra de carga
            fill(36,129,142);
            textSize(150);
            text(timer, 1920/2-35, 1080/2+80);

            if(frameCount%80 == 0){
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

            image(juego, 0, 0);
           
            /* fill(0, 74, 232);
            rect(0, 0, 1920, 1080);

            fill(255);
            textSize(50);
            text('Aqui sucede el juego', 50, 100); */

            //texto que registra el skipping del jugador
            fill(235,144,45);
            noStroke();
            textSize(80);
            text('puntaje', 1920-550, 1080/2-80);

            fill(36,129,142);
            noStroke();
            textSize(140);
            text(contadorSkipping, 1920-550, 1080/2+80);

            //texto indicativo de tiempo
            fill(235,144,45);
            noStroke();
            textSize(80);
            text('tiempo', 1920-550, 1080/2+200);

            //barra de carga solid
            fill(167,60,153);
            noStroke();
            rect(1920-550, 1080/2+250, ancho+300, 50, 50);

             //barra de carga stroke
             noFill();
             stroke(167,60,153);
             strokeWeight(5);
             rect(1920-550, 1080/2+250, 400, 50, 50);

             //framecount para el tiempo de carga
             if(frameCount%67 == 0) {
                 ancho -= 14;
             }
             
            
            break;

            
    }
    //console.log(contadorSkipping);
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

   



 