import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function RequestList(props) {
  return (
    <>
      <tr>
        <td>{props.idx + 1}</td>
        <td className="flex justify-start items-center">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar1.png"
            alt={props.complaint}
          />
          <a href="#" className="user-link">
            {props.name}
          </a>
        </td>
        <td className="text-center">
          <span className="label label-default">{props.complaint}</span>
        </td>
        <td>
          <a href="#">{props.contact}</a>
        </td>
        <td>{props.createdAt.substring(0, 10)}</td>
        <td>
          <Link to={props._id}>
            <Button type="button" text="Check" />
          </Link>
        </td>
      </tr>
    </>
  );
}

export default RequestList;
