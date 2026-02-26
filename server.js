const express = require('express')
const multer = require('multer')

const server = express()
const upload = multer({dest: 'img/'}) // pasta de destino em que o arquivo será "colocado/jogado"

server.use('/img', express.static('img'))
server.use(express.static('public')) //static server para 'expor' minha pasta

const porta = 3000

server.listen(porta, ()=>{
    console.log(`Servidor rodando em: http://localhost:${porta}`)
})
