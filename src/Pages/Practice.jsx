import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Practice() {
  const [list, setList] = useState([]);

 let url = 'http://localhost:8000/mla-registration'

 let jsonurl = "http://localhost:5000/listofmlas"

  const body = {
    name: "",
    area: "",
    partyName: "",
    mlaId: "",
    password: "",
  };

  const fetchmlalist = async () => {
    const res = await fetch(jsonurl)
    const data = await res.json()
    setList(data)
    console.log(data)
  }

  const rest = () => {
    list.map((ele, idx) => {
      body.name = ele.mlaname
      body.area = ele.locality
      body.partyName = ele.partyname
      body.mlaId = `${ele.locality.toLowerCase().split(' ').join('')+ele.mlaname.toLowerCase().split(' ').join('')}`
      body.password = `${ele.locality.toLowerCase().split(' ').join('')}@12${idx}`
      addMla()
    })
  }

  const addMla = async () => {
    const res = await axios.post(url, body)
    const data = await res.data
    console.log(data)
  }

  useEffect(() => {
    fetchmlalist()
  }, [])

  
  return (
    <>
      <div>
        <button onClick={rest}>click</button>
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
