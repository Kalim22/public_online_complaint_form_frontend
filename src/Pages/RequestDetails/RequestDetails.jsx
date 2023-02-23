import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ComplaintDetails from "../../components/Requests/ComplaintDetails";

import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

function RequestDetails() {
  const params = useParams();
  const _id = params.request;

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState([]);

  const fetchUserDetails = async () => {
    const url = `${BASE_URL}/request-details/${_id}`;
    const res = await axios.get(url);
    const data = await res.data;
    setUserDetails(data.details);
    console.log(data);
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <>
      <div className="container-fluid relative">
        <Button
          type="button"
          text="Go Back"
          onclick={() => navigate(-1)}
          className="absolute"
        />
        <h1
          className="text-3xl font-bold text-center my-5 pb-2"
          style={{
            color: "#2E86AB",
            textTransform: "capitalize",
            border: "2px solid #9b9b9b",
          }}
        >
          Complaint Details
        </h1>
      </div>
      {userDetails.map((ele, idx) => {
        const {
          userName,
          userMobileNumber,
          voterIdNumber,
          complaintAbout,
          area,
          description,
          photo,
        } = ele;
        return (
          <ComplaintDetails
            key={idx}
            name={userName}
            contact={userMobileNumber}
            voterid={voterIdNumber}
            area={area}
            complaint={complaintAbout}
            description={description}
            photo={photo}
          />
        );
      })}
    </>
  );
}

export default RequestDetails;
