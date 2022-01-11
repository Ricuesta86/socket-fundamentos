var socket = io();
// Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//Emitir o Enviar
socket.emit('enviarMensaje', {
    usuario: 'Roberto',
    message: 'Utilizando Socket'
}, function(resp) {
    console.log(resp);
});

//Escuchar la aplicación
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);

});