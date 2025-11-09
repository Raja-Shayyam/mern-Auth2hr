import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import getDB, { conectOdb } from './mongooseDB/mongooseDB.js' //^ {getDB , conn..}
import AuthRout from './Routes/auth.js'
import prodRouter from './Routes/Products.js'

const myPort = process.env.PORT

const App = express()

App.use(cors({
  origin: ['http://localhost:5173', 'https://mern-auth2hr.vercel.app'], // Your local frontend URL
  // origin: 'http://localhost:5173', // Your local frontend URL
  // origin: 'https://mern-auth2hr-wvzs-2gv738ksn-rehman0rehan-gmailcoms-projects.vercel.app', // Your frontend URL
  credentials: true // Allow cookies to be sent
}))

App.use(express.json())



console.log('middle ware done');

App.get("/", (req, res) => {
  res.send(`<h1>✅ SUCCESS!</h1>
    <p>If you can see this, your network setup works!</p>
    <p>Server IP: </p>
    <p>Your IP: </p>`)
})


// Add this test route
App.get('/test-cookie', (req, res) => {
  res.cookie('test-cookie', 'test-value', {
    httpOnly: false, // Make it visible in DevTools for testing
    secure: false
  })
  res.json({ message: 'Test cookie set' })
})


//* middleWare  
App.use(async (req, res, next) => {
  try {
    await conectOdb()
    next()
  } catch (error) {
    console.error('DB connection error:', error)
    res.status(500).json({ error: 'Database connection failed' })
  }
})

// App.use(async (req, res, next) => {
//   const isConected = false;
//   if (!isConected){
    // await conectOdb()
    // console.log('connected to db', getDB());
//   }
//   next();
// })


//* Routes  
App.use('/registerAuth', AuthRout)
App.use('/myproducts', prodRouter)


App.listen(myPort, () => {
  console.log('server runing on ', myPort);
})
//& never in vercel


// export default App ;
