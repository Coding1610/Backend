# 📘 Backend Development - Day 2 (Love Babbar)

This document summarizes what I learned in the second backend development lecture by **Love Babbar**.

---

## ✅ Topics Covered

### 1. Project Folder Structure
- Learned how to organize backend code using a clean folder structure:
  - `server.js` for the main entry point
  - `models/` to define MongoDB schemas using Mongoose
  - `controllers/` to write logic for handling requests
  - `routes/` to define API routes
  - `config/` for database connection setup

### 2. Creating a Mongoose Model
- Created a `Todo` model using Mongoose with fields like:
  - `title` (required)
  - `description`
  - `completed` (default: false)

### 3. Writing Controllers
- Wrote a `createTodo` controller to handle POST requests
- Read data from `req.body` and saved it to MongoDB
- Sent a response after saving

### 4. Defining Routes
- Defined a POST route for `/api/todos`
- Linked the route with the controller function

### 5. Testing with Postman
- Sent a POST request to `/api/todos` with a JSON body
- Verified that the data was saved in the database and a response was returned

---

## 🧠 Summary

I learned how to structure a backend project properly, create a Mongoose model, write controller functions, define routes, and test POST requests using Postman.

---
