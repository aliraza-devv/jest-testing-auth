import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(data);
    } catch {
      setError(true);
    }
    setLoading(false)
  };

  const containerStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const inputStyle = {
    padding: ".7rem",
    marginBottom: ".5rem",
  };

  const btnStyle = {
    width: "85%",
    padding: ".6rem",
    backgroundColor: "blue",
    marginTop: ".5rem",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
  };

  return (
    <div style={containerStyle}>
      <span>{user.name}</span>
      <form>
        <input
          style={inputStyle}
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <br />
        <input
          style={inputStyle}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button
          style={btnStyle}
          disabled={!username || !password}
          onClick={handleClick}
        >
          {loading ? "please wait" : "Login"}
        </button>
        <span
          data-testid="error"
          style={{ visibility: error ? "visible" : "hidden", color: "red" }}
        >
          Something went wrong!
        </span>
      </form>
    </div>
  );
};

export default Login;
