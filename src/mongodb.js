const mongoose = require("mongoose");

mongoose.connect("mongodb://atlas-sql-66c4a610005fb87541506695-pxpwb.a.query.mongodb.net/PhotoshootDatabase?ssl=true&authSource=admin").then(()=>{
    console.log("MongoDB connected");
}).catch((e)=>{
    console.log(e);
});

const PhotoboothSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    queueNumber: {
        type: Number,
        required: true
    }
});

const collection = new mongoose.model("Photobooth", PhotoboothSchema);

module.exports = collection;