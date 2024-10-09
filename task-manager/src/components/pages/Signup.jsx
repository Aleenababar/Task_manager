import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [Data, setData] = useState({ username: "", email: "", password: "" });
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const submit = async () => {
    if (Data.username === "" || Data.email === "" || Data.password === "") {
      alert("All fields  are required!");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:1000/api/v1/sign-in",
          Data
        );
        console.log(response);
      } catch (error) {
        console.error("Error:", error);

        console.log("Request Config:", error.config); // Check config here
      }
    }
  };
  return (
    <>
      <div className="flex items-center justify-center h-[98vh]">
        <div className=" w-2/6 rounded text-center bg-gray-800 p-4">
          <div className="text-xl">SignUp</div>
          <input
            type="text"
            name="username"
            value={Data.username}
            onChange={change}
            placeholder="Username"
            className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          />
          <input
            type="email"
            name="email"
            value={Data.email}
            onChange={change}
            placeholder="Enter your Email.."
            required
            className="bg-gray-700 px-3 py-2 my-3  w-full rounded"
          />
          <input
            type="Password"
            name="password"
            value={Data.password}
            onChange={change}
            required
            placeholder="Enter your Password"
            className="bg-gray-700 px-3 py-2 my-3  w-full rounded"
          />
          <div className="flex text-md gap-4">
            <button
              className="bg-blue-400 py-2 px-3  text-xl text-black font-semifold rounded  "
              onClick={submit}
            >
              SignUp
            </button>
            <Link to="/login">Already you have account just Login</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
