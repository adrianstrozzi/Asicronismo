class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar(fn) {
    var { nombre, apellido } = this
    console.log(`Hola, me llamo ${nombre}${apellido}`)
    if (fn) {
      fn(nombre, apellido)
    }
  }

  soyAlto() {
    returnthis.altura > 1.8
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }

  saludar(fn) {

    var { nombre, apellido } = this
    console.log(`Hola, me llamo ${nombre}${apellido} y soy Desarrollador(a)`)
    if (fn) {
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {

  console.log(`Buen día ${nombre}${apellido}`)
  if (esDev) {
    console.log(`Ah mirá, no sabía que eras desarrollador(a)`)
  }
}

var sacha = new Desarrollador('Sacha ', 'Lifszyc', 1.71)
var daniel = new Desarrollador('Daniel ', 'Dominguez', 1.80)
var arturo = new Desarrollador('Arturo ', 'Tello', 1.70)
var paula = new Persona('Paula ', 'Torres', 1.82)

sacha.saludar()
daniel.saludar(responderSaludo)
arturo.saludar(responderSaludo)
paula.saludar(responderSaludo)