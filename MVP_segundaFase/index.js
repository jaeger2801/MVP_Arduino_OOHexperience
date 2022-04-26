
const express = require('express');
const { Server } = require('socket.io');
const { SerialPort, ReadlineParser } = require('serialport');
const app = express();
const httpServer = app.listen(5050);
const ioServer = new Server(httpServer);

const staticDisplay = express.static('public-display');
app.use('/display', staticDisplay);
app.use(express.json());


ioServer.on('connection', (socket) => {
        //socket.broadcast.emit('positions', characterMessage);
        //socket.broadcast.emit('cambio1->2', pantalla1A2);
});



//------------------------------------------------this opens a port

const protocolConfiguration = {
    path: 'COM4',
    baudRate: 9600
}

const port = new SerialPort(protocolConfiguration);
const parser = port.pipe(new ReadlineParser());


parser.on('data', (data) => {

    let dataArray = data.split(' ');
    //console.log(dataArray);

    let si = parseInt(dataArray[0]);
    let no = parseInt(dataArray[1]);
    let jump = parseInt(dataArray[2]);


    if (si < 20){
        ioServer.emit('cambio', "sumar"); 
    }

    if (no < 20){
        ioServer.emit('cambio', "restar");
    }
    

    /*console.log(data, toString());
    }*/
    // Create the array
   /*  let dataArray = data.split(' ');
    console.log(dataArray); */

    // Parse the Strings to Integer
   
    /* let action1 = parseInt(dataArray[0]);
    let action2 = parseInt(dataArray[1]); */


    // Emit the message using WebSocket to the client
    //ioServer.emit('positions', characterMessage);

    /* if(action1 == 1){
        ioServer.emit("subirTamano");
    } */
    }
);


































//=============================================
//============================================= Week 9 demo:
//=============================================

/*
// Import de SerialPort package
const {
    SerialPort,
    ReadlineParser
} = require('serialport');

// Set the rules for the serial communication
const protocolConfiguration = {
    path: '/dev/cu.usbmodem142101',
    baudRate: 9600
}

// Opens a port
const port = new SerialPort({
    path: '/dev/cu.usbmodem142101',
    baudRate: 9600
});

/*
//--------------------------------------- 1- Read without parsing

// Read data from Serial Buffer

/*
port.on('data', (data) => {
    console.log(data);
})
*/

//--------------------------------------- 2- 4- Reading after parsing
/*
const parser = port.pipe(new ReadlineParser);

parser.on('data', (data) => {
    console.log(data);
})
*/

//--------------------------------------- 3- From String to Integer
/*
const parser = port.pipe(new ReadlineParser);

parser.on('data', (data) => {

    let integerData = parseInt(data);
    console.log(integerData);
});
*/

//--------------------------------------- 5- Creating an Array
/*
const parser = port.pipe(new ReadlineParser);

parser.on('data', (data) => {

    // Divide the String "A B C" by " " to create an Array
    let dataArray = data.split(' ');

    // Remove the last item: \r
    dataArray.splice(-1);
    console.log(dataArray);

    // Parse all the Springs in Integers
    let dataArrayInt = dataArray.map(i =>
        parseInt(i)
    );
    console.log(dataArrayInt);

});
*/
