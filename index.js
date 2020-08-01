require('dotenv').config()
const server = require('./api/server.js');


server.get('/', (req, res) => {
    // const message = process.env.EVNM;
    // res.send(message)
    res.json({GREETING: "This is the api for Duty created By Shannon Reed:"})
})

server.get('/duty/users', (req, res) => {
    res.json({WELCOME:"YOU HAVE HIT THE USERS ENDPOINT"})
})

const port = process.env.PORT;


server.listen(port, () => console.log(`\n*** Server Running on http://localhost:${port} ***\n`))