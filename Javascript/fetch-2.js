//! ========== Endpoint ==========
var url = 'https://jsonplaceholder.typicode.com/users/'
const array_datos = []
const botonEnviar = document.getElementById('btnSend')

//! ========== Fetch GET ==========
fetch(url, {
    method: 'GET'
})
    .then(Response => Response.json())
    .then(data => {
        showData(data)
    })
    .catch(error => console.error('Aqui hay algo mal:' + error))

//! ========== Funcion que inserta los datos en la tabla ==========
const showData = (data) => {
    let body = '';

    for (let index = 0; index < data.length; index++) {
        body += `<tr>
                    <td>${data[index].id}</td>
                    <td>${data[index].name}</td>
                    <td>${data[index].email}</td>
                </tr>`
        //# ========== imprime el <tr> en la tabla ==========
        document.getElementById('data').innerHTML = body

        //# ========== Agrega los datos al arreglo en formato de objtoJSON ==========
        array_datos.push({
            id: data[index].id,
            nombre: data[index].name,
            email: data[index].email
        })
    }//for
}//showData Function

//! ========== Evento que envia los datos del arreglo a php ==========
//# Metodo 1 que si srive
/* botonEnviar.addEventListener('click', (event) => {
    event.preventDefault()

    $.ajax({
        data: { array_chido: JSON.stringify(array_chido) },
        url: 'pagina.php',
        type: 'POST',
        dataType: 'json',
        success: function (response) {
            console.warn(response.text());// Imprimir respuesta del archivo
        },
        error: function (error) {
            console.log(error); // Imprimir respuesta de error
        }
    });

}) */

botonEnviar.addEventListener('click', (event) => {
    event.preventDefault();

    fetch('pagina.php', {
        method: 'POST',
        body: JSON.stringify(array_datos),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('El sigueinte error pertenece a la linea 70' + error))
})


