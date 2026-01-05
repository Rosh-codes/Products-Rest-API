# Products CRUD Application

A full-stack web application for managing products with Create, Read, Update, and Delete operations. Built with **Express.js** backend and **React + Vite** frontend.

🔗 **Live Demo:** [https://proucts-rest-api.onrender.com](https://proucts-rest-api.onrender.com)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)

## ✨ Features

- ✅ **Create Products** - Add new products with name, price, and image URL
- ✅ **Read Products** - View all products in a responsive grid layout
- ✅ **Update Products** - Edit existing product details
- ✅ **Delete Products** - Remove products from the database
- ✅ **Responsive UI** - Built with Chakra UI for beautiful, accessible components
- ✅ **State Management** - Zustand for efficient client-side state handling
- ✅ **Dark Mode Support** - Toggle between light and dark themes
- ✅ **Real-time Updates** - Immediate feedback with toast notifications

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Chakra UI** - Component library
- **Zustand** - State management
- **React Router** - Navigation (if implemented)

## 📁 Project Structure

```
Products CRUD app/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   └── product.controller.js  # Route handlers
│   ├── models/
│   │   └── product.js         # Product schema
│   ├── routes/
│   │   └── products.js        # Product routes
│   ├── server.js              # Express app setup
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx     # Navigation bar
│   │   │   └── ProductCard.jsx # Product card component
│   │   ├── pages/
│   │   │   ├── CreatePage.jsx # Add product page
│   │   │   └── HomePage.jsx   # Products listing page
│   │   ├── store/
│   │   │   └── product.js     # Zustand store
│   │   ├── App.jsx            # Main app component
│   │   └── main.jsx           # Entry point
│   ├── vite.config.js         # Vite configuration
│   ├── package.json
│   └── index.html
├── .env                       # Environment variables
├── .gitignore
└── package.json               # Root package.json
```

## 📦 Prerequisites

Make sure you have installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (local or cloud) - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **npm** or **yarn** - Comes with Node.js

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Rosh-codes/Proucts-Rest-API.git
cd "Products CRUD app"
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

## ⚙️ Configuration

### 1. Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
```

**Get your MongoDB URI:**
- For MongoDB Atlas (Cloud): [Create a free account](https://www.mongodb.com/cloud/atlas) and get your connection string
- For Local MongoDB: Use `mongodb://localhost:27017/products`

⚠️ **Important:** Never commit `.env` file to git. Add it to `.gitignore`

## 🏃 Running the Application

### Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

## 📡 API Endpoints

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| POST | `/api/products` | Create new product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |

### Request/Response Examples

**Create Product (POST)**
```json
{
  "name": "Laptop",
  "price": 999,
  "image": "https://example.com/laptop.jpg"
}
```

**Response**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Laptop",
    "price": 999,
    "image": "https://example.com/laptop.jpg",
    "createdAt": "2025-01-05T10:30:00.000Z",
    "updatedAt": "2025-01-05T10:30:00.000Z"
  }
}
```

## 🌍 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://...` |
| `PORT` | Backend server port | `5000` |
| `NODE_ENV` | Environment mode | `development` or `production` |

## 💡 Usage

### Adding a Product
1. Navigate to **Create Product** page
2. Fill in product details (Name, Price, Image URL)
3. Click **Add Product**
4. Success notification appears
5. Product added to database and displayed on home page

### Viewing Products
1. Go to **Home** page
2. See all products in a grid layout
3. Each product shows name, price, and image

### Updating a Product
1. Click edit icon on product card
2. Modify desired fields
3. Save changes

### Deleting a Product
1. Click delete icon on product card
2. Product removed from database and UI

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5000 (macOS/Linux)
lsof -ti:5000 | xargs kill -9

# Or use different port
PORT=5001 npm start
```

### MongoDB Connection Error
- Verify MongoDB URI in `.env`
- Check MongoDB service is running
- Ensure IP whitelist includes your machine (MongoDB Atlas)
- Test connection: `mongosh "your_connection_string"`

### CORS Error
### CORS Error
- Verify backend is running and accessible
- Check browser console for network errors
### Price Validation Error
- Price must be sent as a **number**, not string
- Frontend converts: `Number(newProduct.price)`

## 📝 Available Scripts

### Backend
```bash
npm start       # Run server
npm run dev     # Run with nodemon (auto-reload)
### CORS Error
- Verify backend is running and accessible
- Check browser console for network errors
npm run dev     # Start dev server
npm run build   # Build for production
npm run preview # Preview production build
npm run lint    # Run ESLint
```

## 🔐 Security Notes

- Never commit `.env` file with sensitive credentials
- Use environment variables for all secrets
- Validate input on both frontend and backend
- Use HTTPS in production
- Add authentication for real-world applications


## 👤 Author

**Rosh-codes**
- GitHub: [@Rosh-codes](https://github.com/Rosh-codes)



