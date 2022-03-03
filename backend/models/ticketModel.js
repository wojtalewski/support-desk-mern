const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      requred: true,
      ref: 'User',
    },
    product: {
      type: String,
      requred: [true, 'Please select a product'],
      enum: ['iPhone', 'Macbook Pro', 'iMac', 'iPad'],
    },
    description: {
      type: String,
      requred: [true, 'Please enter a description of the issue'],
    },
    status: {
      type: String,
      enum: ['new', 'open', 'closed'],
      default: 'new',
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Ticket', ticketSchema)
