import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

//TODO setup the DB_URL to switch automatically depending on the environment
const DB_URL = "https://myguests-server.herokuapp.com";
// const DB_URL = "http://localhost:8080";

const PROPERTY_ID = Number(localStorage.getItem("property_id"));

interface test {
    title: string;
    last_name: string;
    first_name: string;
    local_name_spelling: string | undefined;
    date_of_birth: Date | undefined;
    company: string | undefined;
    position: string | undefined;
  }

const AddGuest: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<test>({
    defaultValues: {
      title: "",
      last_name: "",
      first_name: "",
      local_name_spelling: "",
      date_of_birth: undefined,
      company: "",
      position: "",
    },
  });
  const onSubmit = (data: any) => {
    const newGuestInfo = data;
    newGuestInfo.property_id = PROPERTY_ID;

    axios.post(`${DB_URL}/guest`, newGuestInfo).then((res) => {
      const responseCode = res.status;
      if (responseCode === 201) {
        alert("New guest is successfully added!");
        navigate("/property");
      }
    });
  };

  return (
    <div className="addGuest">
      <main>
        <h2>Register</h2>
        <div className="addGuestForm">
          <form onSubmit={handleSubmit(onSubmit)}>

          <div className="addGuestInput">
              <label htmlFor="title">
                Title <span>*</span>
              </label>
              <input
                type="text"
                id="title"
                {...register("title", { required: "this is required" })}
              />
            </div>

            <div className="addGuestInput">
              <label htmlFor="firstname">
                First Name <span>*</span>
              </label>
              <input
                type="text"
                id="firstname"
                {...register("first_name", { required: "this is required" })}
              />
            </div>

            <div className="addGuestInput">
              <label htmlFor="lastname">
                Last Name <span>*</span>
              </label>
              <input
                type="text"
                id="lastname"
                {...register("last_name", { required: "this is required" })}
              />
            </div>

            <div className="addGuestInput">
              <label htmlFor="local_name">
                Alternate Name
              </label>
              <input
                type="text"
                id="local_name"
                {...register("local_name_spelling")}
              />
            </div>

            <div className="addGuestInput">
              <label htmlFor="date_of_birth">
                Birthdate
              </label>
              <input
                type="date"
                id="date_of_birth"
                {...register("date_of_birth")}
              />
            </div>

            <div className="addGuestInput">
              <label htmlFor="company">
                Company
              </label>
              <input
                type="text"
                id="company"
                {...register("company")}
              />
            </div>

            <div className="addGuestInput">
              <label htmlFor="position">
                Position
              </label>
              <input
                type="text"
                id="position"
                {...register("position")}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AddGuest;