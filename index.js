const express = require('express')
const app =express()
const port = 3000

app.use((req,res,next)=>{
    console.log('Em qualquer rota eu estarei la, independente da requisição')
    next()
})

app.use('/teste',(req,res,next)=>{
    console.log('Eu começo na rota /teste')
    next()
})

app.get('/teste',(req,res,next)=>{
    console.log('Lendo json')
    res.json({
        data:[
            {id:1,nome:'One Piece',nota:9.78},
            {id:2,nome:'JoJo',nota:'Depende qual parte'},
            {id:3,nome:'Kengan Ashura',nota:7}
        ],
        count:20,
        skip:0,
        limit:1,
        status:200
    })

    // res.send('Ola mundo???')
    // res.json([
    //     {nome:'Gabriel Cesario',hobby:'Assistir anime e estudarkkkkkkkkkk'},
    //     {nome:'Maria Julia',hobby:'Se exercitar e ouvir musica'}
    // ])
    next()
})

app.post('/teste',(req,res,next)=>{
    console.log('Estou fazendo um Post')
    next()
})

app.use('/teste',(res,req)=>{
    console.log('leitura efetuada com sucesso')
})

app.listen (port,()=>{
    console.log("Rodando na porta "+port)
})