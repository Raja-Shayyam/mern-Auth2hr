// import jwt from 'jsonwebtoken'

// export const Protect = async (req, res, next) => {
//   try {
//     let Token;
//     console.log(req.headers)
//     const authHeader = req.headers.authorization;
//     console.log('Auth header:', authHeader);
//     // Output: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    
//     if (authHeader && authHeader.startsWith()) {
//       const token = authHeader.split(' ')[1]; 
//       console.log('Token:', token);
//     }
//     else if(req.headers.cookie && req.headers.cookie['a-token']){
//       Token = req.headers.cookie['a-token']
//       console.log('token: ',Token);
      
//     }

//     try {
//       const Decoded = jwt.verify(Token,process.env.JWT_SECRETqey)
//       req.user = Decoded
//       console.log(('req.user decode :',req.user));
      
//       next()
//     } catch (error) {
//       console.log('this is Error : ',error);
      
//     }

//   } catch (error) {
//     console.log('this is Error ', error);

//   }
// }

import jwt from 'jsonwebtoken';

export const Protect = async (req, res, next) => {
    let Token;

    // Check for token in the Authorization header
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer')) {
        Token = authHeader.split(' ')[1];
    } else if (req.headers.cookie) {
        // Check for token in cookies
        const cookies = req.headers.cookie.split(';').reduce((acc, cookie) => {
            const [key, value] = cookie.trim().split('=');
            acc[key] = value;
            return acc;
        }, {});
        if (cookies['a-token']) {
            Token = cookies['a-token'];
            console.log('cT',Token);
            
        }
    }

    // If no token is found, return a 401 Unauthorized response
    if (!Token) {
        console.error('No token provided.');
        return res.status(401).json({ error: 'Not authorized, no token.' });
    }

    try {
        const Decoded = jwt.verify(Token, process.env.JWT_SECRETqey || 'S2A-#vE1-P0Kw');
        console.log('Decoded ',Decoded);
        
        req.user = Decoded;
        console.log('Decoded user:', req.user );

        
        next();
    } catch (error) {
        // Handle specific JWT errors
        console.error('Token verification failed:', error.message);
        return res.status(401).json({ error: 'Not authorized, token failed.' });
    }
};