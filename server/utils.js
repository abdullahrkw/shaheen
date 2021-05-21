module.exports = async function testMongoDBConnection(client) {
    try {
      // Connect the client to the server
      await client.connect();
      // Establish and verify connection
      await client.db("admin").command({ ping: 1 });
      console.log("Connected successfully to mongodb server");
    } finally {
      // close client
      await client.close();
    }
  }
