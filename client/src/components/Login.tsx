import axios from "axios";
import "../styles/Login.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

//TODO setup the DB_URL to switch automatically depending on the environment
// const DB_URL = "https://taberu-server.herokuapp.com";
const DB_URL = "http://localhost:8080";

interface login {
    username: string;
    property_id: number;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<login>();


  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    const loginInfo = {
      params: data,
    };
    localStorage.setItem("property_id", data.property_id);
    axios
    .get(`${DB_URL}/account`, loginInfo)
    .then((res) => {
      const id = res.data.id;
      localStorage.setItem("account_id", id);
      alert("Log-in Successful! Welcome to myGuests!");
      navigate("/property");
    });
  };

  return (
      <div className="login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form">
            <label>Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              {...register("username", {
                required: "Username is required",
              })}
            />
          </div>
          <div className="form_ow">
            <label>Property ID</label>
            <input
              type="number"
              id="property_id"
              placeholder="Property ID"
              {...register("property_id", { required: "Property ID is required" })}
            />
          </div>
          <div className="form_ow">
            <input type="submit" id="submit-button" value="Login" />
          </div>
        </form>
      </div>
  );
};

export default Login;