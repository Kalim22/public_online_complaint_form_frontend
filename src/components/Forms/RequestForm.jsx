import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

function RequestForm({
  handleChange,
  name,
  mobileNumber,
  voterIdNumber,
  area,
  mlaName,
  complaintAbout,
  description,
  fileHandler,
}) {
  return (
    <>
      <Input
        type="text"
        placeholder="Name"
        name="name"
        id="name"
        for="name"
        label="Name"
        value={name}
        onchange={handleChange}
      />
      <Input
        type="text"
        placeholder="UserId"
        name="mobileNumber"
        id="mobileNumber"
        for="mobileNumber"
        label="Enter your email or Mobile Number"
        value={mobileNumber}
        onchange={handleChange}
      />
      <Input
        type="text"
        placeholder="Voter Id Number"
        name="voterIdNumber"
        id="voterIdNumber"
        for="voterIdNumber"
        label="Voter Id Number"
        value={voterIdNumber}
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
        type="text"
        placeholder="Mla Name"
        name="mlaName"
        id="mlaName"
        for="mlaName"
        label="Mla Name"
        value={mlaName}
        onchange={handleChange}
      />
      <Input
        type="text"
        placeholder="Complaint"
        name="complaintAbout"
        id="complaintAbout"
        for="complaintAbout"
        label="Complaint"
        value={complaintAbout}
        onchange={handleChange}
      />
      <Input
        type="file"
        // placeholder="Description"
        name="description"
        id="description"
        for="description"
        label="Select Photo"
        onchange={fileHandler}
      />
      <Input
        type="text"
        placeholder="Description"
        name="description"
        id="description"
        for="description"
        label="Description"
        value={description}
        onchange={handleChange}
      />
      <Button type="submit" text="Send Request" className="my-5" width="40%" />
    </>
  );
}

export default RequestForm;
