# Contact Management Application

A backend application built with **Express.js**, **Node.js**, and **MongoDB** for managing user-specific contacts securely. This project demonstrates practical **backend development skills** as part of a MERN stack learning journey.

## Technologies Used
- **Node.js** – Runtime environment
- **Express.js** – Backend framework
- **MongoDB** – Database
- **Mongoose** – ODM for MongoDB
- **JSON Web Token (JWT)** – Authentication & authorization
- **bcrypt** – Password hashing

## Features
- **User Authentication & Authorization**
  - Register and login users securely
  - JWT token validation for protected routes
- **User-Specific Contacts**
  - Each user manages their own contacts
  - Ensures data privacy and separation
- **CRUD Operations**
  - Create, Read, Update, and Delete contacts
  - Validations to maintain data integrity
- **Error-Handling Middleware**
  - Centralized error handling for all routes
  - Provides clear error messages and status codes
- **Routing**
  - Modular route handling for users and contacts
  - Organized and maintainable code structure

## Sample API Endpoints
- **POST** `/user/register` – Register a new user  
- **POST** `/user/login` – Authenticate a user and return JWT  
- **GET** `/contacts` – Get all contacts for authenticated user  
- **POST** `/contacts` – Create a new contact  
- **PUT** `/contacts/:id` – Update an existing contact  
- **DELETE** `/contacts/:id` – Delete a contact  

## Summary
This project highlights key backend concepts, including authentication, authorization, CRUD operations, routing, and error handling. It is designed to provide a solid foundation for building secure and scalable backend applications in the MERN stack.
