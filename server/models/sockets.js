

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            // TODO: validar jwt
            // Si el token no es valido, desconectar

            //TODO: saber que usuario esta activo

            //TODO: emitir todos los usuarios conectados

            //TODO: socket join, uid

            //TODO: escuchar cuando el cliente manda un mensaje
            //mensaje personal

            //TODO: disconnect
            //marcar en db q el usuaruo se desconecto

            //TODO: emitir todos los usuarios conectados
            });
            
        
        });
    }


}


module.exports = Sockets;