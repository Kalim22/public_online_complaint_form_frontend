import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

function MlaForm({
  handleChange,
  mlaUserName,
  governmentId,
  area,
  mlaPassword,
  mlaConfirmPassword,
}) {
  return (
    <>
      <Input
        type="text"
        placeholder="MLA Name"
        name="mlaUserName"
        id="mlaUserName"
        for="mlaUserName"
        label="Mla Name"
        value={mlaUserName}
        onchange={handleChange}
      />
      <Input
        type="text"
        placeholder="Government Id"
        name="governmentId"
        id="governmentId"
        for="governmentId"
        label="Government Id"
        value={governmentId}
        onchange={handleChange}
      />
      <Input
        type="text"
        placeholder="Area"
        name="area"
        id="area"
        for="area"
        label="Area"
        value={area}
        onchange={handleChange}
      />
      <Input
        type="password"
        placeholder="Password"
        name="mlaPassword"
        id="mlaPassword"
        for="mlaPassword"
        label="Password"
        value={mlaPassword}
        onchange={handleChange}
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        name="mlaConfirmPassword"
        id="mlaConfirmPassword"
        for="mlaConfirmPassword"
        label="Confirm Password"
        value={mlaConfirmPassword}
        onchange={handleChange}
      />
      <Button type="submit" text="Register" className="my-5" width="40%" />
    </>
  );
}

export default MlaForm;
