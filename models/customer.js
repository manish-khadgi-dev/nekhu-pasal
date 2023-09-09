import mongoose from 'mongoose';

// Define a schema for customer data
const customerSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true, // trim white spaces
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    amountToPay: {
      type: Number, // Use Number for storing numeric values
      required: true,
    },
    amountPaid: {
      type: Number, // Use Number for storing numeric values
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create a mongoose model based on schema
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer; // Use module.exports to export the model
