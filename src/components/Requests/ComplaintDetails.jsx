import React from "react";
import { BiUserCircle, BiGitPullRequest } from "react-icons/bi";
import {
  MdOutlineContactPhone,
  MdAreaChart,
  MdOutlineDescription,
} from "react-icons/md";
import { AiOutlineIdcard } from "react-icons/ai";

function ComplaintDetails(props) {
  return (
    <>
      <div id="containers">
        <div className="product-details">
          <li
            className=""
            style={{
              color: "#2E86AB",
            }}
          >
            <BiUserCircle size={19} />
            <span>{props.name}</span>
          </li>
          <li>
            <MdOutlineContactPhone />
            <span>{props.contact}</span>
          </li>
          <li>
            <AiOutlineIdcard />
            <span>{props.voterid}</span>
          </li>
          <li>
            <MdAreaChart />
            <span>{props.area}</span>
          </li>
          <li>
            <BiGitPullRequest />
            <span>{props.complaint}</span>
          </li>
          <li>
            <MdOutlineDescription size={50} />
            <span>{props.description}</span>
          </li>
        </div>

        <div className="product-image">
          <img
            src={`http://localhost:8000/uploads/${props.photo}`}
            alt={props.complaint}
          />
        </div>
      </div>
    </>
  );
}

export default ComplaintDetails;

// "https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
