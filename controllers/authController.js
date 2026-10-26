import bcrypt from 'bcryptjs';
import { generateToken } from '../middleware/auth.js';
import AdminUser from '../models/AdminUser.js';
import { getDbStatus } from '../config/db.js';

// Default admin credentials
const DEFAULT_ADMIN = {
  id: 'admin-pheunix-1',
  username: 'admin',
  email: 'admin@pheunix.in',
  role: 'superadmin',
  // bcrypt hash for 'pheunix123'
  passwordHash: '$2a$10$vYv6eKzD.Q57x5O0HauNde4L35Lz12bVqR3dO2h6K81g0vU6N0zUa',
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both username/email and password.',
      });
    }

    let user = null;

    if (getDbStatus()) {
      user = await AdminUser.findOne({
        $or: [
          { username: username.trim() },
          { email: username.trim().toLowerCase() },
        ],
      });
    }

    let isValid = false;

    if (user) {
      isValid = await bcrypt.compare(password, user.password);
    } else {
      // Check default fallback admin
      if (
        (username.trim() === DEFAULT_ADMIN.username ||
          username.trim().toLowerCase() === DEFAULT_ADMIN.email) &&
        (password === 'pheunix123' || password === 'admin123')
      ) {
        isValid = true;
        user = DEFAULT_ADMIN;
      }
    }

    if (!isValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid administrative credentials.',
      });
    }

    const token = generateToken({
      id: user._id || user.id,
      username: user.username,
      role: user.role || 'admin',
    });

    return res.status(200).json({
      success: true,
      message: 'Admin authentication successful.',
      token,
      user: {
        id: user._id || user.id,
        username: user.username,
        email: user.email,
        role: user.role || 'admin',
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ success: false, message: 'Server error during authentication.' });
  }
};

export const getMe = async (req, res) => {
  return res.status(200).json({
    success: true,
    user: req.user,
  });
};
