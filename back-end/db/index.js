const mongoose = require('mongoose');
require('dotenv').config()

const uri = `mongodb+srv://hungpv:${process.env.SECRET_KEY}@cluster0.y2nvp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
async function connect () {
    try {
        await mongoose.connect(uri);
        console.log('Connect successfully');       
    } catch (error) {
        console.log('Connect fuilure !', error);
    }
}

module.exports = { connect };
