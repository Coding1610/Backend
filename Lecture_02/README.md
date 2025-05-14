# 📘 Backend Development - Day 2 (Love Babbar)

This document summarizes what I learned in the second backend development lecture by **Love Babbar**.

---

## ✅ Topics Covered

### 1. Project Folder Structure
- Organized backend code using a clean and modular folder structure:
  - `server.js` – Main entry point of the application
  - `config/` – Database connection setup
  - `models/` – Mongoose schema definitions
  - `controllers/` – Logic for handling requests
  - `routes/` – All API endpoint definitions

---

## 📝 Learning Highlights

### 2. Creating Mongoose Model
- Defined a `Todo` model using Mongoose with:
  - `title` (required)
  - `description`
  - `completed` (default: false)

### 3. Writing Controllers for All CRUD Operations
- **Create Todo** – Save a new todo from `req.body` to MongoDB.
- **Get All Todos** – Fetch and return all todos from the database.
- **Get Todo by ID** – Retrieve a specific todo using its MongoDB ID.
- **Update Todo by ID** – Update an existing todo using ID and request body data.
- **Delete Todo by ID** – Remove a todo from the database using its ID.

### 4. Defining Routes for All CRUD Operations
- Used Express Router to set up the following endpoints:

| Method | Route                | Description             |
|--------|----------------------|-------------------------|
| POST   | `/api/todos`         | Create a new todo       |
| GET    | `/api/todos`         | Get all todos           |
| GET    | `/api/todos/:id`     | Get a single todo by ID |
| PUT    | `/api/todos/:id`     | Update todo by ID       |
| DELETE | `/api/todos/:id`     | Delete todo by ID       |

- Each route is connected to its corresponding controller function.

### 5. Testing with Postman
- Used Postman to test all CRUD operations:
  - Sent JSON payloads in `POST` and `PUT` requests
  - Verified responses for `GET`, `PUT`, and `DELETE` requests
  - Confirmed changes reflect correctly in MongoDB

---

## 🧠 Summary

I learned how to build and organize a complete backend CRUD API using Express and MongoDB. This includes model creation, route definitions, controller logic for all operations, and API testing with Postman. The modular structure and full CRUD functionality make this a solid backend foundation.

---
