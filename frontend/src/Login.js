import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/login",
        { username, password }
      );

      if (response.status === 200) {

        localStorage.setItem("username", username);

        navigate("/welcome");

      }

    } catch (err) {

      setError("Invalid credentials");

    }

  };

  return (

    <div className="container vh-100 d-flex justify-content-center align-items-center">

      <div className="card p-4 shadow" style={{width:"350px"}}>

        <h3 className="text-center mb-4">Login</h3>

        <form onSubmit={handleLogin}>

          <div className="mb-3">

            <label className="form-label">
              Username
            </label>

            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              required
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />

          </div>

          <button className="btn btn-primary w-100">
            Login
          </button>

        </form>

        {error && (
          <p className="text-danger mt-3 text-center">
            {error}
          </p>
        )}

      </div>

    </div>

  );

}

export default Login;