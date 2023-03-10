import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

function Profile() {
  const userData = localStorage.getItem("auth");

  const user = JSON.parse(userData);


  return (
    <>
      <section className="bg-slate-100 py-14">
        <div className="container-fluid relative">
          <Button
            type="button"
            text="Go Back"
            onclick={() => navigate(-1)}
            className="absolute"
          />
          <h1
            className="text-3xl font-bold text-center pb-2"
            style={{
              color: "#2E86AB",
              textTransform: "capitalize",
              border: "2px solid #9b9b9b",
            }}
          >
            Profile
          </h1>
        </div>
        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row container d-flex justify-content-center">
              <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                  <div className="row m-l-0 m-r-0">
                    <div className="col-sm-4 bg-c-lite-green user-profile">
                      <div className="card-block text-center text-white">
                        <div className="m-b-25 flex justify-center items-center">
                          <img
                            src="https://img.icons8.com/bubbles/100/000000/user.png"
                            className="img-radius"
                            alt="User-Profile-Image"
                          />
                        </div>
                        <p className="text-xl font-bold">{user.name}</p>
                        <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <div className="card-block">
                        <p className="m-b-20 p-b-5 b-b-default text-2xl font-bold">
                          Information
                        </p>
                        <div className="row">
                          <div className="col-sm-7">
                            <p className="m-b-10 f-w-600">Email / Phone</p>
                            <h6 className="text-muted f-w-400">
                              {user.email_phone}
                            </h6>
                          </div>
                          <div className="col-sm-5">
                            <p className="m-b-10 f-w-600">Voter Id</p>
                            <h6 className="text-muted f-w-400">
                              {user.voterid}
                            </h6>
                          </div>
                        </div>
                        <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                          Bio
                        </h6>
                        <div className="row">
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Gender</p>
                            <h6 className="text-muted f-w-400">
                              {user.gender}
                            </h6>
                          </div>
                          <div className="col-sm-6">
                            {/* <p className="m-b-10 f-w-600">Most Viewed</p>
                          <h6 className="text-muted f-w-400">
                            Dinoter husainm
                          </h6> */}
                          </div>
                        </div>
                        <ul className="social-link list-unstyled m-t-40 m-b-10">
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="facebook"
                              data-abc="true"
                            >
                              <i
                                className="mdi mdi-facebook feather icon-facebook facebook"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="twitter"
                              data-abc="true"
                            >
                              <i
                                className="mdi mdi-twitter feather icon-twitter twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title=""
                              data-original-title="instagram"
                              data-abc="true"
                            >
                              <i
                                className="mdi mdi-instagram feather icon-instagram instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
