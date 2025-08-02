const dotenv = require("dotenv");
dotenv.config();

const http = require("http");
const app = require("./src/app");
const connectDb = require("./src/utils/db_connection");

const server = http.createServer(app);
const PORT = 8888 || process.env.PORT;

connectDb();

server.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});
