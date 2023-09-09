import mongoose from 'mongoose';

const connectToDB = async () => {
  const uri = process.env.MONGO_URI;
  try {
    await mongoose.connect(uri);

    console.log('Connected to db');
  } catch (error) {
    console.log('unable to connect to db');
  }
};

export default connectToDB;
