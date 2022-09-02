import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logout from "../components/Logout";
import { getUserRoute } from "../utils/APIRoutes";
const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(undefined);
  const [profile, setProfile] = useState(undefined);
  const [isProfileSet, setIsProfileSet] = useState(false);

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

  useEffect(() => {
    const run = async () => {
      if (user) {
        const { data } = await axios.get(`${getUserRoute}/${user._id}`);

        setProfile(data);
        setIsProfileSet(data.isProfileSet);
      } else {
      }
    };
    run();
  }, [user]);

  return (
    <>
      {user && (
        <Container>
          <div className="header">
            <h1 className="header-profile">Profile</h1>
            <Logout />
          </div>
          <div className="profile">
            <div className="profile-inside">
              <h1 className="profile-inside-1">name :</h1>
              <h3>{user.username}</h3>
            </div>
            <div className="profile-inside">
              <h1 className="profile-inside-1">email :</h1>
              <h3>{user.email}</h3>
            </div>
            <div className="profile-inside">
              <h1 className="profile-inside-1">destination :</h1>
              <h3>{isProfileSet ? profile.destination : "no added"}</h3>
            </div>
            <div className="profile-inside">
              <h1 className="profile-inside-1">date of birth :</h1>
              <h3>{isProfileSet ? profile.dob : "no added"}</h3>
            </div>
            <div className="profile-inside">
              <h1 className="profile-inside-1">phone number :</h1>
              <h3>{isProfileSet ? profile.phoneNumber : "no added"}</h3>
            </div>
            <div className="profile-inside">
              <h1 className="profile-inside-1">gender :</h1>
              <h3>{isProfileSet ? profile.gender : "no added"}</h3>
            </div>
            <Link to="/setProfile">UPDATE</Link>
          </div>
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
  .header {
    display: flex;
    width: 100vh;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: white;
      text-transform: uppercase;
      font-weight: 100;
    }
  }
  .profile {
    display: grid;
    grid-template-columns: 50%;
    background-color: #00000076;
    height: 70vh;
    width: 70vw;
    justify-content: center;
    align-items: center;
    .profile-inside {
      display: grid;
      grid-template-columns: 50% 50%;
      justify-content: center;
      h3 {
        color: white;
        font-size: 1.3rem;
        font-weight: 100;
      }
      .profile-inside-1 {
        color: #4e0eff;
        text-transform: capitalize;
        font-weight: 100;
      }
    }
    a {
      background-color: #997af0;
      color: white;
      padding: 1rem 2rem;
      border: none;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.5s ease-in-out;
      text-decoration: none;
      text-align: center;
      &:hover {
        background-color: #4e0eff;
      }
    }
  }
`;

export default Profile;
