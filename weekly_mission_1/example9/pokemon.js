class Pokemon{
    constructor(name){    
        this.count = 0//iniciamos un contador para las veces que entra esta función 
        this.name = name//vamos a recibir el nombre del pokemon
    }
    sayHello(message) {//agregamos el mensaje que recibimos del main 
        this.count++//hacemos un count para saber las veces que entra a ejecutar estas funciones
        console.log('Mi pokemon '+ this.name + ' ' + 'con ID' + ' ' + this.count + ' ' + message)
    }
    sayMessage(message) {
        this.count++
        console.log('Mi pokemon '+ this.name + ' ' + 'con ID' + ' ' + this.count + ' ' + message)
    }
}
module.exports = Pokemon