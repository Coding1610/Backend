# 📘 Backend Development - Day 4 (Love Babbar)

This document summarizes what I learned in the fourth backend development lecture by **Love Babbar**.

---

## ✅ Topics Covered

### 1. Building Blog Website Functionality (Backend)

### 2. Created Full Blog Routes
- **createPost** – API to create a new blog post
- **fetchAllPost** – API to get all blog posts
- **createComment** – API to add a comment to a post
- **likePost** – API to like a specific post
- **unlikePost** – API to unlike a previously liked post

### 3. Created 3 Separate Models
- **Post Model** – Stores blog post details like title, body, etc.
- **Comment Model** – Stores comment content and reference to the post
- **Like Model** – Stores which user liked which post

### 4. Wrote Controllers for All Operations
- Separate controller functions were written for:
  - Creating posts
  - Fetching posts
  - Adding comments
  - Liking and unliking posts

### 5. Defined Routes
- Created different routes and linked each one to its corresponding controller.

### 6. Tested APIs Using Tools
- **Postman** – Used to send test requests for all endpoints
- **MongoDB Compass** – Used to visually inspect the data being stored in the MongoDB collections for posts, comments, and likes

---

## 🧠 Summary

I learned how to build the backend for a simple blog application using Node.js, Express, and MongoDB. This includes creating and organizing multiple models (Post, Comment, Like), writing controllers for CRUD-like operations, setting up routes, and testing everything using Postman and MongoDB Compass.

---
