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
  .then(function (character) {
    console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
  })
  .catch(onError)
