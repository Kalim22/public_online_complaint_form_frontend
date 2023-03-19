import React, { useState } from "react";

// Framer Motion
import { motion } from "framer-motion";

// Forms
import UserRegisterForm from "../../components/Forms/UserRegisterForm";
import MlaRegisterForm from "../../components/Forms/MlaRegisterForm";

import Button from "../../components/Button/Button";

// axios package
import axios from "axios";
// Toastify
import { ToastContainer, toast } from "react-toastify";
import { getStatus } from "../../utils/Status";
import { useNavigate } from "react-router-dom";
import Help from "../../components/Help";

const variants1 = {
  show: { translateY: 0 },
  hide: { translateY: -620 },
};

function Register() {
  const BASE_URL = import.meta.env.VITE_SERVER_URL;

  let color = {
    blue: "#2e86ab",
    gray: "#9b9b9b",
    white: "#fff",
    black: "#000",
  };

  const navigate = useNavigate();

  const [isShow, setIsShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const [text, setText] = useState({
    userName: "",
    userId: "",
    voterId: "",
    gender: "",
    userPassword: "",
    userConfirmPassword: "",
    mlaUserName: "",
    governmentId: "",
    area: "",
    mlaPassword: "",
    mlaConfirmPassword: "",
  });

  const {
    userName,
    userId,
    voterId,
    gender,
    userPassword,
    userConfirmPassword,
    mlaUserName,
    governmentId,
    area,
    mlaPassword,
    mlaConfirmPassword,
  } = text;

  const handleChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  const userRegister = async (e) => {
    e.preventDefault();
    try {
      if (
        !(userName && userId && voterId && userPassword && userConfirmPassword)
      ) {
        return;
      }
      if (gender === "") {
        alert("Please select gender!");
        return;
      }

      setLoading(true);
      const url = `${BASE_URL}/user-registration`;
      const body = {
        name:
          userName.trim().charAt(0).toUpperCase() +
          userName.substring(1, userName.length).trim().toLowerCase(),
        email_phone: userId,
        voterid: voterId,
        gender: gender.charAt(0).toUpperCase(),
        password: userPassword,
        confirmpassword: userConfirmPassword,
      };
      const res = await axios.post(url, body);
      const data = res.data;
      setLoading(false);
      getStatus(
        data.status,
        2000,
        "Congrulation, Your account has been created successfully! \n Please Login"
      );

      setText({
        userName: "",
        userId: "",
        voterId: "",
        userPassword: "",
        userConfirmPassword: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const mlaRegister = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const url = `${BASE_URL}/mla-registration`;
      const body = {
        name: mlaUserName,
        governmentid: governmentId.toUpperCase(),
        area:
          area.charAt(0).toUpperCase() +
          area.substring(1, area.length).toLowerCase(),
        password: mlaPassword,
        confirmpassword: mlaConfirmPassword,
      };
      const res = await axios.post(url, body);
      const data = res.data;
      setLoading(false);
      getStatus(
        data.status,
        2000,
        "Congrulation, Your account has been created successfully! \n Please Login"
      );

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#2e86ab",
        }}
      >
        <h1
          style={{
            fontSize: "100px",
            fontWeight: "600",
            color: " #9b9b9b",
          }}
        >
          Loading....
        </h1>
      </div>
    );
  }

  return (
    <>
      <section
        style={{ width: "100%", height: "130vh", position: "relative" }}
        className="flex  items-center bg-slate-100 flex-col"
      >
        <Help />

        <ToastContainer
          position="top-right"
          autoClose="2000"
          draggable
          pauseOnHover
        />
        <div
          style={{ width: "40%", height: "78%" }}
          className="overflow-hidden p-2"
        >
          <motion.div
            style={{ width: "100%", height: "100%" }}
            className="flex items-end px -3 text-3xl mb-2 flex-col overflow-hidden"
            variants={variants1}
            animate={isShow ? "show" : "hide"}
          >
            <form onSubmit={userRegister} style={{ width: "100%" }}>
              <UserRegisterForm
                userRegister={userRegister}
                handleChange={handleChange}
                userName={userName}
                userId={userId}
                voterId={voterId}
                gender={gender}
                userPassword={userPassword}
                userConfirmPassword={userConfirmPassword}
              />
            </form>
          </motion.div>
          <motion.div
            style={{
              width: "100%",
              height: "100%",
            }}
            className="flex justify-center items-end text-3xl mt-2 flex-col"
            variants={variants1}
            animate={isShow ? "show" : "hide"}
          >
            <form onSubmit={mlaRegister} style={{ width: "100%" }}>
              <MlaRegisterForm
                handleChange={handleChange}
                mlaUserName={mlaUserName}
                governmentId={governmentId}
                mlaPassword={mlaPassword}
                mlaConfirmPassword={mlaConfirmPassword}
              />
            </form>
          </motion.div>
        </div>
        <div
          className="flex justify-end items-center my-5 auth-options"
          style={{ width: "40%" }}
        >
          <p className="text-3xl font-bold mx-5 ">Sign up as a </p>
          <Button
            type="button"
            onclick={() => setIsShow((isShow) => !isShow)}
            text={isShow ? "MLA" : "User"}
          />
        </div>
      </section>
    </>
  );
}

export default Register;
