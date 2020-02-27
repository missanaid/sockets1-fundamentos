// creamos la funcion para saber cuando me conecto al servidor
var socket = io();
//los on son para escuchar informacion
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//Detectar desconexion del servidor
socket.on('disconnect', function() {
    console.log('Se perdió la conexion con el servidor');
});

//Los emits sirven para enviar informacion 
//
socket.emit('enviarMensaje', {
    usuario: 'Ariadna',
    mensaje: 'SioNo Raza'
        //Callback de que la configuracion se recibio
}, function(respuesta) {
    console.log('Respuesta del server: ', respuesta);
});


//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);

})