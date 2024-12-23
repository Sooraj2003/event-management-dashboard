# Event Management Dashboard Backend

## Overview

This repository contains the backend for the Event Management Dashboard. It provides RESTful APIs for managing events, tasks, attendees, and user authentication. The backend is built with Node.js, Express, and MongoDB, allowing the front end to interact with various resources via endpoints.

---

## Technologies Used

- **Node.js**: JavaScript runtime used to build the backend server.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database to store events, tasks, and user data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **JWT (JSON Web Token)**: For handling secure user authentication and authorization.
- **Bcrypt.js**: Library to hash and validate passwords.
- **Dotenv**: For managing environment variables.
- **CORS**: Middleware to handle cross-origin resource sharing.

---

## API Endpoints

### Authentication Endpoints

1. **POST /api/auth/register**
   - Registers a new user.
   - **Request Body**:
     ```json
     {
       "username": "string",
       "email": "string",
       "password": "string"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "User registered successfully"
     }
     ```

2. **POST /api/auth/login**
   - Authenticates a user and returns a JWT token.
   - **Request Body**:
     ```json
     {
       "email": "string",
       "password": "string"
     }
     ```
   - **Response**:
     ```json
     {
       "token": "jwt_token_string"
     }
     ```

---

### Event Endpoints

1. **GET /api/events**
   - Retrieves a list of all events.
   - **Response**:
     ```json
     [
       {
         "id": "event_id",
         "name": "Event Name",
         "date": "Event Date",
         "location": "Event Location"
       }
     ]
     ```

2. **POST /api/events**
   - Creates a new event.
   - **Request Body**:
     ```json
     {
       "name": "Event Name",
       "date": "Event Date",
       "location": "Event Location"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Event created successfully"
     }
     ```

3. **GET /api/events/:id**
   - Retrieves a specific event by its ID.
   - **Response**:
     ```json
     {
       "id": "event_id",
       "name": "Event Name",
       "date": "Event Date",
       "location": "Event Location"
     }
     ```

4. **PUT /api/events/:id**
   - Updates an event by its ID.
   - **Request Body**:
     ```json
     {
       "name": "Updated Event Name",
       "date": "Updated Event Date",
       "location": "Updated Event Location"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Event updated successfully"
     }
     ```

5. **DELETE /api/events/:id**
   - Deletes an event by its ID.
   - **Response**:
     ```json
     {
       "message": "Event deleted successfully"
     }
     ```

---

### Task Endpoints

1. **GET /api/tasks**
   - Retrieves a list of all tasks.
   - **Response**:
     ```json
     [
       {
         "id": "task_id",
         "name": "Task Name",
         "event": "Event ID",
         "dueDate": "Task Due Date"
       }
     ]
     ```

2. **POST /api/tasks**
   - Creates a new task.
   - **Request Body**:
     ```json
     {
       "name": "Task Name",
       "event": "Event ID",
       "dueDate": "Task Due Date"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Task created successfully"
     }
     ```

3. **GET /api/tasks/:id**
   - Retrieves a specific task by its ID.
   - **Response**:
     ```json
     {
       "id": "task_id",
       "name": "Task Name",
       "event": "Event ID",
       "dueDate": "Task Due Date"
     }
     ```

4. **PUT /api/tasks/:id**
   - Updates a task by its ID.
   - **Request Body**:
     ```json
     {
       "name": "Updated Task Name",
       "event": "Updated Event ID",
       "dueDate": "Updated Task Due Date"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Task updated successfully"
     }
     ```

5. **DELETE /api/tasks/:id**
   - Deletes a task by its ID.
   - **Response**:
     ```json
     {
       "message": "Task deleted successfully"
     }
     ```

---

### Attendee Endpoints

1. **GET /api/attendees**
   - Retrieves a list of all attendees.
   - **Response**:
     ```json
     [
       {
         "id": "attendee_id",
         "name": "Attendee Name",
         "event": "Event ID",
         "email": "Attendee Email"
       }
     ]
     ```

2. **POST /api/attendees**
   - Registers an attendee for an event.
   - **Request Body**:
     ```json
     {
       "name": "Attendee Name",
       "event": "Event ID",
       "email": "Attendee Email"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Attendee registered successfully"
     }
     ```

3. **GET /api/attendees/:id**
   - Retrieves a specific attendee by their ID.
   - **Response**:
     ```json
     {
       "id": "attendee_id",
       "name": "Attendee Name",
       "event": "Event ID",
       "email": "Attendee Email"
     }
     ```

4. **DELETE /api/attendees/:id**
   - Deletes an attendee from an event.
   - **Response**:
     ```json
     {
       "message": "Attendee deleted successfully"
     }
     ```

---

## Middlewares

1. **authMiddleware**:
   - Protects the routes that require user authentication by verifying the presence and validity of the JWT token.
   
   **Usage**:
   ```javascript
   const authMiddleware = require('./middlewares/authMiddleware');
   app.use('/api/events', authMiddleware);


### Backend Setup:
```bash
cd event-management-dashboard-backend
npm install
nodemon server.js
```

### Environment Variables:
Create a `.env` file in the backend folder with the following keys:( I have pushed the .env file into git for easy access, I know its bad)
```
MONGODB_URI=mongodb+srv://soorajnp:soorajbond2003@cluster0.qu5h6.mongodb.net/eventManagementDb?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
JWT_SECRET=secret
```
