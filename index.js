require('dotenv').config()
const server = require('./api/server.js');
const shortid = require('shortid')



// let assigners = []
let tasks = []

server.get('/', (req, res) => {
    res.json({GREETING: "This is the api for Duty created By Shannon Reed:"})
})

server.get('/duty/assigner/:id/tasks', (req, res) => {
    res.json({WELCOME:"YOU HAVE HIT THE ASSIGNERS TASK ENDPOINT"})
})

// server.post('/duty/assigner/task', (req, res) => {
//     const assignerTasksInfo = req.body; 
//     assignerTasksInfo.id = shortid.generate(); 
//     tasks.push(assignerTasksInfo) 
//     res.status(201).json(assignerTasksInfo)
// })

// server.delete('/duty/assigner/:id', (req, res) => {
//     const { id } = req.params; 
//     const deleted = assigners.find(assigner => assigner.id === id);
//     if (deleted) {
//         assigners = assigners.filter(assigner => assigner.id !== id);
//         res.status(200).json({Deleted:deleted })
//     } else {
//         res.status(404).json({meassage: "Assigner not found"});
//     }
// })

// server.patch('/duty/assigner/:id', (req, res) => {
//     const {id} = req.params;
//     const changes = req.body;

//     let found = assigners.find(assigner => assigner.id === id);

//     if (found) {
//         Object.assign(found, changes);
//         res.status(200).json(found);

//     } else {
//         res.status(404).json({message: "Assigner not found"})
//     }
// })

const port = process.env.PORT;


server.listen(port, () => console.log(`\n*** Server Running on http://localhost:${port} ***\n`))