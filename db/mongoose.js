// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB =
  "mongodb+srv://ElBarto:xq28SN2LZyMNy66J@cluster0.xnqghyd.mongodb.net/?retryWrites=true&w=majority";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

const Note = mongoose.model("Note", {
  title: String,
  body: String,
});

const newNote = new Note({ title: "test1", body: "test1 body" });

newNote.save().then(() => {
    console.log("Note saved!")
});
