const mongoose = require("mongoose");

const connectDatabase = () => {
  // Use mongoose to connect
  mongoose
    .connect("mongodb+srv://itspritishdutta:teU9SrbVl9tRDhzc@cluster0.ujxrtdj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" , {
      dbName: "StackOverflow-clone",
    })
    .then((data) => {
      // console.log(`Connected to MongoDB server: ${data.connection.host}`);
      console.log(`Connected to MongoDB server: ${data.connection.host}`);
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

// module.exports = connectDatabase;
// const mongoose = require('mongoose');
// require('dotenv').config(); // Load environment variables from .env file

// const connectDatabase = async () => {
//   try {
//     await mongoose.connect(process.env.CONNECTION_URL, dbName:"StackOverflow-clone", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       //useCreateIndex: true,
//       //useFindAndModify: false
//     });
//     console.log('MongoDB Connected');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//     process.exit(1); // Exit process with failure
//   }
// };

// module.exports = connectDatabase;

// const mongoose = require('mongoose');
// require('dotenv').config(); // Load environment variables from .env file

// const connectDatabase = async () => {
//   try {
//     await mongoose.connect(process.env.CONNECTION_URL || "mongodb+srv://itspritishdutta:teU9SrbVl9tRDhzc@cluster0.ujxrtdj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
//       dbName: "StackOverflow-clone",
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       // Additional options can be added here
//     });
//     console.log('MongoDB Connected');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//     process.exit(1); // Exit process with failure
//   }
// };

module.exports = connectDatabase;
