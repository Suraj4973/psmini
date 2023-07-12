import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/Login", {
          email,
          password,
        })
        .then((res) => {
          if ((res.data == "exist")) {
            history("/");
          }
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="Loginpage">
      <h1>Login</h1>
      <form action="POST">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <input type="submit" onClick={submit}></input>
      </form>
      <br />
      <p> OR</p>
      <br />
      <Link to="/Signup" />
    </div>
  );
}
export default Login;
