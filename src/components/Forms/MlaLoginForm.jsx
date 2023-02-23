import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

function MlaLoginForm({ handleChange, mlausername, mlapassword }) {
  return (
    <>
      <Input
        type="text"
        placeholder="Mla Username"
        name="mlausername"
        id="mlausername"
        for="mlausername"
        label="Mla Username"
        value={mlausername}
        onchange={handleChange}
      />
      <Input
        type="password"
        placeholder="MLa Password"
        name="mlapassword"
        id="mlapassord"
        for="mlapassword"
        label="Mla Password"
        value={mlapassword}
        onchange={handleChange}
      />
      <Button type="submit" text="Login" className="my-5" width="40%" />
    </>
  );
}

export default MlaLoginForm;
