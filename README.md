# 🎓 StudentHub – Student Record Management System (MERN)

StudentHub is a full-stack MERN application designed to manage student records with secure authentication and a protected dashboard.  


---

## 🚀 Features

### 🔐 Authentication
- User Registration
- User Login
- JWT-based authentication
- Protected dashboard routes

### 📊 Dashboard
- Personalized dashboard with user name and role
- Accessible only after login

### 📚 Student Management (CRUD)
- ➕ Add Student
- 📄 View Students
- ✏️ Edit Student
- ❌ Delete Student

### 🎨 UI & Responsiveness
- Clean and modern UI
- Responsive design (mobile, tablet, desktop)
- Styled using pure CSS (no external UI library)

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- React Router
- Axios
- CSS (Responsive)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## 📂 Project Structure

studenthub-mern/
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ │ ├── Login.jsx
│ │ │ ├── Register.jsx
│ │ │ ├── Dashboard.jsx
│ │ │ └── Students.jsx
│ │ ├── context/
│ │ │ └── AuthContext.jsx
│ │ ├── components/
│ │ │ └── ProtectedRoute.jsx
│ │ ├── App.jsx
│ │ ├── App.css
│ │ └── main.jsx
│ └── package.json
│
├── backend/
│ ├── routes/
│ ├── models/
│ ├── controllers/
│ ├── server.js
│ └── package.json
│
└── README.md

yaml
Copy code

---

## ▶️ How to Run the Project

### 1️⃣ Backend Setup
```bash
cd backend
npm install
npm run dev
Backend will run on:

arduino
Copy code
http://localhost:5000
2️⃣ Frontend Setup
bash
Copy code
cd frontend
npm install
npm run dev
Frontend will run on:

arduino
Copy code
http://localhost:5173