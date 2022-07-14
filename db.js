const {connect, default: mongoose} = require('mongoose');

const connected = `mongodb+srv://Camilo:1234567890ñ@cluster0.wi7wf.mongodb.net/?retryWrites=true&w=majority`
const connectDB = async () => {
    try{
        await connect(connected,{useNewUrlParser: true, useUnifiedTopology: true})
        console.log("Data base connected")
    }catch(error){
        console.error(error);
    }
};

module.exports = {connectDB} 