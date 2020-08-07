require('dotenv').config()
const server = require('./api/server.js');


server.get('/', (req, res) => {
    res.json({GREETING: "This is the api for Duty created By Shannon Reed:"})
})

server.get('/duty/assigner/:id/tasks', (req, res) => {
    res.json({WELCOME:"YOU HAVE HIT THE ASSIGNERS TASK ENDPOINT"})
})


const port = process.env.PORT;


server.listen(port, () => console.log(`\n*** Server Running on http://localhost:${port} ***\n`))