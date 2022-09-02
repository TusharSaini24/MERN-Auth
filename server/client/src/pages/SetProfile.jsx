import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { updateProfileRoute } from "../utils/APIRoutes";

const SetProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(undefined);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const run = async () => {
      if (!localStorage.getItem("user")) {
        navigate("/login");
      } else {
        setUser(await JSON.parse(localStorage.getItem("user")));
      }
    };
    run();
  }, []);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const { phoneNumber, gender, destination, dob } = values;
    console.log("handleUpdate");
    const { data } = await axios.post(`${updateProfileRoute}/${user._id}`, {
      phoneNumber,
      gender,
      dob,
      destination,
    });
    navigate("/");
  };
  return (
    <>
      {user && (
        <Container>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={user.username}
              disabled
            />

            <input
              type="email"
              value={user.email}
              placeholder="Email"
              name="email"
              disabled
            />

            <input
              type="date"
              placeholder="Dob"
              name="dob"
              onChange={(e) => handleChange(e)}
            />

            <input
              type="text"
              placeholder="destination"
              name="destination"
              onChange={(e) => handleChange(e)}
            />

            <input
              type="number"
              placeholder="phone Number"
              name="phoneNumber"
              onChange={(e) => handleChange(e)}
            />

            <div className="radio">
              <div className="radio-inside">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={(e) => handleChange(e)}
                />
                <h4>Male</h4>
              </div>
              <div className="radio-inside">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={(e) => handleChange(e)}
                />
                <h4>Female</h4>
              </div>
              <div className="radio-inside">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  onChange={(e) => handleChange(e)}
                />
                <h4>Other</h4>
              </div>
            </div>
            <button type="submit" onClick={handleUpdate}>
              Update
            </button>
          </form>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;

    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      cursor: pointer;
      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }
    input[type="date"]::-webkit-calendar-picker-indicator {
      color: white;
      background-color: #997af0;
      cursor: pointer;
    }
    .radio {
      display: grid;
      grid-template-columns: 30% 30% 30%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
      .radio-inside {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        h4 {
          color: white;
        }
      }
    }
    button {
      background-color: #997af0;
      color: white;
      padding: 1rem 2rem;
      border: none;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.5s ease-in-out;
      &:hover {
        background-color: #4e0eff;
      }
    }
  }
`;

export default SetProfile;
