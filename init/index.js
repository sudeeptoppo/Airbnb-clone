const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const ejsMate = require("ejs-mate");


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
  
main()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "68398f4f6fcdacd4f12962c1"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialize");
};

initDB();