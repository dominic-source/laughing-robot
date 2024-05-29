// Create web server
// 1. Create a web server
// 2. Set the base directory
// 3. Set the default document
// 4. Create a route for /comment
// 5. Read the comment.html file
// 6. Send the file to the client
// 7. Start the server

// Load the http module
var http = require('http');
var fs = require('fs');
var path = require('path');

// Create the web server
http.createServer(function (req, res) {
    // Set the base directory
    var base = 'C:/Users/Owner/Documents/Node.js/Chapter 3/Exercise 3.1';
    // Set the default document
    var file = (req.url === '/') ? '/comment.html' : req.url;
    // Get the absolute path
    var filePath = base + file;
    // Read the file
    fs.readFile(filePath, function (err, data) {
        // Send the file to the client
        res.end(data);
    });
}).listen(8080);

// Output a message to the console
console.log('Server running at http://' + require('os').hostname() + ':8080/');