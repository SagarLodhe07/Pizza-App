const mongoose = require("mongoose");
const serverConfig = require("./serverConfig");
// const { DB_URL } = require("./serverConfig");

async function connectDb() {
  try {
    await mongoose.connect(serverConfig.DB_URL);
    console.log(`Connected To Database `);
  } catch (error) {
    console.log(`Not able to connect the Database`);
  }
}

module.exports = connectDb;
// password = c3uQVjWMVWAr2FJL
// id = sagar1990ku

// connection string =mongodb+srv://sagar1990ku:c3uQVjWMVWAr2FJL@cluster0.ocij2hn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://sagar1990ku:c3uQVjWMVWAr2FJL@cluster0.ocij2hn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0