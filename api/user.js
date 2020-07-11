save = ()=>(req,res)=>res.send('user > save')

read = ()=>(req,res)=>res.send(`user ${req.params.id} > read`)

module.exports = {save,read}