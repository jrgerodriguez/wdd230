const nombreCliente = document.querySelector('#nombre_cliente');
const fechaIngreso = document.querySelector('#fecha_ingreso');
const telefonoCliente = document.querySelector('#telefono_cliente');
const modeloDispositivo = document.querySelector('#modelo_dispositivo');
const comentario = document.querySelector('#comentario');
const button = document.querySelector('button');
const tbody = document.querySelector('tbody');

let clientesLista = getListaClientes() || [];

clientesLista.forEach(cliente => {
    displayList(cliente.nombreCliente, cliente.telefonoCliente, cliente.modeloDispositivo, cliente.fechaIngreso, cliente.comentario);
});

button.addEventListener('click', () => {
    if (nombreCliente.value !== "" && fechaIngreso.value !== "") {
        let cliente = {
            nombreCliente: nombreCliente.value,
            telefonoCliente: telefonoCliente.value,
            modeloDispositivo: modeloDispositivo.value,
            fechaIngreso: fechaIngreso.value,
            comentario: comentario.value,
        };
        displayList(cliente.nombreCliente, cliente.telefonoCliente, cliente.modeloDispositivo, cliente.fechaIngreso, cliente.comentario);
        clientesLista.push(cliente);
        setListaClientes();
        nombreCliente.value = "";
        telefonoCliente.value = "";
        modeloDispositivo.value = "";
        fechaIngreso.value = "";
        comentario.value = "";
        nombreCliente.focus();
    }
});


function displayList(nombre, telefono, modelo, fecha, comentario) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPhone = document.createElement('td');
    const tdModel = document.createElement('td');
    const tdDate = document.createElement('td');
    const tdDays = document.createElement('td');
    const tdComentario = document.createElement('td');

    tdName.textContent = nombre;
    tdPhone.textContent = telefono;
    tdModel.textContent = modelo;

    let fechaDate = new Date(fecha);
    fechaDate.setDate(fechaDate.getDate() + 1);
    let fechaFormateada = fechaDate.toLocaleDateString('es-ES', { 
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric' 
    });
    tdDate.textContent = fechaFormateada;


    tdComentario.textContent = comentario;

    const dias = numeroDias(fecha);
    tdDays.textContent = dias;

    tr.appendChild(tdName);
    tr.appendChild(tdPhone);
    tr.appendChild(tdModel);
    tr.appendChild(tdDate);
    tr.appendChild(tdDays);
    tr.appendChild(tdComentario);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.3" stroke="#8B0000" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>`;
    deleteBtn.classList.add('delete');
    tr.append(deleteBtn);

    tbody.appendChild(tr);

    deleteBtn.addEventListener('click', () => {
        tbody.removeChild(tr);
        deleteChapter(nombre);
        input.focus();
    });
}

function setListaClientes() {
    localStorage.setItem('listaClientes', JSON.stringify(clientesLista));
}

function getListaClientes() {
    return JSON.parse(localStorage.getItem('listaClientes'));
}

function deleteChapter(clienteNombre) {
    clientesLista = clientesLista.filter(cliente => cliente.nombreCliente !== clienteNombre);
    setListaClientes();
}

function numeroDias(fecha) {

    let partesFecha = fecha.split('-');
    let dia = partesFecha[0];
    let mes = partesFecha[1];
    let year = partesFecha[2];


    let fechaInicial = new Date(`${dia}-${mes}-${year}`);
    let fechaFinal = new Date();

    let diferenciaEnMs = fechaFinal - fechaInicial;
    let dias = Math.floor(diferenciaEnMs / (1000 * 60 * 60 * 24));

    return dias;
}


