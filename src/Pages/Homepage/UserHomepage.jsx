import axios from "axios";
import { setAutoFreeze } from "immer";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import RequestForm from "../../components/Forms/RequestForm";
import GridPhoto from "../../components/Homepage/GridPhoto";

function Homepage() {
  const navigate = useNavigate();

  const BASE_URL = import.meta.env.VITE_SERVER_URL;

  const [file, setFile] = useState();

  const [text, setText] = useState({
    name: "",
    mobileNumber: "",
    voterIdNumber: "",
    area: "",
    mlaName: "",
    complaintAbout: "",
    description: "",
  });

  const {
    name,
    mobileNumber,
    voterIdNumber,
    area,
    mlaName,
    complaintAbout,
    description,
  } = text;

  const fileHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  const addRequest = async (e) => {
    e.preventDefault();
    const url = `${BASE_URL}/add-request`;

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    const formData = new FormData();
    formData.append(
      "userName",
      name.charAt(0).toUpperCase().trim() +
      name.substring(1, name.length).trim()
    );
    formData.append("userMobileNumber", parseInt(mobileNumber));
    formData.append("voterIdNumber", voterIdNumber.toUpperCase());
    formData.append(
      "area",
      area.charAt(0).trim() + area.substring(1, area.length).trim()
    );
    formData.append("mlaName", mlaName);
    formData.append("complaintAbout", complaintAbout);
    formData.append("photo", file);
    formData.append("description", description);

    const res = await axios.post(url, formData);
    const data = await res.data;
    status(data.status);

    setTimeout(() => {
      setText({
        name: "",
        mobileNumber: "",
        voterIdNumber: "",
        area: "",
        mlaName: "",
        complaintAbout: "",
        description: "",
      })
      setFile()
    }, 2600)

  };

  const status = (status) => {
    if (status === "success") {
      const resolveStatus = new Promise((resolve, reject) =>
        setTimeout(resolve, 2000)
      );
      toast.promise(resolveStatus, {
        pending: "wait! we are sending your request...",
        success: "Your complaint has been registered successfully",
        error: "Something went wrong!",
      });
    } else {
      toast.error("Refresh the page and please try again!");
    }
  };
  return (
    <>
      <ToastContainer position="top right" autoClose={2000} />
      <section
        className="flex justify-center items-center py-2 px-2 bg-slate-100 relative"
        style={{ height: "100vh", overflow: "hidden", width: "100%" }}
      >
        <div className="w-3/5" style={{ overflowY: "scroll", height: "100%" }}>
          <GridPhoto />
        </div>
        <div className="w-2/5 px-5">
          <form
            onSubmit={addRequest}
            className="flex justify-center items-end flex-col"
            style={{ width: "100%" }}
          >
            <RequestForm
              handleChange={handleChange}
              name={name}
              mobileNumber={mobileNumber}
              voterIdNumber={voterIdNumber}
              area={area}
              mlaName={mlaName}
              complaintAbout={complaintAbout}
              description={description}
              fileHandler={fileHandler}
            />
          </form>
        </div>
      </section>
    </>
  );
}

export default Homepage;
