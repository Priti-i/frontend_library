import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { login } from "../services/api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await login({ username, password });
//       localStorage.setItem("token", response.data.token);
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Login failed:", error.response.data.message);
//     }
//   };                 onSubmit={handleSubmit}

  return (
    <div>
      <h2>Login</h2>
       <form >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
