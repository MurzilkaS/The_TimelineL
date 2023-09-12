const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment/moment')



const userSchema = new Schema ({
  firstName:{
    type: String
  },
  lastName:{
    type: String
  },
  email:{
    type: String
  },
  password:{
    type: String
  },
  posts:[
    {
      type: mongoose.Types.ObjectId,
      ref: "post"
    }
  ],
  created_at:{
    type:Number,
    default:Date.now,
    get: function (createAt) {
      return moment(createAt).format('MMM Do YY, h:mm:ss a')
    }
  }
})

module.exports = mongoose.model('user', userSchema)