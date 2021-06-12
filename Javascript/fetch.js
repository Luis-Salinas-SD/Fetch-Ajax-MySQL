//$ Endpoint
var url = 'https://jsonplaceholder.typicode.com/users'
//var result = ''
//&fetch - 'GET'
fetch(url, {
    method: 'GET'
})
    .then(response => response.json())
    .then(data => sendDatos(data))
    /* .then(r => r.forEach(element => {
        let id = element.id
        let name = element.name
        let email = element.email

        console.log('id: ' + id);
        console.log('Name: ' + name);
        console.log('E-mail: ' + name);


    }

    )) */
    .catch(error => console.error('Algo salió mal!!!' + error))

function sendDatos(data) {
    data.forEach(element => {
        let id = element.id
        let name = element.name
        let email = element.email
        console.table([id, name, email])



    });
}


/* let boton = document.getElementById('btnSend')
boton.addEventListener('click', (e) => {
    e.preventDefault();

    const datosForm = new FormData(formulario);

    fetch('pagina.php', {
        method: 'POST',
        body: datosForm
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => error)

}) */

/* const sendData = (data) => {
    data.forEach(element => {
        //#Datos a mandar a php
        const id = element.id //$aqui se alamcenan los 10 ids
        const name = element.name //$aqui se alamacenan los nombres
        const email = element.email //$aqui se alamecnan los email

        //console.log(id + ' / ' + name + ' / ' + email);
        const datosForm = new FormData(formu);
        datosForm.append('id', id)
        datosForm.append('name', name);
        datosForm.append('email', email);

        fetch('pagina.php', {
            method: 'POST',
            body: datosForm
        })
            .then(response => response.text())
            .then(rsl => console.log(rsl))

    })
} */