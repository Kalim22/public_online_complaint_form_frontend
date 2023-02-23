import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

function UserLoginForm({ handleChange, username, userpassword }) {
  return (
    <>
      <Input
        type="text"
        placeholder="Username"
        name="username"
        id="username"
        for="username"
        label="Username"
        value={username}
        onchange={handleChange}
      />
      <Input
        type="password"
        placeholder="Password"
        name="userpassword"
        id="userpassword"
        for="userpassword"
        label="Password"
        value={userpassword}
        onchange={handleChange}
      />
      <Button type="submit" text="Login" className="my-5" width="40%" />
    </>
  );
}

export default UserLoginForm;
