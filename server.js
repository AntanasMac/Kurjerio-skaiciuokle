const HTTP = require('http')
const FS = require('fs')
const PATH = require('path');
const PORT = 3000

const SERVER = HTTP.createServer(function (req, res) {
    const FILE_PATH = PATH.join(__dirname, req.url);
  
    // Handling requests for index.html
    if (req.url === '/' || req.url === '/index.html') {
      FS.readFile('index.html', function (error, data) {
        if (error) {
          res.writeHead(404);
          res.write('Error: File Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(data);
        }
        res.end();
      });
    } else {
      // Handling requests for other static files (e.g., styles.css, app.js)
      FS.readFile(FILE_PATH, function (error, data) {
        if (error) {
          res.writeHead(404);
          res.write('Error: File Not Found');
        } else {
          // Set the appropriate Content-Type based on the file extension
          const ext = PATH.extname(FILE_PATH);
          let contentType = 'text/plain';
          switch (ext) {
            case '.css':
              contentType = 'text/css';
              break;
            case '.js':
              contentType = 'text/javascript';
              break;
            // Add more cases for other file types as needed
          }
  
          res.writeHead(200, { 'Content-Type': contentType });
          res.write(data);
        }
        res.end();
      });
    }
  });
  

SERVER.listen(PORT, function(error) {
    if (error) {
        console.log('not working, error')
    } else {
        console.log (`server is listening on port ` + PORT)
    }
});


