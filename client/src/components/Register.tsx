import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import "./App.css";

//TODO setup the DB_URL to switch automatically depending on the environment
// const DB_URL = "https://myguests-server.herokuapp.com";
const DB_URL = "http://localhost:8080";

interface test {
  last_name: string;
  first_name: string;
  position: string;
  username: string;
  property_id: number;
  pincode: number;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
  } = useForm<test>({
    defaultValues: {
      last_name: "",
      first_name: "",
      position: "",
      username: "",
      property_id: undefined,
      pincode: undefined,
    },
  });
  const onSubmit = (data: any) => {
    const newAccountInfo = data;
    const loginInfo = {
        params: {
            username: newAccountInfo.username,
            property_id: newAccountInfo.property_id
        },
    }

    axios.post(`${DB_URL}/account`, newAccountInfo).then((res) => {
      console.log(res);
      const responseCode = res.status;
      if (responseCode === 201) {
        localStorage.setItem("property_id", newAccountInfo.property_id);
        axios.get(`${DB_URL}/account`, loginInfo).then((res) => {
            const id = res.data.id;
            localStorage.setItem("account_id", id);
        })
        alert("Account created. Welcome to myGuests!");
        navigate("/property");
      }
    });
  };

  return (
    <div className="register">
      <main>
        <h2>Register</h2>
        <div className="registerForms">
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="registerInput">
              <label htmlFor="firstname">
                First Name <span>*</span>
              </label>
              <input
                type="text"
                id="firstname"
                {...register("first_name", { required: "this is required" })}
              />
            </div>

            <div className="registerInput">
              <label htmlFor="lastname">
                Last Name <span>*</span>
              </label>
              <input
                type="text"
                id="lastname"
                {...register("last_name", { required: "this is required" })}
              />
            </div>

            <div className="registerInput">
              <label htmlFor="position">
                Position <span>*</span>
              </label>
              <input
                type="text"
                id="position"
                {...register("position", { required: "this is required" })}
              />
            </div>

            <div className="registerInput">
              <label htmlFor="username">
                Username <span>*</span>
              </label>
              <input
                type="text"
                id="username"
                {...register("username", { required: "this is required" })}
              />
            </div>

            <div className="registerInput">
              <label htmlFor="property_id">
                Property ID <span>*</span>
              </label>
              <input
                type="number"
                id="property_id"
                {...register("property_id", { required: "this is required" })}
              />
            </div>

            <div className="registerInput">
              <label htmlFor="pincode">
                Pincode <span>*</span>
              </label>
              <input
                type="number"
                id="pincode"
                {...register("pincode", { required: "this is required" })}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Register;
