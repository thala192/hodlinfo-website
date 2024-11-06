const { connect, set } = require("mongoose");

const connectDb = async () => {
  try {
    set("strictQuery", true);
    const uri =
      "mongodb+srv://munjamn:chaitanya@chaitanya.al8mj.mongodb.net/?retryWrites=true&w=majority&appName=chaitanya"; // Replace with actual MongoDB URI
    const {
      connection: { host },
    } = await connect(uri);
    console.log("mongoose connected with " + host);
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

module.exports = connectDb;

// const {connect, set} = require("mongoose");

// const connectDb = async() => {
//     try {
//         set("strictQuery", true);
//         const {connection: {host}} = await connect(process.env.MONGO_URL);
//         console.log("mongoose connected with "+host);

//     } catch (error) {
//         console.log(error);
//     }
// }

// module.exports = connectDb;
