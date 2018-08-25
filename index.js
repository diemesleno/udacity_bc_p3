/*
Importing and using the classes Block, Blockchain and creation of the object blockchain
*/
const Block = require('./block')
const Blockchain = require('./blockchain')
const blockchain = new Blockchain()


/*
Using  express.js
*/
const express = require('express')
const app = express()


/*
Using a parser to handle the body from POST method
*/
const bodyParser = require('body-parser')

/*
Server usage
*/
app.listen(8000, () => console.log('API running on port 8000'))
app.use(bodyParser.json())

/*
Endpoint /
*/
app.get('/', (req, res) => res.status(404).json([
  {
    "endpoint": "http://127.0.0.1:8000",
    "method": "GET",
    "message": "The information about all endpoints"
  },
  {
    "endpoint": "http://127.0.0.1/block/{height}",
    "method": "GET",
    "message": "Get the block by height"
  },
  {
    "endpoint": "http://127.0.0.1/block",
    "method": "POST",
    "message": "Create a new block"
  },
  {
    "endpoint": "http://127.0.0.1/chain",
    "method": "GET",
    "message": "Get all the blocks stored in the blockchain"
  }
]))

/*
Endpoint GET /block/{height}
*/
app.get('/block/:height', async (req, res) => {
  try {
    const response = await blockchain.getBlock(req.params.height)
    res.send(response)
  } catch (error) {
    res.status(404).json({
      "status": 404,
      "message": "The block with the height " + req.params.height + " cannot be found" 
    })
  }
})

/*
Endpoint POST /block
*/
app.post('/block', async (req, res) => {
  if (req.body.body === '' || req.body.body === undefined) {
    res.status(400).json({
      "status": 400,
      message: "You must inform the body parameter to create a new block"
    })
  }

  await blockchain.addBlock(new Block(req.body.body))
  //Get the last block height
  const height = await blockchain.getBlockHeight()
  //Get the last block by height
  const response = await blockchain.getBlock(height)
  //Return the new block as response
  res.send(response)
})


/*
Endpoint GET /chain
*/
app.get('/chain', async (req, res) => {
  try {
    const chain = await blockchain.getChain()
    res.json({
      success: true,
      data: chain
    });
  } catch (e) {
    res.statusCode = 500;
    res.json({
      success: false,
      message: "Sorry, but I cannot proccess the information"
    });
  }
})