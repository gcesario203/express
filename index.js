const express = require('express')
const app =express()
const port = 3000
const teste = require('./testeDosCria')


app.use(teste())

app.get('/clientes/relatorio',(req,res)=>{
    res.send('Cliente relatorio: completo '+req.query.completo+' ano: '+req.query.ano)
})

app.get('/clientes/:id',(req,res,next)=>{
    res.send(`Cliente ${req.params.id} selecionado`)
})

app.post('/body',(req,res)=>{
    let corpo = ''
    req.on('data',function(parte){
        corpo+=parte
    })

    req.on('end',function(){
        console.log(corpo)
        res.json(JSON.parse(corpo))
    })
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