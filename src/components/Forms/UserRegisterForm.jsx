import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

function UserForm({
  userRegister,
  handleChange,
  userName,
  userId,
  voterId,
  gender,
  userPassword,
  userConfirmPassword,
}) {
  return (
    <>
      <Input
        type="text"
        placeholder="Name"
        name="userName"
        id="userName"
        htmlFor="userName"
        label="Name"
        value={userName}
        onchange={handleChange}
      />
      <Input
        type="text"
        placeholder="UserId"
        name="userId"
        id="userId"
        htmlFor="userId"
        label="Email / Mobile Number"
        value={userId}
        onchange={handleChange}
      />
      <Input
        type="text"
        placeholder="Voter Id Number"
        name="voterId"
        id="voterId"
        htmlFor="voterId"
        label="Voter Id Number"
        value={voterId}
        onchange={handleChange}
      />
      <div
        className=""
        style={{ width: "100%", borderBottom: "2px solid #9b9b9b" }}
      >
        <div>
          <label style={{ color: "#9b9b9b", fontSize: "1.4rem" }}>Gender</label>
        </div>
        <div className="wrapper">
          <input
            type="radio"
            name="gender"
            value="Male"
            id="option-1"
            onChange={handleChange}
            checked={gender === "Male"}
          />
          <input
            type="radio"
            name="gender"
            value="Female"
            id="option-2"
            checked={gender === "Female"}
            onChange={handleChange}
          />
          <label htmlFor="option-1" className="option option-1">
            <div className="dot"></div>
            <span>Male</span>
          </label>
          <label htmlFor="option-2" className="option option-2">
            <div className="dot"></div>
            <span>Female</span>
          </label>
        </div>
      </div>
      <Input
        type="password"
        placeholder="Password"
        name="userPassword"
        id="userPassword"
        htmlFor="userPassword"
        label="Password"
        value={userPassword}
        onchange={handleChange}
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        name="userConfirmPassword"
        id="userConfirmPassword"
        htmlFor="userConfirmPassword"
        label="Confirm Password"
        value={userConfirmPassword}
        onchange={handleChange}
      />
      <Button
        type="submit"
        // onclick={userRegister}
        text="Register"
        className="my-5"
        width="40%"
      />
    </>
  );
}

export default UserForm;
