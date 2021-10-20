const mongoose = require('mongoose');
const { Schema } = mongoose;

const PersonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  favoriteFoods: {
    type: [String],
  },
});

//
module.exports = Person = mongoose.model('person', PersonSchema);
