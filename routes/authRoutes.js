const express = require('express');
const passport = require('passport');
const router = express.Router();

/**
 * @swagger
 * /auth/google:
 *   get:
 *     summary: Start Google OAuth authentication
 *     tags: [Auth]
 */
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

/**
 * @swagger
 * /auth/google/callback:
 *   get:
 *     summary: Google OAuth callback URL
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Successfully authenticated
 *       401:
 *         description: Authentication failed
 */
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/'); // Redirect to your preferred route after login
  }
);

module.exports = router;
