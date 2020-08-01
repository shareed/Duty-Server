require('dotenv').config()
const server = require('./api/server.js');
const shortid = require('shortid')



let assigners = []
let tasks = []

server.get('/', (req, res) => {
    res.json({GREETING: "This is the api for Duty created By Shannon Reed:"})
})

server.get('/duty/assigners', (req, res) => {
    res.json({WELCOME:"YOU HAVE HIT THE ASSIGNERS ENDPOINT", assigners})
})

server.post('/duty/assigners', (req, res) => {
    const assignerInfo = req.body; 
    assignerInfo.id = shortid.generate(); 
    assigners.push(assignerInfo) 
    res.status(201).json(assignerInfo)
})

server.delete('/duty/assigner/:id', (req, res) => {
    const { id } = req.params; 
    const deleted = assigners.find(assigner => assigner.id === id);
    if (deleted) {
        assigners = assigners.filter(assigner => assigner.id !== id);
        res.status(200).json({Deleted:deleted })
    } else {
        res.status(404).json({meassage: "Assigner not found"});
    }
})

const port = process.env.PORT;


server.listen(port, () => console.log(`\n*** Server Running on http://localhost:${port} ***\n`))