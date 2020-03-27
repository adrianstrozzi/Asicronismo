const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, function (data) {
      resolve(data)
    })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedió un error para obtener el personaje ${id}.`)
}

// Creamos un array para que nos regresará 7 ids
// En nuestra variable promesas utilizamos un método .map para obtener todos los ids

var ids = [1, 2, 3, 4, 5, 6, 7]
var promesas = ids.map(id => obtenerPersonaje(id))

// Por último usamos métodos propios de las promesas para regresar todos los datos de los personajes.

Promise
  .all(promesas)
  .then(characters => console.log(characters))
  .catch(onError)

// obtenerPersonaje(1)
//   .then((character) => {
//     console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
//     return obtenerPersonaje(2)
//   })
//   .then(character => {
//     console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
//     return obtenerPersonaje(3)
//   })
//   .then(character => {
//     console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
//     return obtenerPersonaje(4)
//   })
//   .then(character => {
//     console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
//     return obtenerPersonaje(5)
//   })
//   .then(character => {
//     console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
//     return obtenerPersonaje(6)
//   })
//   .then(character => {
//     console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
//     return obtenerPersonaje(7)
//   })
//   .then(character => {
//     console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
//     return obtenerPersonaje(8)
//   })
//   .then(character => {
//     console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
//     return obtenerPersonaje(9)
//   })
//   .then(character => {
//     console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
//     return obtenerPersonaje(10)
//   })
//   .then(character => {
//     console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
//     return obtenerPersonaje(11)
//   })
//   .catch(onError)
