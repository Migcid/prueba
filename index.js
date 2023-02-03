const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Ejercicio 2')
})

//RETORNA LA LISTA DE TODOS LOS CONDUCTORES
app.get('/conductores', function (req, res) {
    res.send('Ruta Conductores')
  })

app.listen(3000, () => console.log("Servidor http://localhost:3000"))
