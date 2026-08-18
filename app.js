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