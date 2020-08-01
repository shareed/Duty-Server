require('dotenv').config()
const server = require('./api/server.js');
const shortid = require('shortid')



let assigners = []
let tasks = []

server.get('/', (req, res) => {
    // const message = process.env.EVNM;
    // res.send(message)
    res.json({GREETING: "This is the api for Duty created By Shannon Reed:"})
})

server.get('/duty/assigners', (req, res) => {
    res.json({WELCOME:"YOU HAVE HIT THE ASSIGNERS ENDPOINT", assigners})
})

server.post('/duty/assigners', (req, res) => {
    const assignerInfo = req.body; //Gets the info from the user
    assignerInfo.id = shortid.generate(); //setting the hubs id with the shortid module using its generate function
    assigners.push(assignerInfo) //pushing the new hub info into the hubs array
    res.status(201).json(assignerInfo)
})

const port = process.env.PORT;


server.listen(port, () => console.log(`\n*** Server Running on http://localhost:${port} ***\n`))