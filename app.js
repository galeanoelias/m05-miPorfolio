const express = require('express')
const main = require('./routes/main')

const app = express()

app.use(express.static("public"));

app.use('/', main);

app.listen(3000, () => {
    console.log('Servidor Levantado en el puerto 3000')
})
