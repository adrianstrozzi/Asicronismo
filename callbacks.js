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

obtenerPersonaje(1)
  .then((character) => {
    console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
    return obtenerPersonaje(2)
  })
  .then(character => {
    console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
    return obtenerPersonaje(3)
  })
  .then(character => {
    console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
    return obtenerPersonaje(4)
  })
  .then(character => {
    console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
    return obtenerPersonaje(5)
  })
  .then(character => {
    console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
    return obtenerPersonaje(6)
  })
  .then(character => {
    console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
    return obtenerPersonaje(7)
  })
  .then(character => {
    console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
    return obtenerPersonaje(8)
  })
  .then(character => {
    console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
    return obtenerPersonaje(9)
  })
  .then(character => {
    console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
    return obtenerPersonaje(10)
  })
  .then(character => {
    console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
    return obtenerPersonaje(11)
  })
  .catch(onError)
