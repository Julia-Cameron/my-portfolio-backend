# MyPortfolio

A full-stack personal portfolio application for presenting Julia Cameron's background, skills, projects, education, and services. The frontend is a React single-page application, and the backend provides a REST API backed by MongoDB.

## Features

- Portfolio pages for Home, About, Projects, Education, Services, and Contact
- Responsive design with an animated starry background
- Express API for authentication, contacts, projects, qualifications, and users
- MongoDB persistence through Mongoose
- JWT-based authentication for protected API routes

## Tech stack

- **Frontend:** React, React Router, Vite
- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **Authentication:** JSON Web Tokens and bcrypt

## Prerequisites

- Node.js and npm
- A MongoDB database

## Setup

1. Install the backend dependencies from the repository root:

   ```bash
   npm install
   ```

2. Install the frontend dependencies:

   ```bash
   npm --prefix client install
   ```

3. Create a `.env` file in the repository root:

   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>/<database>
   JWT_SECRET=<a-long-random-secret>
   PORT=3000
   ```

   Use your own MongoDB connection string and secret. Do not commit `.env` or other credentials.

4. Start the frontend and backend in development mode from the repository root:

   ```bash
   npm run client
   ```

   The Vite development server prints the frontend URL in the terminal. The Express API listens on `http://localhost:3000` by default; set `PORT` in `.env` to use another port.

## API

All endpoints are prefixed with `/api`. Resource endpoints support the methods listed below; `:id` identifies a resource.

| Resource | Endpoints | Access |
| --- | --- | --- |
| Authentication | `POST /auth/signup`, `POST /auth/signin`, `POST /auth/signout` | Sign-out requires authentication |
| Contacts | `GET, POST /contacts`, `GET, PUT, DELETE /contacts/:id`, `DELETE /contacts` | Authenticated |
| Projects | `GET, POST /projects`, `GET, PUT, DELETE /projects/:id`, `DELETE /projects` | Public |
| Qualifications | `GET, POST /qualifications`, `GET, PUT, DELETE /qualifications/:id`, `DELETE /qualifications` | Public |
| Users | `GET, POST /users`, `GET, PUT, DELETE /users/:id`, `DELETE /users` | Public |

Requests that create or update resources should send JSON bodies. Protected routes require an `Authorization` header using the `Bearer` scheme and a token issued by the sign-in endpoint.

## Frontend scripts

Run these from the `client` directory, or prefix them with `npm --prefix client` from the repository root.

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite frontend and backend in development mode |
| `npm run build` | Build the frontend for production |
| `npm run preview` | Preview the production frontend build |
| `npm run lint` | Run ESLint on the frontend |

## Project structure

```text
client/       React and Vite frontend
controllers/  API request handlers
middleware/   Authentication middleware
models/       Mongoose models
routes/api/   Express API routes
server/       Express app configuration and asset routing
server.js     Backend entry point
```

The frontend has its own README with additional UI details in [`client/README.md`](client/README.md).
