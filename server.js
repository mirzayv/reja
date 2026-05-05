const http = require("http");
const mongodb = require("mongodb"); // OBJECT

let db;
const connectionString =
  "mongodb+srv://komron:OYWZcKc03ZEljF02@cluster0.jhplugm.mongodb.net/Reja?retryWrites=true&w=majority";

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
