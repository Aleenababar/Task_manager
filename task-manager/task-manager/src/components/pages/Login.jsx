import React from "react";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex items-center justify-center h-[98vh]">
      <div className=" w-2/6 rounded text-center bg-gray-800 p-4">
        <div className="text-xl">Login</div>
        <input
          type="username"
          name="username"
          placeholder="Username"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
        />
        <input
          type="Password"
          name="password"
          required
          placeholder="Enter your Password"
          className="bg-gray-700 px-3 py-2 my-3  w-full rounded"
        />
        <div>
          <button className="bg-blue-400 py-2 px-3  text-xl text-black font-semifold rounded  ">
            Login
          </button>
          <Link to="/signup">You have not an account. Sign up!</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
