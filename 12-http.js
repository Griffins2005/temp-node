const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Home Page')
    }
    if(req.url === '/about'){
        for(let i = 0; i< 1000; i++) {
            for(let j = 0; j < 1000; i++) {
                console.log(`${i} ${j}`)
            }
        }
    res.end('About Page')
    }
    res.end('Error Page')
})

server.listen(5000, () => {
    console.log('Server Listening  on port 5000...')
})

// const http = require('http')

// const server = http.createServer((req,res) => {
//     if(req.url === '/') {
//     res.end('Welcome to our home page')
//     }
//     if (req.url === '/about') {
//     res.end('Here is our short history')
//     }
//     res.end(`
//     <h1>Oops!<h1>
//     <p>We can't seem to find the page you are looking for<p>
//     <a href="/">back home </a>
//     `)
// })

// server.listen(5000)