const http = require("http");
const mongodb = require("mongodb"); // OBJECT

// MongoDB connection string comes from the environment, never from the code
// e.g. MONGO_URL="mongodb+srv://<user>:<password>@<cluster>/Reja" npm start
const connectionString = process.env.MONGO_URL;
if (!connectionString) {
  console.error("MONGO_URL is not set. See .env.example");
  process.exit(1);
}

// TCP (doimiy boglanish) vs HTTP (1marttalik request)
mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  // callback boglanish
  (err, client) => {
    if (err) console.log("ERRORon connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client; //OBJECT

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server running successfully on port: ${PORT}, http://localhost:${PORT}`,
        );
      });
    }
  },
);
