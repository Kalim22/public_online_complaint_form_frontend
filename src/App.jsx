import { useEffect } from "react";

// StyleSheet
import "./App.css";
import "./styles/style.css";

// toastify style css
import "react-toastify/dist/ReactToastify.css";

// bootstarp style css
import "bootstrap/dist/css/bootstrap.min.css";

// Components & Pages
import BeforeLoginNavbar from "./components/Navbar/BeforeLoginNavbar";
import Register from "./Pages/Login/Register";
import Login from "./Pages/Login/Login";
import UserHomePage from "./Pages/Homepage/UserHomepage";
import MlaNavbar from "./components/Navbar/MlaNavbar";
import UserNavbar from "./components/Navbar/UserNavbar";
import MlaHomepage from "./Pages/Homepage/MlaHomepage";
import Profile from "./Pages/Profile/Profile";
import RequestDetails from "./Pages/RequestDetails/RequestDetails";
import Text from "./Pages/Text";
// Protected Routes
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

// React router
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const auth = localStorage.getItem("auth");

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    if (!auth) {
      return navigate("/login");
    }
  }, [auth]);

  const userType = localStorage.getItem("userType");

  return (
    <>
      {!auth ? (
        <BeforeLoginNavbar />
      ) : userType === "user" ? (
        <UserNavbar logOut={logOut} />
      ) : (
        <MlaNavbar logOut={logOut} />
      )}
      <Routes>
        {userType === "user" ? (
          <Route
            path="/"
            element={
              <ProtectedRoutes auth={auth}>
                <UserHomePage />
              </ProtectedRoutes>
            }
          />
        ) : (
          <Route
            path="/"
            element={
              <ProtectedRoutes auth={auth}>
                <MlaHomepage />
              </ProtectedRoutes>
            }
          />
        )}
        <Route
          path="/profile"
          element={
            <ProtectedRoutes auth={auth}>
              <Profile />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/:request"
          element={
            <ProtectedRoutes auth={auth}>
              <RequestDetails />
            </ProtectedRoutes>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/text" element={<Text />} />
      </Routes>
    </>
  );
}

export default App;
