fetch("https://localhost:44392/WSNormativas.asmx/WSListadoUsuarios", {
    method: "GET"
})
.then(response => response.json())
.then(data => {
    console.log("Usuarios recibidos:", data);

    const cuerpoTabla = document.getElementById("cuerpoTabla");

    data.forEach(usuario => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${usuario.UsuarioId}</td>
            <td>${usuario.Nombre}</td>
            <td>${usuario.Email}</td>
            <td>${usuario.Telefono}</td>
            <td>${usuario.FechaRegistro}</td>
        `;
        cuerpoTabla.appendChild(fila);
    });
})
.catch(error => {
    console.error("Error al cargar usuarios:", error);
});

const buscarNombre = document.getElementById("buscarNombre");
buscarNombre.addEventListener("input", function () {
    const texto = buscarNombre.value.toLowerCase();
    const filas = document.querySelectorAll("#tablaUsuarios tbody tr");
    filas.forEach(function (fila) {
        const nombre = fila.cells[1].textContent.toLowerCase();
        fila.style.display = nombre.includes(texto) ? "" : "none";
    });
});