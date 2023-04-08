// Set up mongoose connection
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const mongoDB =
  "mongodb+srv://ElBarto:xq28SN2LZyMNy66J@cluster0.xnqghyd.mongodb.net/?retryWrites=true&w=majority";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
