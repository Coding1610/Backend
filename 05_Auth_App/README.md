# 📘 Backend Development - Day 6 (Love Babbar)

This document summarizes what I learned in the sixth backend development lecture by **Love Babbar**.

---

## ✅ Topics Covered

### 1. Authentication Backend (SignUp & SignIn)

### 2. Created Two Routes and Controllers
- **POST /api/auth/signup** → Register a new user
- **POST /api/auth/signin** → Log in an existing user

---

## 👤 User Model
- Defined a `User` model with the following fields:
  - `firstName`
  - `lastName`
  - `email`
  - `password`
  - `role` → Must be one of `"Admin"`, `"Student"`, or `"User"`

### 🔒 Role Validation
- Used Mongoose `enum` validation to restrict the `role` field.
- If a user tries to register with an invalid role (not one of the three), the server returns a validation error.

---

## 🔐 SignUp Flow
- Extracted `firstName`, `lastName`, `email`, `password`, and `role` from `req.body`
- Checked if the email already exists in the database
  - If yes → returned error response
- If not:
  - Validated that the `role` is within the allowed enum
  - Encrypted the password using `bcrypt.hash()`
  - Stored the user in the database with the hashed password

---

## 🔓 SignIn Flow
- Extracted `email` and `password` from `req.body`
- Checked if the email exists in the database
  - If not → returned error response
- If found:
  - Compared actual password with stored hashed password using `bcrypt.compare()`
  - If matched → generated JWT token
  - Token added in:
    - **Body** (optional)
    - **Cookies** using `res.cookie()`
    - **Headers** using `Authorization: Bearer <token>`
  - Returned success response with token

---

## 🔁 Authentication & Authorization Middleware

### 🧱 Authentication Middleware
- Checks token from one of three places:
  - `req.body.token`
  - `req.cookies.token`
  - `req.header("Authorization")?.replace("Bearer ", "").trim()`
- If valid → adds decoded payload to `req.user`
- If missing or invalid → returns error response
- Used `next()` to forward request to the next middleware/controller

### 🧱 Authorization Middleware
- **isStudent**: Checks if `req.user.role === 'Student'`
- **isAdmin**: Checks if `req.user.role === 'Admin'`
- If role mismatch → returns 401 Unauthorized

---

## 🧪 Postman Testing
- Tested SignUp and SignIn routes with body and headers
- Used Postman to test:
  - Cookie expiration and visibility with `httpOnly`
  - Sending token in `Authorization` header
  - Middleware flow using `next()`

---

## 🧠 Summary

I learned how to:
- Implement secure SignUp and SignIn routes with role-based access
- Use JWT for authentication and pass token through body, cookies, and headers
- Create custom middleware for Authentication and Authorization
- Use `next()` in middleware to chain logic
- Debug and test everything using Postman