# 📅 Event Management Dashboard

## 📚 **Project Overview**
The **Event Management Dashboard** is a full-stack web application designed to streamline event planning, organization, and management. It enables users to manage events efficiently with features such as event creation, attendee tracking, and performance analytics.

This project follows a modular architecture with a clear separation between the **Frontend** and **Backend**, ensuring scalability, maintainability, and seamless user experience.

---

## 🖥️ **Frontend**
The frontend provides an interactive and responsive user interface for managing events.

### 🚀 **Technologies and Libraries Used:**
- **React.js:** Component-based architecture for building UI.
- **React Router:** Handling client-side routing.
- **Redux:** State management across the application.
- **Axios:** HTTP client for API communication.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **React Hook Form:** Form handling and validation.

### 📊 **Key Features:**
- User authentication and authorization.
- Event creation, editing, and deletion.
- Dynamic dashboards for event analytics.
- Responsive UI for seamless mobile and desktop experiences.

---

## ⚙️ **Backend**
The backend serves as the core engine for the dashboard, handling API requests, authentication, and database operations.

### 🚀 **Technologies and Libraries Used:**
- **Node.js:** JavaScript runtime for backend services.
- **Express.js:** Lightweight framework for API routing and middleware.
- **JWT (JSON Web Token):** Secure authentication and session management.
- **Bcrypt:** Password hashing for user security.
- **CORS:** Cross-Origin Resource Sharing.

### 📊 **Key Features:**
- Secure authentication and role-based access control.
- RESTful API endpoints.
- Middleware for error handling and validation.
- Robust backend architecture for scalability.

---

## 🛢️ **Database**
- **MongoDB:** NoSQL database for flexible and scalable data storage.
- **Mongoose:** Object Data Modeling (ODM) library for MongoDB.

### 📊 **Database Highlights:**
- Schema-based data structure for consistency.
- Efficient query handling.
- Indexing for performance optimization.

---

## 🚀 **Deployment**
- **Frontend:** Deployed on **Netlify**.
- **Backend:** Deployed on **Render**.
- **Database:** Hosted on **MongoDB Atlas**.

---

## 📄 **How to Run the Project Locally**

### Clone the repository:
```bash
git clone https://github.com/Sooraj2003/event-management-dashboard.git
```

### Frontend Setup:
```bash
cd event-management-dashboard-frontend
npm install
npm start
```

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

---

## 👤 **Author**
- **Sooraj**

Feel free to contribute, raise issues, or share feedback!

📧 **Contact:** [sooraj@example.com](mailto:sooraj@example.com)

🌟 **If you like this project, consider giving it a star on GitHub!** ⭐️

---

Happy Coding! 💻🎉
