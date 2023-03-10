import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import RequestList from "../../components/Homepage/RequestList";

function MlaHomepage() {
  const BASE_URL = import.meta.env.VITE_SERVER_URL;
  const [requestList, setRequestList] = useState([]);

  const location = useLocation();
  const place = location.state.mlaDetails.mlaDetails.area;

  const getRequestList = async () => {
    const url = `${BASE_URL}/get-request/${place}`;
    const res = await axios.get(url);
    const data = await res.data;
    setRequestList(data.requests);
  };

  useEffect(() => {
    getRequestList();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <h1
          className="text-3xl font-bold text-center my-5 pb-2"
          style={{
            color: "#2E86AB",
            textTransform: "capitalize",
            border: "2px solid #9b9b9b",
          }}
        >
          Request list of all users
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box clearfix">
              <div className="table-responsive">
                {requestList.length < 1 ? (
                  <h1 className="text-center text-3xl font-bold tracking-wide text-slate-400">
                    Currently, There is no request available right now!
                  </h1>
                ) : (
                  <table className="table user-list">
                    <thead>
                      <tr>
                        <th>
                          <span>S.No.</span>
                        </th>
                        <th>
                          <span>User</span>
                        </th>
                        <th className="text-center">
                          <span>Complaint</span>
                        </th>
                        <th>
                          <span>Email</span>
                        </th>
                        <th>
                          <span>Date</span>
                        </th>
                        <th>
                          <span>Link</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {requestList.map((ele, idx) => {
                        const {
                          _id,
                          userName,
                          complaintAbout,
                          userMobileNumber,
                          createdAt,
                        } = ele;
                        return (
                          <RequestList
                            key={idx}
                            idx={idx}
                            name={userName}
                            contact={userMobileNumber}
                            complaint={complaintAbout}
                            createdAt={createdAt}
                            _id={_id}
                          />
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MlaHomepage;
