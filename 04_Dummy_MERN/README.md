# 📘 Backend Development - Day 5 (Love Babbar)

This document summarizes what I learned in the fifth backend development lecture by **Love Babbar**.

---

## ✅ Topics Covered

### 1. Connecting Backend with Frontend (Full Stack Integration)
- Built a simple full-stack project to understand how frontend interacts with backend.
- When the website loads, it fetches and displays a list of employees from the backend.
- Used a form to create a new employee with details like:
  - Name
  - Email
  - Role
  - Title
- On submitting the form, the data is sent to the backend and stored in MongoDB.

### 2. API Endpoints and Backend Logic
- Created two API routes:
  - `GET /api/users` → Fetch all registered employees
  - `POST /api/users` → Create a new employee
- Implemented corresponding controller functions:
  - `getUsers` – Fetches all user data from the database
  - `createUser` – Stores new user data into MongoDB

### 3. Created User Model
- Defined a `User` model using Mongoose with fields for name, email, role, and title.

### 4. Connected to MongoDB Atlas
- Learned how to:
  - Set up a MongoDB Atlas cluster
  - Connect the backend to MongoDB Atlas using connection URI
  - Use environment variables to manage sensitive credentials

### 5. Used MongoDB Compass
- Verified that employee data was being successfully inserted and fetched from the MongoDB database using Compass.

---

## 🧠 Summary

I learned how to connect a backend server with a frontend interface, fetch and display data, handle form submissions, create MongoDB models, set up API routes, and connect to MongoDB Atlas. I also used MongoDB Compass to visually inspect the stored data.

---
