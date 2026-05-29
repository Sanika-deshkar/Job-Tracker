# JobFlow — Job Application Tracker

A full-stack MERN web application to track job applications, manage their status, and stay organized during your job search.

### 🔗 Live Demo

* **App:** [job-tracker-psi-bice.vercel.app](https://job-tracker-psi-bice.vercel.app/)
* **API:** [job-tracker-backend-m60y.onrender.com](https://job-tracker-backend-m60y.onrender.com)

> ⏳ The backend is hosted on Render's free tier, which sleeps after inactivity. The first request after an idle period may take 30–60 seconds to wake up.

____

## Features

* **User Authentication** — register & login with JWT tokens and bcrypt-hashed passwords
* **Per-user data** — each user only sees and manages their own applications
* **Full CRUD** — add, update status, and delete job applications
* **Status tracking** — Applied, Interview, Rejected, Offer (with colored indicators)
* **Search & filter** — search by company name and filter by status
* **Server-side pagination** — efficient loading of large lists
* **Protected routes** — dashboard is accessible only when logged in
* **Responsive, modern UI** — clean indigo/violet design built with React

____

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React (Vite), React Router, Axios |
| Backend | Node.js, Express |
| Database | MongoDB (Mongoose) |
| Auth | JWT, bcryptjs |
| Hosting | Vercel (frontend), Render (backend), MongoDB Atlas (database) |

____

## Installation & Setup (Local)

### 1. Clone the repository

```bash
git clone https://github.com/Sanika-deshkar/Job-Tracker.git
cd Job-Tracker
```

### 2. Setup Backend

```bash
cd job-tracker
npm install
```

Create a `.env` file in `job-tracker/` (see `.env.example`):

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

Run the backend:

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend defaults to `http://localhost:5000/api`. To point it elsewhere,
create `frontend/.env` (see `.env.example`):

```
VITE_API_URL=http://localhost:5000/api
```

____

## Project Structure

```
Job-Tracker/
├── frontend/        # React (Vite) client
│   └── src/
│       ├── pages/         # Home, Login, Register, Dashboard, Header, Footer
│       ├── components/    # ProtectedRoute
│       └── api.js         # Axios instance with auth interceptor
└── job-tracker/     # Express API server
    ├── controllers/       # job & user logic
    ├── models/            # Mongoose schemas
    ├── routes/            # API routes
    ├── config/            # DB connection
    └── server.js
```

____

## Author

**Sanika Deshkar**
[GitHub](https://github.com/Sanika-deshkar) · [LinkedIn](https://www.linkedin.com/in/sanika-deshkar/)

____

## License

This project is for learning purposes.
