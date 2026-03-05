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

- **Frontend:** https://omnitaas-login-app.netlify.app/ 
- **Backend API:** https://omnitaas-login-app-j8zl.onrender.com  

> ⚠️ Note: The backend API is hosted on a free tier service, so it may take **30–50 seconds to wake up** on the first request.

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
```bash
cd backend
npm install
npm start
```

Backend will run at: http://localhost:5000

### Run Frontend
```bash
cd frontend
npm install
npm start
```

Frontend will run at: http://localhost:3000

---

## Author

**Madhav Agrawal**  
Full Stack Developer  
React | Java | Spring Boot