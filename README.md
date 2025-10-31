# Job Board Backend

A RESTful API backend service for a job board application built with Express.js and SQLite.

## Features

- User authentication and authorization
- Job posting management
- Job applications handling
- Company profiles
- City-based job filtering
- People/candidate profiles

## Tech Stack

- Node.js
- Express.js
- SQLite
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm

## Installation

1. Clone the repository:
```bash
git clone https://github.com/SevanDvd/jobboard-backend.git
cd jobboard-backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add the following:
```
PORT=3000
JWT_SECRET=your_jwt_secret_here
```

## Project Structure

```
├── controllers/          # Request handlers
├── database/            # Database configuration
├── middleware/          # Custom middleware functions
├── models/             # Database models
├── routes/             # API routes
└── server.js           # Entry point
```

## API Endpoints

- Most routes require authorization and are restricted by user role.
- Role mapping (set `role_user` when registering):
	- Administrator: `role_user = 3` (full access)
	- Advertiser: `role_user = 2`
	- Applicant: `role_user = 1`

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user

### Jobs
- `GET /jobs` - Get all jobs
- `POST /jobs` - Create a new job
- `GET /jobs/:id` - Get job by ID
- `PUT /jobs/:id` - Update job
- `DELETE /jobs/:id` - Delete job

### Applications
- `GET /applications` - Get all applications
- `POST /applications` - Submit new application
- `GET /applications/:id` - Get application by ID

### Companies
- `GET /companies` - Get all companies
- `POST /companies` - Create new company
- `GET /companies/:id` - Get company by ID

### Cities
- `GET /cities` - Get all cities
- `POST /cities` - Add new city
- `GET /cities/:id` - Get city by ID

### People
- `GET /peoples` - Get all people
- `POST /peoples` - Create new profile
- `GET /peoples/:id` - Get profile by ID

## Running the Server

```bash
node server.js
```

The server will start on port 3000 by default (http://localhost:3000).

## License

This project is licensed under the MIT License.

```

