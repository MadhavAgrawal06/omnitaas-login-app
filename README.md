# OMNITAAS – Full Stack Engineer Assessment
## Login Application (React + Node.js)

This project is a **Login Application** developed for the **OMNITAAS Full Stack Engineer Assessment**.

The application allows users to log in using a username and password.  
The **frontend is built with React**, and the **backend API is built with Node.js and Express**.

If the credentials are valid, the user is redirected to a **Welcome Page**.  
If the credentials are invalid, an **error message** is displayed.

---

## Tech Stack

### Frontend
- React (Functional Components & Hooks)
- React Router DOM
- Axios
- Bootstrap

### Backend
- Node.js
- Express.js
- CORS

---

## Live Deployment

- **Frontend:** [Live Application](https://your-frontend-url.com)  
- **Backend API:** [API Server](https://your-backend-url.com)

---

## Features

- Login form with username and password
- API-based credential validation
- Redirect to Welcome page after successful login
- Error message for invalid credentials
- Username stored in **LocalStorage**
- Responsive UI using **Bootstrap**

---

## Test Credentials

| Username | Password |
|----------|----------|
| admin    | admin    |

---

## Project Structure

```text
backend/
│
├── server.js
├── package.json
└── node_modules/

frontend/
│
├── public/
│   └── index.html
│
├── src/
│   ├── App.js
│   ├── Login.js
│   ├── Welcome.js
│   └── index.js
│
├── package.json
└── node_modules/
```
---

## Running the Project Locally

### Run Backend

cd backend
npm install
npm start

Backend will run at: http://localhost:5000

### Run Frontend

cd frontend
npm install
npm start

Frontend will run at: http://localhost:3000

---

## Author

**Madhav Agrawal**  
Full Stack Developer  
React | Java | Spring Boot