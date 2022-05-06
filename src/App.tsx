import { Button } from "antd";
import "antd/dist/antd.min.css";
import React, { useState } from "react";
import "./App.css";
import { LoginForm } from "./components/LoginForm";
import Todo from "./components/Todo";

interface UserDetail {
  username: string;
  email: string;
  password: string;
}

function App() {
  const adminUser = {
    username: "admin@gmail.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState<string>("");

  const login = (details: UserDetail) => {
    console.log(details);
    if (
      details.username === adminUser.username &&
      details.password === adminUser.password
    ) {
      console.log("LOGIN, hello ", details.username);
      setUser({
        name: details.username,
        email: details.email,
      });
      setError("");
    } else {
      console.log("Detail do not match");
      setError("Detail do not match");
    }
  };

  const logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <Button type="primary" onClick={logout}>
            Logout
          </Button>
          <Todo />
        </div>
      ) : (
        <LoginForm login={login} error={error} />
      )}
    </div>
  );
}

export default App;

