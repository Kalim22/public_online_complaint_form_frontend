import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import UserLoginForm from "../../components/Forms/UserLoginForm";
import MlaLoginForm from "../../components/Forms/MlaLoginForm";
import Button from "../../components/Button/Button";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { loginStatus } from "../../features/login/LoginSlice";
import { getStatus } from "../../utils/Status";

const variants1 = {
  show: { translateY: 0 },
  hide: { translateY: -485 },
};

function Login() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const selector = useSelector();

  const [isShow, setIsShow] = useState(false);

  const [statusLogin, setStatusLogin] = useState(null);

  const auth = localStorage.getItem("auth");

  const [text, setText] = useState({
    username: "",
    userpassword: "",
    mlausername: "",
    mlapassword: "",
  });

  const { username, userpassword, mlausername, mlapassword } = text;

  const handleChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  const userLogin = async (e) => {
    e.preventDefault();
    // dispatch(loginStatus(url, {username, userpassword}))
    const url = `${BASE_URL}/user-login`;
    const body = {
      email_phone: username,
      password: userpassword,
    };

    const res = await axios.post(url, body);
    const data = await res.data;
    getStatus(data.status, 1800, "Login Successfully...");
    localStorage.setItem("auth", JSON.stringify(data.user));
    localStorage.setItem("userType", data.type);
    setStatusLogin(data);
  };

  const mlaLogin = async (e) => {
    e.preventDefault();
    const url = `${BASE_URL}/mla-login`;
    const body = {
      governmentid: mlausername,
      password: mlapassword,
    };
    const res = await axios.post(url, body);
    const data = await res.data;
    getStatus(data.status, 1800, "Login Successfully...");
    localStorage.setItem("auth", JSON.stringify(data));
    localStorage.setItem("userType", data.type);
    setStatusLogin(data);
  };

  useEffect(() => {
    if (auth) {
      setTimeout(() => {
        return navigate("/", { state: { mlaDetails: statusLogin } });
      }, 3500);
    }
  }, [auth]);

  return (
    <>
      <section
        style={{ width: "100%", height: "100vh", position: "relative" }}
        className="flex justify-center items-center bg-slate-100 flex-col"
      >
        <ToastContainer
          position="top-right"
          autoClose="2000"
          draggable
          pauseOnHover
        />
        <div
          style={{ width: "40%", height: "75%" }}
          className="overflow-hidden p-2"
        >
          <motion.div
            style={{ width: "100%", height: "100%" }}
            className="flex items-end justify-center px -3 text-3xl mb-2 flex-col overflow-hidden"
            variants={variants1}
            animate={isShow ? "show" : "hide"}
          >
            <form
              onSubmit={userLogin}
              style={{ width: "100%" }}
              className="flex items-end justify-center flex-col"
            >
              <UserLoginForm
                width="100%"
                handleChange={handleChange}
                username={username}
                userpassword={userpassword}
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
            <form
              onSubmit={mlaLogin}
              style={{ width: "100%" }}
              className="flex items-end justify-center flex-col"
            >
              <MlaLoginForm
                width="100%"
                handleChange={handleChange}
                mlausername={mlausername}
                mlapassword={mlapassword}
              />
            </form>
          </motion.div>
        </div>
        <div
          className="flex justify-end items-center my-5 auth-options"
          style={{ width: "40%" }}
        >
          <p className="text-3xl font-bold mx-5">Login as a </p>
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

export default Login;
