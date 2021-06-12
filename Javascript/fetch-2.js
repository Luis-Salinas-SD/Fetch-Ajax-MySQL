//& Endpoint
var url = 'https://jsonplaceholder.typicode.com/users/'
const array_chido = []

//&Fetch GET
fetch(url, {
    method: 'GET'
})
    .then(Response => Response.json())
    .then(data => {
        showData(data)
    })
    .catch(error => console.error('Aqui hay algo mal:' + error))

//& Funcion que muestra los datos en la tabla
const showData = (data) => {
    let body = '';
    for (let index = 0; index < data.length; index++) {
        body += `<tr>
                    <td>${data[index].id}</td>
                    <td>${data[index].name}</td>
                    <td>${data[index].email}</td>
                </tr>`
        //*imprime los datos dentro de la tabla
        document.getElementById('data').innerHTML = body
        //# Agrega los datos al arreglo en formato de objtoJSON
        array_chido.push({
            id: data[index].id,
            nombre: data[index].name,
            email: data[index].email
        })
    }//for
}//showData Function

//&Función en la cual quiero enviar los datos a un archivo php
const botonEnviar = document.getElementById('btnSend')

/* botonEnviar.addEventListener('click', (event) => {
    event.preventDefault()

    fetch('pagina.php', {
        method: 'POST',
        body: JSON.stringify({ array_chido: array_chido })
    })
        .then(response => {
            let respuesta = response
            console.log(respuesta);
        })
        .catch(error => console.log(error))
}) */




//& Metodo 1 que si srive
botonEnviar.addEventListener('click', (event) => {
    event.preventDefault()
    $.ajax({
        data: { array_chido: JSON.stringify(array_chido) },
        url: 'pagina.php',
        type: 'POST',
        dataType: 'json',
        success: function (response) {
            response.text()// Imprimir respuesta del archivo
        },
        error: function (error) {
            console.log(error); // Imprimir respuesta de error
        }
    });
})





