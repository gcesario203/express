module.exports = (app)=>{
    save = ()=>(req,res)=>res.send('produto > save')
    read = ()=>(req,res)=>res.send(`produto ${req.params.id} > read`)

    app.get('/produtos/:id',read())
    app.post('/produtos',save())

    return {save,read}
}