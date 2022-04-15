export default class Logger {
    constructor (name) {
      this.name = name
    }  
    sayHello (message) {
      console.log(`${message} [${this.name}]`)
    }
}