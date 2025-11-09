import { mongoose } from 'mongoose'
import 'dotenv/config';

let isConected = false;

export const conectOdb = async () => {

  if (isConected) {
    console.log('Using existing database connection')
    return
  }


  try {
    mongoose.set('strictQuery', false)
    // await mongoose.connect(process.env.MONGODB_COMPAS)
    await mongoose.connect(process.env.MONGO_ATLS_2, {
      bufferCommands: false, // Disable buffering for serverless
      maxPoolSize: 10, // Limit connection pool
    })
    console.log('connection established');
    isConected = true;
  } catch (error) {
    console.error('DB connection', error.message);
    process.exit(1)
  }
}

function getDB() {
  // return mongoose.connection.db
  // console.log('? ',mongoose.connection.db);
  const dbName = mongoose.connection.name;
  console.log(`Connected to database: ${dbName}`);

}
export default getDB

//^ also : export {getDB}
