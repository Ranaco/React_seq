const mongo = require("mongoose");

const Schema = mongo.Schema;

const userSchema = new Schema({
  username: {
    required: true,
    type: String,
    trim: true, 
    unique: true,
    minlenght: 3,
  }
},
  {
    timestamps: true,
  }
)

const User = mongo.model('User', userSchema);

module.exports = User;
