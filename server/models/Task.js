const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    deadline:{
        type:Date,
        required:true,
    },
    created_At:{
        type:Date,
        required:true,
    }
    
})

const Tasks = mongoose.model("Tasks",TaskSchema);
module.exports = Tasks;