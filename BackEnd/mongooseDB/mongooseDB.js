import { mongoose } from 'mongoose'
import 'dotenv/config';


export const conectOdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_COMPAS)
    // await mongoose.connect(process.env.MONGO_ATLS_2)
    console.log('connection established');

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
