const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

// Se agregó el parámetro callback a nuestra función

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $.get(url, opts, function (character) {
    console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)

    // Lo que va a hacer es que si tiene el parámetro callback se llamará a callback
    if (callback) {
      callback()
    }
  })
}

// Si pedimos los personajes de esta manera aparecerán en orden

obtenerPersonaje(1, function () {
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3, function () {
      obtenerPersonaje(4, function () {
        obtenerPersonaje(5, function () {

        })
      })
    })
  })
})

