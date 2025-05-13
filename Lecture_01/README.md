# 📘 Backend Development - Day 1 (Love Babbar)

This document summarizes what I learned in the first backend development video lecture by **Love Babbar**.

---

## ✅ Topics Covered

### 1. **Creating a Backend Server with Node.js**
- Learned how to initialize a Node.js project using `npm init`.
- Created a basic server using the `http` module and later using **Express.js** for simpler and cleaner code.

### 2. **Setting Up a Local Server**
- Defined a local port (e.g., `5000`) for the server.
- Used `app.listen()` to start the server and check in the browser/Postman.

### 3. **Creating Routes (GET & POST)**
- Used `app.get()` to create a `GET` route for fetching data.
- Used `app.post()` to create a `POST` route for sending data to the backend.

### 4. **Using Body Parser / express.json()**
- Understood the use of `express.json()` to parse incoming JSON request bodies.
- This allows the backend to read the `req.body` data in POST requests.

### 5. **Testing with Postman**
- Learned how to use **Postman** to:
  - Send GET and POST requests
  - Add headers and body to requests
  - Test API responses without needing a frontend

### 6. **Connecting Node/Express with MongoDB**
- Installed and used **Mongoose** to connect the server to a MongoDB database.
- Understood how to:
  - Write the connection string
  - Connect using `mongoose.connect()`
  - Handle success and error responses

---

## 🧠 Summary

Today, I built my first backend server using **Node.js**, **Express**, and **MongoDB**. I created basic GET and POST routes, parsed request data using `express.json()`, tested my APIs using Postman, and successfully connected my backend to MongoDB using Mongoose.

This forms the foundation of backend development and sets the stage for building complete REST APIs.

---
