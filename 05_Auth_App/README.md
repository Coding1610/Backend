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
  - If matched → returned success response
  - If not matched → returned error response

---

## 🧠 Summary

I learned how to implement backend authentication using Node.js, Express, MongoDB, and Bcrypt. This includes creating secure SignUp and SignIn routes, enforcing role-based user creation with enum validation, hashing passwords, and comparing passwords for login verification.

---