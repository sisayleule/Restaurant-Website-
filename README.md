# Savoria Restaurant Website

A modern, fully-featured restaurant website with authentication, booking system, and database integration.

## Features

✅ **User Authentication**
- User registration with password hashing
- Login system with session management
- Secure password storage using bcrypt

✅ **Database Integration**
- SQLite database for local storage
- Users table
- Bookings table
- Contact messages table

✅ **API Endpoints**
- POST /api/register - Register new user
- POST /api/login - Login user
- POST /api/bookings - Create table booking
- GET /api/bookings - Get all bookings
- POST /api/contact - Submit contact message
- GET /api/contact - Get all messages
- GET /api/users - Get all users

✅ **Modern UI/UX**
- Responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Interactive modals for login/register
- Beautiful gradient backgrounds
- Image gallery with lightbox
- Google Maps integration

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Setup Steps

1. **Install Dependencies**
```bash
npm install
```

2. **Start the Server**
```bash
npm start
```

Or for development with auto-restart:
```bash
npm run dev
```

3. **Access the Website**
Open your browser and go to:
```
http://localhost:3000
```

## Project Structure

```
restaurant-website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # Frontend JavaScript
├── server.js           # Backend server with API
├── package.json        # Node.js dependencies
├── restaurant.db       # SQLite database (created automatically)
└── README.md          # This file
```

## Database Schema

### Users Table
- id (INTEGER, PRIMARY KEY)
- name (TEXT)
- email (TEXT, UNIQUE)
- password (TEXT, hashed)
- created_at (DATETIME)

### Bookings Table
- id (INTEGER, PRIMARY KEY)
- name (TEXT)
- email (TEXT)
- phone (TEXT)
- date (TEXT)
- time (TEXT)
- guests (INTEGER)
- message (TEXT)
- status (TEXT, default: 'pending')
- created_at (DATETIME)

### Contact Messages Table
- id (INTEGER, PRIMARY KEY)
- name (TEXT)
- email (TEXT)
- message (TEXT)
- created_at (DATETIME)

## API Usage Examples

### Register User
```javascript
fetch('http://localhost:3000/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123'
    })
});
```

### Login User
```javascript
fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        email: 'john@example.com',
        password: 'password123'
    })
});
```

### Submit Contact Message
```javascript
fetch('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Great restaurant!'
    })
});
```

## Technologies Used

### Frontend
- HTML5
- CSS3 (with modern gradients and animations)
- Vanilla JavaScript (ES6+)
- Google Maps API

### Backend
- Node.js
- Express.js
- SQLite3
- bcryptjs (password hashing)
- CORS
- Body-parser

## Features in Detail

### Authentication System
- Secure password hashing with bcrypt
- Email validation
- Duplicate email prevention
- Session management with localStorage
- Logout functionality

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interface
- Hamburger menu for mobile

### Interactive Elements
- Smooth scroll navigation
- Active section highlighting
- Modal popups for login/register
- Image gallery with lightbox
- Animated hero section
- Scroll reveal animations

## Development

To modify the website:

1. **Frontend Changes**: Edit `index.html`, `styles.css`, or `script.js`
2. **Backend Changes**: Edit `server.js`
3. **Database Changes**: Modify the schema in `server.js` initialization

## Security Notes

⚠️ **Important**: This is a development setup. For production:
- Use environment variables for sensitive data
- Implement JWT tokens for authentication
- Add rate limiting
- Use HTTPS
- Implement CSRF protection
- Add input sanitization
- Use a production database (PostgreSQL, MySQL)

## Troubleshooting

**Server won't start:**
- Make sure port 3000 is not in use
- Check if Node.js is installed: `node --version`
- Reinstall dependencies: `npm install`

**Database errors:**
- Delete `restaurant.db` and restart server
- Check file permissions

**API not working:**
- Ensure server is running
- Check browser console for errors
- Verify CORS is enabled

## License

MIT License - Feel free to use this project for learning or commercial purposes.

## Support

For issues or questions, please check the code comments or create an issue in the repository.

---

**Enjoy your restaurant website! 🍽️**
