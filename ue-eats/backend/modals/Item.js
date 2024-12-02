const mongoose = require ('mongoose')
const {Schema} = mongoose;
const itemSchema = new Schema({
  name:{
     type:String,
     required: true
  },
  role:{
    type:String,
    required :true
  },
    intro:{
        type : String,
        required : true
    },
    Price:{
          type : String,
          required : true,
        
    },
});

// module.exports  =  mongoose.model('items',itemSchema)
const  Item= mongoose.model('item', itemSchema)
// User.createIndexes()
module.exports = Item