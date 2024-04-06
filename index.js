import { createServer } from 'node:http';
import data from './src/data/data.js';
import File from './src/helpers/read-write-file.js';

File.writeFile(data.index.file, data.index.content);
File.writeFile(data.about.file, data.about.content);
File.writeFile(data['contact-me'].file, data['contact-me'].content);
File.writeFile(data.error.file, data.error.content);

const server = createServer((req, res) => {
    const queryUrl = new URL(req.url, 'https://localhost:8080');
    const path = queryUrl.pathname === '/' ? './src/html/index.html' : `./src/html/${queryUrl.pathname}.html`;

    res.writeHead(200, {'Content-Type': 'text/html'});
    File.readFile(path, res, req.url);
})

server.listen(8080, 'localhost', () => {
    console.log('listening')
  });

