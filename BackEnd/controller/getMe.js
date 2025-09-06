import { Authuser } from "../model/Authmodel.js";

export const getMe = async (req, res) => {
  try {
    const user = await Authuser.findById(req.user.id);
    res.json({
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Get me error:', error);
    res.status(500).json({ message: 'Server error' });
  }
}; 