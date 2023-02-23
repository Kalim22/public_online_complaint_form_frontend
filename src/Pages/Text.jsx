import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function Text() {
  const [name, setName] = useState("");
  const [file, setFile] = useState();

  const [profile, setProfile] = useState([]);

  const register = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/profile";
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("photo", file);
    const res = await axios.post(url, formdata);
    const data = await res.data;
  };

  const fetchData = async () => {
    const urls = "http://localhost:8000/getprofile";
    const res = await fetch(urls);
    const data = await res.json();
    setProfile(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section
        className="flex justify-center items-center flex-col my-5"
        style={{ width: "100%" }}
      >
        <div className="flex justify-center items-center">
          <form onSubmit={register}>
            <input
              type="text"
              placeholder="enter your name..."
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              accept="image/*"
            />
            <input type="submit" value="submit" />
          </form>
        </div>
        <div className="flex justify-center items-center my-12 flex-col">
          {profile.map((ele, idx) => {
            return (
              <div key={idx}>
                <p>{ele.name}</p>
                <img src={`http://localhost:8000/uploads/${ele.photo}`} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Text;
