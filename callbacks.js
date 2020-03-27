// Primero definimos como variables al URL de la API
// Segundo definimos como variable las consultas que vamos a hacer a people dentro de la API

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

// En nuestra variable lukeUrl estamos haciendo una consulta a la API y luego a people :id que en este caso queremos remplazar por 1
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 4)}`
// En esta variable indicamos que queremos que nuestra consulta se haga en otra página
const opts = { crossDomain: true }
// Aquí estamos creando una función para que con el parámetro character nos de un mensaje con el atributo .name
const onPeopleResponse = function (character) {
  console.log(`Hola yo soy ${character.name}, mido ${character.height} cm y nací el ${character.birth_year}.`)
}
// Para hacer consultas en Jquery se utiliza el método $.get agregamos nuestras variables previamente definidas
$.get(lukeUrl, opts, onPeopleResponse)
