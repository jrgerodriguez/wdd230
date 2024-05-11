const nombreCliente = document.querySelector('#nombre_cliente');
const fechaIngreso = document.querySelector('#fecha_ingreso');
const button = document.querySelector('button');
const tbody = document.querySelector('tbody');

let clientesLista = getListaClientes() || [];

clientesLista.forEach(cliente => {
    displayList(cliente.nombreCliente, cliente.fechaIngreso);
});

button.addEventListener('click', () => {
    if (nombreCliente.value !== "" && fechaIngreso.value !== "") {
        let cliente = {
            nombreCliente: nombreCliente.value,
            fechaIngreso: fechaIngreso.value
        };
        displayList(cliente.nombreCliente, cliente.fechaIngreso);
        clientesLista.push(cliente);
        setListaClientes();
        nombreCliente.value = "";
        fechaIngreso.value = "";
        nombreCliente.focus();
    }
});


function displayList(nombre, fecha) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdDate = document.createElement('td');
    const tdDays = document.createElement('td');

    tdName.textContent = nombre;
    tdDate.textContent = fecha;

    const dias = numeroDias(fecha);
    tdDays.textContent = dias;

    tr.appendChild(tdName);
    tr.appendChild(tdDate);
    tr.appendChild(tdDays);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "❌";
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
    let fechaInicial = new Date(fecha);
    let fechaFinal = new Date();
    let diferenciaEnMs = fechaFinal - fechaInicial;
    let dias = Math.floor(diferenciaEnMs / (1000 * 60 * 60 * 24));
    return dias;
}


