import { Authuser } from "../model/Authmodel.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'




export const registerNewUser = async (req, res) => {
  try {
    console.log('> ', req.body);
    const { username, email, password } = req.body
    if (!username || !email || !password)
      return res.status(303).json({ message: "all fiel req" })
    else console.log('all present');

    const isExist = await Authuser.findOne({ email })
    if (isExist) {
      return res.status(302).json({ message: `it exsists ${isExist.email === email} ` })
    }
    if (password.length < 8) {
      console.log(password.length);

      return res.status(400).json({ message: 'pasword length is ' + password.length })
    }
    const encpt_pass = bcryptjs.hashSync(password, 13);
    const newUser = new Authuser({ username, email, password: encpt_pass })

    await newUser.save()
    res.status(200).json({
      sucess: true,
      message: 'done user registration',
      user: newUser
    })
    // const Authuser = new Authuser(req.body)
    // await Authuser.save()
    // res.status(201).json(Authuser)
  } catch (error) {
    console.error('this is error  ', error);

  }
}



export const Logined = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(417).json({ sucess: false, message: `not email ${email == email} or password ${password == password}` })
    }
    const validUser = await Authuser.findOne({ email })
    if (!validUser) {
      return res.status(401).json({ sucess: false, message: 'not found this email', email })
    }
    const pswd = await bcryptjs.compare(password, validUser.password)
    if (!pswd) {
      return res.status(403).json({ sucess: false, message: "Invalid User you are ..." })
    }

    const generateToken = ({ id, email, username }) => {
      return jwt.sign({ id, email, username }, 'S2A-#vE1-P0Kw', { expiresIn: '20m' })
    }
    //! process.env.JWT_SECRETqeyS2A-#vE1-P0Kw

    const g = generateToken(validUser)
    console.log(g);
    res.cookie('hi', 'kookoo-test')
    res.cookie('a-token', g, {
      httpOnly: true,
      secure: false, // false for localhost
    })

    return res.status(202).json({ sucess: true, message: "user Logined with good credentials ", user: validUser, token: g })
  }
  catch (error) {
    console.error('the error in logined : ', error.message);

  }
}


export const LogOut = async (req,res) => {
  try {
    console.log(res);
    
    // Clear the authentication cookie
    res.clearCookie('a-token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/'
    });

    return res.status(200).json({
      success: true,
      message: 'Logged out successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Logout failed',
      error: error.message
    });
  }
}