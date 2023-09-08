const mongoose = require('mongoose');

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
      type: String,
      required: true,
    },
    amountPaid: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// create a mongoose model based on schema

export const Customer = model('customer', customerSchema);
