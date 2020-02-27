const { io } = require('../server');


//saber cuando un usuario se conecta al servidor
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    //saber cuando un usuario se desconecta del servidor
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        //mandar mensaje de que la informacion llegó
        // if (mensaje.usuario) {
        //     callback({
        //         respuesta: 'TODO SALIO PULENTO'
        //     });

        // } else {
        //     callback({
        //         respuesta: 'SALIO MAL OEEEE'
        //     })
        // }


    })
});