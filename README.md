# SkillSwap - MERN Stack Starter Project

## About This Project

**SkillSwap** is a student skill-sharing platform built with MERN Stack (MongoDB, Express, React, Node.js). Students can register, showcase their skills, post learning tasks, and connect with peers.

### Key Features:
- User authentication with JWT
- Create and manage tasks
- Browse other students' skills
- RESTful API backend
- React frontend with Context API state management

### Tech Stack:
- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT tokens

### How It Works:
1. Students register with their skills
2. Users post tasks or learning requests
3. Browse other students' profiles
4. API connects frontend to backend
5. MongoDB stores all user and task data

---

**Created by:** Gaurav Sharma (2026)  
**Purpose:** Educational MERN Stack Teaching Template  
**Purpose:** Educational MERN Stack Teaching Template
# SkillSwap - MERN Stack Starter Project

> A real-world student skill-sharing and task platform built for teaching MERN stack development

## 🎯 Project Overview

**SkillSwap** is a comprehensive learning platform where students can:

- Register and create accounts
- Showcase their skills (React, Python, Java, etc.)
- Post tasks or learning requests
- Browse other students' profiles and skills
- Connect with peers for skill exchange

This project is designed as a **teaching platform** for MERN stack students with:
- ✅ Clean, minimal code structure (no distracting comments)
- ✅ Best practices for real-world applications
- ✅ Intentionally incomplete features (for classroom implementation)
- ✅ Strategic TODO comments for students to implement
- ✅ Production-ready starter template

---

## � About This Project

**SkillSwap** is an educational MERN Stack template project created for **live classroom teaching**. This project demonstrates:

- **Real-world application structure** - How professional MERN applications are organized
- **Best practices** - Proper MVC architecture, error handling, and API design patterns  
- **Clean code** - Minimal, focused code with strategic TODO comments for learning
- **Scalable foundation** - Ready to extend with advanced features like real-time chat, file uploads, or notifications

**Students who complete this project will understand:**
✅ How to build full-stack applications with React, Node.js, Express, and MongoDB  
✅ API design and RESTful architecture  
✅ Authentication with JWT tokens  
✅ Database schema design with Mongoose  
✅ Frontend state management with Context API  
✅ How to connect frontend and backend together  

---

## �📚 Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React + Vite | Fast, modern UI development |
| **Backend** | Node.js + Express | RESTful API server |
| **Database** | MongoDB + Mongoose | NoSQL database with schema validation |
| **HTTP Client** | Axios | Promise-based HTTP requests |
| **Environment** | dotenv | Secure configuration management |
| **Build Tool** | Concurrently | Run dev servers simultaneously |

---

## 📁 Project Structure

```
skillswap/
├── server/                    # Backend (Express + MongoDB)
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/           # Business logic
│   │   ├── authController.js
   │   └── taskController.js
│   ├── models/                # Database schemas
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/                # API endpoints
│   │   ├── authRoutes.js
   │   └── taskRoutes.js
│   ├── middleware/            # Custom middleware
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── utils/                 # Helper functions
│   │   └── helpers.js
│   ├── .env.example           # Environment variable example
│   ├── server.js              # Server entry point
│   └── package.json
│
├── client/                    # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   └── SkillTag.jsx
│   │   ├── pages/             # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── services/          # API communication
│   │   │   └── api.js
│   │   ├── hooks/             # Custom hooks
│   │   │   └── useApi.js
│   │   ├── context/           # Global state management
│   │   │   └── AppContext.jsx
│   │   ├── App.jsx            # Root component
│   │   ├── main.jsx           # React entry point
│   │   └── styles/            # CSS modules or global styles
   ├── index.html
   ├── vite.config.js
   └── package.json
│
├── .gitignore
├── package.json               # Root package.json
└── README.md                  # This file
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org)
- **MongoDB** (Local or Atlas) - [Download](https://www.mongodb.com/try/download/community)
- **Git** - [Download](https://git-scm.com)

### Installation

1. **Clone or download the project:**
   ```bash
   cd skillswap
   ```

2. **Install all dependencies:**
   ```bash
   npm run install-all
   ```
   
   This will install dependencies for the root, server, and client directories.

### Environment Setup

#### Server Configuration (`.env`)

Create a `.env` file in the `server/` directory based on `.env.example`:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/skillswap
# OR use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/skillswap

# JWT (for authentication - to be implemented)
JWT_SECRET=your_secret_key_here_change_in_production

# CORS
CORS_ORIGIN=http://localhost:5173
```

#### Client Configuration (`.env`)

Create a `.env` file in the `client/` directory based on `.env.example`:

```env
VITE_API_URL=http://localhost:5000/api
```

---

## ▶️ Running the Project

### Start Both Servers (Recommended)

Run from the **root directory**:

```bash
npm run dev
```

This will start:
- **Backend**: http://localhost:5000
- **Frontend**: http://localhost:5173

### Start Individually

**Backend only:**
```bash
npm run server
```

**Frontend only:**
```bash
npm run client
```

---

## 📡 API Endpoints

### Authentication Routes (Structure Only)
- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login user
- **GET** `/api/auth/me` - Get current user (protected)

### Task Routes (Partial Implementation)
- **GET** `/api/tasks` - Fetch all tasks
- **POST** `/api/tasks` - Create a new task
- **GET** `/api/tasks/:id` - Fetch single task
- **PUT** `/api/tasks/:id` - Update task
- **DELETE** `/api/tasks/:id` - Delete task

---

## 📝 Database Schemas

### User Model
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, unique),
  password: String (hashed, required),
  skills: [String], // e.g., ["React", "Node.js", "MongoDB"]
  bio: String,
  createdAt: Date (default: now)
}
```

### Task Model
```javascript
{
  _id: ObjectId,
  title: String (required),
  description: String (required),
  category: String, // e.g., "Learning", "Help Needed"
  skills: [String], // Skills related to the task
  createdBy: ObjectId (ref: User),
  status: String, // "open" | "assigned" | "completed"
  createdAt: Date (default: now),
  updatedAt: Date
}
```

---

## 🎓 Teaching Notes - What's Incomplete?

This project is intentionally incomplete to allow students to implement features during the course:

### ❌ TODO: Student Tasks

**Backend:**
- [ ] Implement JWT-based authentication in `authController.js`
- [ ] Add password hashing using bcrypt in `authMiddleware.js`
- [ ] Complete task CRUD operations in `taskController.js`
- [ ] Add authorization checks for task operations
- [ ] Implement pagination for task listing
- [ ] Add MongoDB indexing for performance
- [ ] Add input validation middleware

**Frontend:**
- [ ] Connect Login form to authentication API
- [ ] Connect Register form to authentication API
- [ ] Implement task creation API calls on Dashboard
- [ ] Add task filtering and search functionality
- [ ] Build user profile page
- [ ] Add comprehensive error handling
- [ ] Integrate localStorage for token persistence
- [ ] Add loading states and success notifications

---

## 🔄 Common Development Workflow

### First Time Setup
```bash
# Install dependencies
npm run install-all

# Create .env files in server/ and client/
# Update with your MongoDB URI and API URLs

# Start development servers
npm run dev
```

### During Development
```bash
# If you modify package.json in server or client
npm run install-all

# Always run from root for full stack development
npm run dev
```

### Building for Production
```bash
npm run build
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| MongoDB connection failed | Ensure MongoDB is running locally or check your Atlas connection string |
| Port 5000 already in use | Change `PORT` in `server/.env` or kill the process using the port |
| CORS errors | Verify `CORS_ORIGIN` in `server/.env` matches your frontend URL |
| API calls failing | Ensure `VITE_API_URL` in `client/.env` matches your backend URL |
| Module not found | Run `npm run install-all` and restart the dev server |

---

## 📚 Learning Resources

- [MERN Roadmap](https://roadmap.sh/mern)
- [MongoDB Mongoose Documentation](https://mongoosejs.com)
- [Express.js Guide](https://expressjs.com)
- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [REST API Best Practices](https://restfulapi.net)

---

## 🤝 Git Collaboration Guide

See [GITHUB_COLLAB_GUIDE.md](./GITHUB_COLLAB_GUIDE.md) for:
- Branching strategy
- Commit message conventions
- Pull request workflow
- Code review standards

---

## 📋 Next Steps (After Class)

1. **Deploy to Production**
   - Deploy backend to Heroku, Railway, or Vercel
   - Deploy frontend to Vercel, Netlify, or GitHub Pages

2. **Add Advanced Features**
   - Real-time notifications using Socket.io
   - File uploads for task attachments
   - Rating and review system
   - Email notifications

3. **Improve Security**
   - Implement rate limiting
   - Add HTTPS enforcing
   - Add security headers (Helmet.js)
   - Input validation and sanitization

4. **Performance Optimization**
   - Add caching strategies
   - Optimize database queries
   - Implement request compression
   - Code splitting on frontend

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👥 Contributors

- **Creator**: Gaurav Sharma (2026)
- **Project**: SkillSwap - Educational MERN Stack Template
- **Students**: Add your name here!
j
---

## ❓ Questions or Issues?

- Check the [troubleshooting section](#troubleshooting)
- Review [GITHUB_COLLAB_GUIDE.md](./GITHUB_COLLAB_GUIDE.md)
- Ask in class or create an issue on GitHub

---

**Happy Coding! 🚀**
