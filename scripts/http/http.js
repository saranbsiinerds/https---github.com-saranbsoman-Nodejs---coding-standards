const http = require('http'); //Use single quotes //Use semicolons

const fs = require('fs'); //Use single quotes //Use semicolons

const path = require('path'); //Use single quotes //Use semicolons

const baseName = path.dirname(require.main.filename);

const base = baseName + '\\index.html';

const welcome = baseName + '\\template' + '\\welcome.html';


const server = http.createServer((req,res) => {
    if(req.url === '/' ) {//4 spaces for indentation
        fs.readFile(base,(err, data) => {//4 spaces for indentation
            if(err){throw err;}//4 spaces for indentation
            res.write(data);
            res.end();
        });
    }
    if(req.url === '/welcome') {
        fs.readFile(welcome,(err, data) => {
            if(err){throw err;}//4 spaces for indentation
            res.write(data);
            res.end();
        })
    }

});

server.listen(3000,() => {
    console.log('Server is up and running...');
})