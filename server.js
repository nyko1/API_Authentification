const http = require("http");
const app = require("./app");

const port = process.env.PORT || 4001;

app.set('port', port); //define the port
const server = http.createServer(app); //start server

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});