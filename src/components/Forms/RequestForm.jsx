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
  mlasAndAreas,
  setSelectedArea,
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
      <div style={{ width: "100%", background: "lime", margin: "6px 0" }}>
        <select
          style={{
            width: "100%",
            padding: "5px 10px",
            border: "3px solid #9b9b9b",
          }}
          defaultValue="Select Area"
          onChange={(e) => setSelectedArea(e.target.value)}
        >
          <option>Select Area</option>
          {mlasAndAreas &&
            mlasAndAreas.map((ele, idx) => {
              return (
                <option key={idx} value={`${ele.area}`}>
                  {ele.area}
                </option>
              );
            })}
        </select>
      </div>
      {/* <div style={{ width: "100%", background: "lime", margin: "6px 0" }}>
        <select
          style={{
            width: "100%",
            padding: "5px 10px",
            border: "3px solid #9b9b9b",
          }}
          defaultValue="Select MLA"
          onChange={(e) =>
            handleSelectMlaAndArea(
              e.target.value,
              e.target.value.substring(
                e.target.value.length - 2,
                e.target.value.length
              )
            )
          }
        >
          <option>Select MLA</option>
          {mlasAndAreas &&
            mlasAndAreas.map((ele, idx) => {
              return (
                <option
                  value={`${ele.name}${idx < 10 ? "0" + idx : idx}`}
                  key={idx}
                >
                  {ele.name}
                </option>
              );
            })}
        </select>
      </div> */}
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
        placeholder="Complaint For"
        name="complaintAbout"
        id="complaintAbout"
        for="complaintAbout"
        label="Complaint For"
        value={complaintAbout}
        onchange={handleChange}
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
      <Button type="submit" text="Send Request" className="my-3" width="40%" />
    </>
  );
}

export default RequestForm;
