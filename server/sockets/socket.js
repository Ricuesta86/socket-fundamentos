const { io } = require('../server');
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         respuesta: 'Todo salio bien!'
        //     });
        // } else {
        //     callback({
        //         respuesta: 'Todo salio Mal !!!!!'
        //     });
        // }
    });
});