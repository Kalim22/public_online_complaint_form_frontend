import React, { useState } from "react";

import { motion } from "framer-motion";

import { MdHelpCenter, MdClose } from "react-icons/md";
import { instructions, listofmlas } from "../assets/data/NotificationList";

function Help() {
  let color = {
    blue: "#2e86ab",
    gray: "#9b9b9b",
    white: "#fff",
    black: "#000",
  };

  const [showModal, setShowModal] = useState(0);
  const [showInstruction, setShowInstruction] = useState(true);
  const [showExample, setShowExample] = useState(false);

  const handleShowExample = () => {
    setShowInstruction(false);
    setShowExample(true);
  };

  const handleShowInstruction = () => {
    setShowInstruction(true);
    setShowExample(false);
  };

  return (
    <>
      <div
        style={{
          // width: "20px",
          // height: "20px",
          position: "absolute",
          top: "10px",
          left: "10px",
        }}
      >
        <MdHelpCenter size={30} onClick={() => setShowModal(1)} />
      </div>
      <motion.div
        animate={{ scale: showModal }}
        style={{
          width: "90%",
          height: "500px",
          zIndex: 10,
          background: "white",
          position: "absolute",
          top: "5px",
          // left: "50%",
          margin: "auto",
          boxShadow:
            "2px 2px 2px 0 rgba(0,0,0,0.4), -2px -2px 2px 0 rgba(0,0,0,0.4)",
          flexDirection: "column",
          overflow: "scroll",
        }}
      >
        <MdClose
          size={30}
          style={{
            position: "absolute",
            right: "10px",
            top: "5px",
            cursor: "pointer",
          }}
          onClick={() => setShowModal(0)}
        />
        <div
          style={{
            width: "100%",
            height: "8%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: showInstruction
                ? "2px solid #2e86ab"
                : "2px solid #9b9b9b",
              cursor: "pointer",
            }}
            onClick={handleShowInstruction}
          >
            <p
              style={{
                fontWeight: showInstruction ? "600" : "500",
                color: showInstruction ? "#2e86ab" : "#9b9b9b",
              }}
            >
              Instruction
            </p>
          </div>
          <div
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: showExample
                ? "2px solid #2e86ab"
                : "2px solid #9b9b9b",
            }}
            onClick={handleShowExample}
          >
            <p
              style={{
                fontWeight: showExample ? "600" : "500",
                color: showExample ? "#2e86ab" : "#9b9b9b",
              }}
            >
              Example
            </p>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "92%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            // alignItems: "center",
            // flexDirection: "column",
          }}
        >
          {showInstruction &&
            instructions.map((instruction) => {
              return (
                <p key={instruction.id} style={{ padding: "10px 10px" }}>
                  <span>{instruction.id}</span> : {instruction.step}
                </p>
              );
            })}
          {showExample &&
            listofmlas.map((mlaName) => {
              return (
                <div
                  key={mlaName.sno}
                  style={{
                    background: "pink",
                    margin: 4,
                    position: "relative",
                    overflow: "hidden",
                    padding: "5px 10px",
                    height: "140px",
                    width: "320px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    borderRadius: "3px",
                  }}
                >
                  <p
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "10px",
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      background: color.blue,
                      color: color.white,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow:
                        "2px 2px 2px 0 rgba(0,0,0,0.2), -2px -2px 2px 0 rgba(0,0,0,0.2)",
                    }}
                  >
                    {mlaName.sno}
                  </p>
                  <p>Mla Name : {mlaName.mlaname}</p>
                  <p>Place : {mlaName.locality}</p>
                  <p>Party Name : {mlaName.partyname}</p>
                  <p>
                    Id :{" "}
                    {mlaName.locality.toLowerCase() +
                      mlaName.mlaname.toLowerCase().split(" ").join("")}
                  </p>
                  <p>Password : {`${mlaName.locality.toLowerCase()}123`}</p>
                </div>
              );
            })}
        </div>
      </motion.div>
    </>
  );
}

export default Help;
