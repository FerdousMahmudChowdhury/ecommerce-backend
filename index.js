const express = require('express')
const server = express()
const mongoose = require('mongoose')
const productsRouter = require('./routes/Products')
const categoriesRouter = require('./routes/Categories')
const brandsRouter = require('./routes/Brands')
const cors = require('cors')

//middlewares
server.use(cors({
    exposedHeaders:['X-Total-Count']
}))
server.use(express.json()) // to parse req.body
server.use('/products',productsRouter.router)
server.use('/categories', categoriesRouter.router)
server.use('/brands', brandsRouter.router)

const main = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    console.log("database connected")
}
main().catch(err => console.log(err))

server.get('/', (req, res) => {
    res.send({ status: "success" })
})



server.listen(8080, () => {
    console.log("server started")
})