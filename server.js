const http = require("http");
const app = require("./app");

const { API_PORT } = process.env;

const port = process.env.PORT || API_PORT;

app.set('port', port); //define the port
const server = http.createServer(app); //start server

// server listening 
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});