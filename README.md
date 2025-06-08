# BACKEND

# Backend Theory - Explained in Detail

This README gives an in-depth explanation of key backend topics using Node.js, Express, MongoDB, Mongoose, and supporting technologies. It explains why we need each of these, how they work, and their importance in backend development.

---

### 1. Node.js

Node.js is a runtime environment that allows developers to run JavaScript on the server side. It uses the V8 engine (same as Chrome) and is non-blocking, meaning it handles many connections simultaneously without waiting for one task to finish. It’s widely used to build fast, scalable network applications, such as APIs and real-time services like chat apps.

### 2. Express.js

Express is a lightweight web framework for Node.js. It provides a simple way to define routes, handle requests, serve static files, and integrate middleware. It abstracts a lot of lower-level Node.js code, making it easier to build web servers and APIs. With Express, building a RESTful API becomes much simpler and faster.

### 3. MongoDB Compass

This is a graphical interface for MongoDB. It helps developers explore the database visually, create and run queries, and view documents and their structure without using the terminal. This tool is very helpful during development and debugging phases.

### 4. MongoDB Atlas

MongoDB Atlas is a cloud-based database service provided by MongoDB Inc. It hosts your database securely on the cloud so that you don’t have to worry about manual installations, backups, and scaling. You can connect to it from anywhere, making it suitable for production environments.

### 5. ODM (Object Data Modeling)

ODM refers to libraries like Mongoose that connect application objects to database documents. It provides a schema-based solution to model your application data and simplifies working with databases by abstracting complex queries into simple methods.

### 6. Mongoose

Mongoose is an Object Data Modeling (ODM) library that acts as a bridge between MongoDB and Node.js. It allows you to define schemas for your data, apply validation rules, and perform database operations in a structured way using models. It also adds helpful methods and hooks to make development easier and more predictable.

### 7. Folder Structure

A proper folder structure is crucial for any backend application. It keeps the code organized, scalable, and easier to maintain. Common folders include `routes/` for endpoints, `controllers/` for logic, `models/` for database schema, and `middlewares/` for reusable logic like authentication. Organizing files this way enhances readability and collaboration.

### 8. Relational Data Model

This model organizes data into tables (rows and columns) with predefined relationships, like foreign keys. It’s used in SQL databases (MySQL, PostgreSQL) and is best for structured data with strict relationships. Complex queries are efficient in relational systems.

### 9. Non-Relational Data Model

In NoSQL databases like MongoDB, data is stored as collections of documents, often in JSON format. These models are schema-less or flexible, making them suitable for fast-changing and unstructured data. You don’t need to predefine the structure, which speeds up development.

### 10. Routes

Routes define the endpoints of your server, such as `/users`, `/login`, or `/products`. Each route listens for specific HTTP methods like GET, POST, PUT, DELETE. They serve as the entry points to your API and determine what action to take based on the request.

### 11. Controllers

Controllers handle the logic behind each route. For example, a login controller would take input from a login route, validate the user, and respond accordingly. Separating controllers from routes keeps code modular and clean, following the MVC (Model-View-Controller) pattern.

### 12. Schema

A schema in Mongoose defines the structure of documents within a collection. It specifies what fields exist, their types, default values, and validations. Schemas are essential for maintaining data consistency in MongoDB, even though MongoDB itself is schema-less.

### 13. Model

A model is created using a Mongoose schema and provides an interface to interact with a collection in the database. It allows you to perform operations like `create`, `find`, `update`, and `delete` on your documents. It encapsulates database logic and operations.

### 14. Object

In JavaScript, objects are key-value data structures used to store and manipulate data. In backend code, they're commonly used to represent user data, configurations, request/response payloads, and more. MongoDB documents are also JavaScript objects under the hood.

### 15. Document

A document in MongoDB is a single data record, stored in BSON (Binary JSON) format. It’s similar to a row in SQL, but more flexible and hierarchical. Documents make it easy to represent complex, nested data structures naturally.

### 16. Collection

A collection is a group of MongoDB documents. It’s like a table in relational databases. Collections don’t require predefined schemas but can be managed using Mongoose to impose structure and validation.

### 17. Middleware

Middleware functions sit between the request and the response in Express. They can modify the request or response objects, end the request, or call the next middleware in the stack. Common uses include authentication checks, logging, body parsing, and error handling.

### 18. Authentication

Authentication is the process of verifying a user’s identity—usually through login credentials. It ensures that the user is who they claim to be. Common methods include password-based login, OAuth (Google, GitHub login), and JWT tokens.

### 19. Authorization

Authorization defines what an authenticated user is allowed to do. For example, some users may have admin access while others do not. Authorization is often implemented using roles and permissions, checked before performing sensitive operations.

### 20. JWT (JSON Web Token)

JWT is a token format used to securely transmit information between the server and client. It contains encoded data (like user ID) and a digital signature. JWT is used in stateless authentication where the token is verified on each request instead of using session data stored on the server.

### 21. Cookies

Cookies are small pieces of data stored on the client’s browser. They can store tokens or user preferences and are automatically sent with every request to the same origin. They can be secured using HttpOnly and Secure flags.

### 23. Mounting

Mounting refers to attaching route files or middleware to a specific path using `app.use()`. For example, `app.use('/api/users', userRoutes)` mounts the `userRoutes` router at the `/api/users` path. It helps modularize code and manage routes efficiently.

### 24. JWT.sign

This method is used to create a new JWT token. It takes a payload (like user ID), a secret key, and an optional expiry. The generated token is then sent to the client, usually after login, and used for subsequent authenticated requests.

### 25. JWT.verify

This method decodes and verifies a JWT token using the secret key. It checks if the token is valid, not expired, and hasn’t been tampered with. It's commonly used in protected routes to authorize users.

### 26. bcrypt.hash

`bcrypt.hash` is used to convert a plain-text password into a hashed version that can be stored safely in the database. It uses a salt and multiple hashing rounds to ensure security, making it very difficult to reverse-engineer the original password.

### 27. bcrypt.compare

`bcrypt.compare` checks if a plain-text password matches the hashed password stored in the database. It’s used during login to authenticate users securely without exposing their actual password.

### 28. Three Token Fetch Methods

There are three common ways to send authentication tokens from client to server:

* **Headers:** Sent in the `Authorization` header (e.g., `Bearer <token>`).
* **Body:** Included in the body of a POST request (not recommended for sensitive routes).
* **Cookies:** Automatically sent with requests if set by the server. Can be secured using HttpOnly and Secure flags.
  Each method has pros and cons depending on your frontend framework and security needs.

### 29. Body, Header, and Cookie

These are key parts of HTTP requests:

* **Body:** Carries the main data (e.g., form fields, JSON payload).
* **Header:** Contains metadata like content-type, auth tokens, etc.
* **Cookie:** Stored in the client and sent automatically with each request.
  All three are used for sending and managing data between client and server.

### 30. File Upload

This involves accepting files from users (like images or documents) via a form or API. On the server side, libraries like `multer` in Node.js are used to handle file streams, validate file types, and store them in a directory or cloud service.

### 31. Upload to Cloudinary and Server

* **Cloudinary:** A cloud platform for managing media uploads. It stores files, optimizes them, and provides URLs to serve them efficiently with CDN support.
* **Local Server:** Files can also be saved to a local folder on your backend (like `uploads/`). This is simpler but less scalable and secure.
  Cloudinary is preferred in production due to better performance and scalability.

### 31. HTTP Methods - GET, POST, PUT, PATCH, DELETE

* **GET** The GET HTTP request is used to retrieve data from the server. When a client sends a GET request to an endpoint, the server processes it and responds with the requested data—usually in JSON format for APIs.

* **POST:** What: Sends data to the server to create a new resource.
Why: Used in routes like /register or /createPost to add new entries in the database. It sends data in the request body and is not idempotent (repeating the request creates multiple entries).

* **PUT** What: Updates an existing resource by replacing it completely.
Why: Used in routes like /updateUser/:id where the full object (all fields) is provided to update the database record. It is idempotent (repeating the request gives the same result).

* **PATCH** What: Partially updates an existing resource.
Why: Useful when only specific fields need to be updated (e.g., updating just the email or password). More efficient than PUT when only partial changes are needed.

* **DELETE** What: Removes a resource from the server.
Why: Used in routes like /deleteUser/:id or /deletePost/:id to remove data from the database. It helps manage resources and clean up unused data.

---

This document provides a understanding of essential backend theory.
