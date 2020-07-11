let reqCounter = 1
olaMundo = () => (req,res,next)=>{
    console.log(`${reqCounter++}º requisição enviada`)
    next()
}

module.exports = olaMundo