# 📘 Backend Development - Day 7 (Love Babbar)

This document summarizes what I learned in the seventh and final backend development lecture by **Love Babbar**.

---

## ✅ Topics Covered

### 1. File Upload to Cloudinary and Server

- Implemented file upload functionality for both:
  - **Cloudinary** (for images and videos)
  - **Local Server** (for temporary file storage)

---

## 📤 Upload Features Implemented

### 🔹 Image File Upload to Cloudinary
- Used `cloudinary.uploader.upload()` to upload images
- Added a size compression step before uploading
- Applied an upper limit of **10 MB** for image uploads

### 🔹 Video File Upload to Cloudinary
- Used the same Cloudinary API to upload video files

### 🔹 File Upload to Server
- Uploaded files locally to the server using `file.mv()` function

---

## 🛠️ Tools & Configuration

- Used `express-fileupload` middleware to handle multipart file uploads
- Set up Cloudinary configuration with secure API keys and credentials
- Included validation checks for:
  - File type
  - File size
  - Compression (before upload)

---

## 🧠 Summary

I learned how to upload and manage files in the backend using both **Cloudinary** and **local server storage**. I handled image/video uploads, added compression, enforced file size limits, and used `express-fileupload` for parsing multipart requests.

This marks the successful completion of my **Backend Development Journey** 🚀

---

## ✅ Completed Backend Concepts

- Node.js + Express Server Setup
- Routing and Controllers
- MongoDB + Mongoose Integration
- CRUD Operations
- Authentication (SignUp / SignIn with bcrypt)
- Connecting Backend with Frontend
- File Uploads (Cloudinary + Server)

---

Thank you for following along! 💻✨