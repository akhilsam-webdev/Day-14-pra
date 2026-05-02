# 🔐 Day-14 Practice – Authentication API

A simple and clean **Authentication Backend API** built with **Node.js, Express, MongoDB, and JWT**.

This project demonstrates how real-world authentication systems work, including password hashing, token-based authentication, and cookie handling.

---

## 🚀 Live Repository

👉 https://github.com/akhilsam-webdev/Day-14-pra

---

## ⚙️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB (Mongoose)**
* **JWT (jsonwebtoken)**
* **bcrypt**
* **cookie-parser**
* **dotenv**

---

## ✨ Features

* 🔑 User Registration (with hashed password)
* 🔐 Secure Login system
* 🍪 JWT stored in cookies
* 👤 Get current logged-in user
* 📦 Clean folder structure
* 🔄 Async/Await based API

---

## 📂 Folder Structure

```
Day-14-pra/
│
├── src/
│   ├── config/
│   │   └── database.js        # MongoDB connection
│   │
│   ├── models/
│   │   └── user.model.js      # User schema
│   │
│   ├── routes/
│   │   └── auth.route.js      # Auth routes
│   │
│   └── app.js                 # Express app setup
│
├── server.js                  # Entry point
├── .env                       # Environment variables
├── package.json
└── README.md
```

---

## 🔐 API Endpoints

### 🟢 Register

**POST** `/api/auth/register`

```json
{
  "name": "Akhil",
  "email": "akhil@example.com",
  "password": "123456"
}
```

✔ Creates a new user
✔ Password is hashed using bcrypt
✔ JWT token is generated and stored in cookies

---

### 🔵 Login

**POST** `/api/auth/login`

```json
{
  "email": "akhil@example.com",
  "password": "123456"
}
```

✔ Validates user credentials
✔ Generates JWT token
✔ Stores token in cookies

---

### 🟡 Get Current User

**GET** `/api/auth/get-me`

✔ Reads JWT from cookies
✔ Returns logged-in user data

---

## 🔑 Environment Variables

Create a `.env` file:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🛠️ Installation

```bash
# Clone repo
git clone https://github.com/akhilsam-webdev/Day-14-pra

# Enter folder
cd Day-14-pra

# Install dependencies
npm install

# Start server
node server.js
```

---

## ▶️ Development Mode

```bash
npm run dev
```

*(requires nodemon)*

---

## 🔒 Security Notes

* Passwords are **hashed** using bcrypt
* JWT used for authentication
* Tokens stored in cookies
* Unique email constraint prevents duplicates

---

## 🚧 Future Improvements

* Logout route
* Refresh tokens
* Input validation (Joi / Zod)
* Auth middleware (protect routes)
* Secure cookies (httpOnly, secure)
* Role-based access control

---

## 👨‍💻 Author

**Akhil Sambasivan**

GitHub: https://github.com/akhilsam-webdev

---

## ⭐ Support

If you found this helpful, give it a ⭐ on GitHub!

---
