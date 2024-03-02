const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/healthcard")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log('failed');
    });

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    doctorname: {
        type: String,
        required: true
    },
    hospitalname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    adhar: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    conpassword: {
        type: String,
        required: true
    }
});

const Collection = mongoose.model("Collection", userSchema); // Corrected the schema name here

module.exports = Collection;