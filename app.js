fetch("https://localhost:44392/WSNormativas.asmx/WSNormativaJSON", {
    method: "GET"
})
.then(response => response.json())
.then(data => {
    console.log("Datos recibidos desde SQL Server:");
    console.log(data);
})
.catch(error => {
    console.error("Error al conectar con el Web Service:", error);
});


let tipoSeleccionado = null;

document.querySelectorAll('.tipo-card').forEach(card => {
  card.addEventListener('click', function() {
    document.querySelectorAll('.tipo-card').forEach(c => c.classList.remove('activo'));
    this.classList.add('activo');
    tipoSeleccionado = this.dataset.tipo;
  });
});

document.getElementById('btnEnviar').addEventListener('click', function() {
  const nombre = document.getElementById('campoNombre').value;
  const email = document.getElementById('campoEmail').value;
  const telefono = document.getElementById('campoTelefono').value;
  const descripcion = document.getElementById('campoDescripcion').value;

  if (!nombre || !email || !tipoSeleccionado) {
    alert('Por favor completa nombre, correo y tipo de caso.');
    return;
  }

  const params = new URLSearchParams();
  params.append('nombre', nombre);
  params.append('email', email);
  params.append('telefono', telefono);
  params.append('tipoContenido', tipoSeleccionado);
  params.append('descripcion', descripcion);
  params.append('archivos', archivos.join(','));

  fetch("https://localhost:44392/WSNormativas.asmx/WSGuardarReporte", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params
  })
  .then(response => response.json())
  .then(data => {
    if (data.exito) {
      document.getElementById('formulario').classList.add('oculto');
      document.getElementById('confirmacion').classList.add('visible');
      document.getElementById('numeroCaso').textContent = '#' + data.reporteId;
    }
  })
  .catch(error => {
    console.error('Error al guardar el reporte:', error);
    alert('Hubo un problema al enviar el reporte. Intenta de nuevo.');
  });
});

let tipoSeleccionado = null;

document.querySelectorAll('.tipo-card').forEach(card => {
  card.addEventListener('click', function() {
    document.querySelectorAll('.tipo-card').forEach(c => c.classList.remove('activo'));
    this.classList.add('activo');
    tipoSeleccionado = this.dataset.tipo;
  });
});

document.getElementById('btnEnviar').addEventListener('click', function() {
  const nombre = document.getElementById('campoNombre').value;
  const email = document.getElementById('campoEmail').value;
  const telefono = document.getElementById('campoTelefono').value;
  const descripcion = document.getElementById('campoDescripcion').value;

  if (!nombre || !email || !tipoSeleccionado) {
    alert('Por favor completa nombre, correo y tipo de caso.');
    return;
  }

  const params = new URLSearchParams();
  params.append('nombre', nombre);
  params.append('email', email);
  params.append('telefono', telefono);
  params.append('tipoContenido', tipoSeleccionado);
  params.append('descripcion', descripcion);

  fetch("https://localhost:44392/WSNormativas.asmx/WSGuardarReporte", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params
  })
  .then(response => response.json())
  .then(data => {
    if (data.exito) {
      document.getElementById('formulario').classList.add('oculto');
      document.getElementById('confirmacion').classList.add('visible');
      document.getElementById('numeroCaso').textContent = '#' + data.reporteId;
    }
  })
  .catch(error => {
    console.error('Error al guardar el reporte:', error);
    alert('Hubo un problema al enviar el reporte. Intenta de nuevo.');
  });
});