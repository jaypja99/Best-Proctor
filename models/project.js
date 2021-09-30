const mongoose = require('mongoose')

const project = new mongoose.Schema({
    schoolName:{
        type:String,
        require:true
    },
    
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model('project',project)