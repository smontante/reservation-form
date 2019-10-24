const mongoose = require('mongoose')

const Reservation = mongoose.model('lodging', {
    firstname: {
        type: String,
    },
    lastname: {
      type: String,
    },
    phone: {
        type: Number,
    },
    email: {
        type: String,
    },
    minium: {
        type: Number,
    },
    guests: {
      type: Number,
   },
   event: {
    type: String,
  }
})

module.exports = Reservation

