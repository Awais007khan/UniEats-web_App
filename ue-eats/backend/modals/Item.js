// const mongoose = require ('mongoose')
// const {Schema} = mongoose;
// const itemSchema = new Schema({
//   name:{
//      type:String,
//      required: true
//   },
//   role:{
//     type:String,
//     required :true
//   },
//     intro:{
//         type : String,
//         required : true
//     },
//     Price:{
//           type : String,
//           required : true,
        
//     },
// });

// // module.exports  =  mongoose.model('items',itemSchema)
// const  Item= mongoose.model('item', itemSchema)
// // User.createIndexes()
// module.exports = Item
// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const itemSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//       minlength: 3,
//       maxlength: 50,
//     },
//     role: {
//       type: String,
//       required: true,
//       trim: true,
//       minlength: 3,
//       maxlength: 50,
//     },
//     intro: {
//       type: String,
//       required: true,
//       trim: true,
//       minlength: 10, // Optional: Ensure a meaningful introduction
//     },
//     Price: {
//       type: Number,
//       required: true,
//       min: 0, // Ensures price is non-negative
//     },
//   },
//   { timestamps: true } // Automatically adds 'createdAt' and 'updatedAt'
// );

// // Create an index for better query performance (optional)
// itemSchema.index({ name: 1 });

// const Item = mongoose.model('Item', itemSchema);
// module.exports = Item;
const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    role: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    intro: {
      type: String,
      required: true,
      trim: true,
      minlength: 10, // Optional: Ensure a meaningful introduction
    },
    Price: {
      type: Number,
      required: true,
      min: 0, // Ensures price is non-negative
    },
    image: {
      type: String,
      required: true, // The filename of the uploaded image
      trim: true,
    },
  },
  { timestamps: true } // Automatically adds 'createdAt' and 'updatedAt'
);

// Create an index for better query performance (optional)
itemSchema.index({ name: 1 });

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
