import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Practice() {
  const [list, setList] = useState([]);

  const fetchdata = async () => {
    const res = await fetch("http://localhost:5000/listofmlas");
    const data = await res.json();
    console.log(data);
    setList(data);
  };

  const body = {
    sno: "71",
    locality: "kalim ali",
    mlaname: "New york",
    partyname: "own party",
    mlaid: "narelas",
    password: "nare123",
  };

  let url = "http://localhost:5000/listofmlas";

  const formdata = new FormData();
  formdata.append("sno", "71");
  formdata.append("locality", "new york");
  formdata.append("mlaname", "kali ali");
  formdata.append("partyname", "wonfd sal");
  formdata.append("mlaid", "jdslfkjsadl");
  formdata.append("password", "qwerwqlr");

  const changename = async () => {
    const res = await axios.post(url, formdata);
    const data = await res.data;
    console.log(data);
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <div>
        <button onClick={changename}>click</button>
        {list &&
          list.map((ele, idx) => {
            return (
              <div key={idx}>
                <p>{ele.mlaname}</p>
                <p>{ele.locality}</p>
                <p>{ele.partyname}</p>
                <p>{ele.mlaid}</p>
                <p>{ele.password}</p>
                <p>{ele.sno}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Practice;
