import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../api/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      localStorage.setItem("token", data.token);
      history.push("/people");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleSignupButton = () => {
    history.push("/signup");
  };

  console.log(localStorage.getItem("token"));
  if (localStorage.getItem("token") !== null) {
    history.push("/people");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="block w-full mb-4 p-2 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="block w-full mb-4 p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Login
        </button>
        <button
          type="button"
          className="w-full p-2 mt-2 bg-blue-500 text-white rounded"
          onClick={handleSignupButton}
        >
          Signup
        </button>
        <button
          onClick={() => history.push("/forgot-password")}
          className="w-full p-2 bg-red-500 text-white rounded mt-4"
        >
          Forgot Password?
        </button>
      </form>
    </div>
  );
};

export default Login;
