const http = require('http');

const server = http.createServer((req, res) =>{
        if(req.url === '/'){
                res.end('Welcome to our home page')

        }      
        //(parameter) http.IncomingMessage

        else if(req.url === '/about'){
                res.end('wassup')
        }else{
                res.end(
                        '<h1> OH SHIT I AINT GOT NO PAGE </h1>'
                        )
        }

})

server.listen(5000)