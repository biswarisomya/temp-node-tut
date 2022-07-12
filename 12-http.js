const http = require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to home page')
    }
    if(req.url==='/about'){
        res.end('welcome to about section')
    }
    res.end(`
  <h1>Oops!!</h1>
  <p> we can't find page</p>
  <a href="/">back home</a>`)
})
server.listen(5000)