# Job Tracker Application

A full-stack web application to track job applications, manage statuses, and stay organized during your job search.

____

## Features

* User Authentication (Login/Register)
* Add, update, and delete job applications
* Track job status (Applied, Interview, Rejected, Offer)
* Protected routes for secure access
* Clean and responsive UI

____

## Tech Stack

### Frontend

* React (Vite)
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB

____

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/Job-Tracker.git
cd Job-Tracker
```

_____

### 2. Setup Backend

```bash
cd job-tracker
npm install
```

Create a `.env` file in `job-tracker/` and add:

```
PORT=5000
MONGO_URI=your_database_url
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

____

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```
____

## Author

Sanika Deshkar

____

## License

This project is for learning purposes.
