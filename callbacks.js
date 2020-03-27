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

// Implementación de un asyn-await

async function obtenerPersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7]
  var promesas = ids.map(id => obtenerPersonaje(id))
  try {
    var characters = await Promise.all(promesas)
    console.log(characters)
  } catch (id) {
    onError(id)
  }
}

obtenerPersonajes()