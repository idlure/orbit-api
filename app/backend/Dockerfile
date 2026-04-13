FROM node:18-alpine

WORKDIR /app

COPY . .

CMD ["node", "-e", "const http=require('http');const server=http.createServer((req,res)=>{if(req.url==='/health'){res.end('ok')}else if(req.url==='/version'){res.end('orbit v1')}else{res.statusCode=404;res.end('not found')}});server.listen(3000);"]
