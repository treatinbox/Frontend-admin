import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated, signout } from "../component/auth/authHelper";
import Avatar from "react-avatar";
import { API_URl } from "./api";

function Header(props) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
  });
  const { token } = isAutheticated();
  useEffect(() => {
    axios
      .get(`${API_URl}/admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const userdata = response.data.data;
        setData({
          ...data,
          firstName: userdata.firstName,
          lastName: userdata.lastName,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex align-items-center ">
          {/* <!-- LOGO --> */}
          <span className="logo-lg mx-3 text-left font-size-20 text-black">
            <img src={"/treat.png"} alt="treat" height="50" />
            {/*<img
        alt="img" src={logo} alt="" height="40" style={{ paddingRight: 25 }} /> */}
          </span>
          <div className="navbar-brand-box">
            <a href="/" className="logo logo-light1">
              <span className="logo-sm">
                <img src="./treat.png" alt="" height="40" />
              </span>
              <span className="logo-lg">
                <img src="./treat.png" alt="" />
              </span>
            </a>
          </div>

          <button
            type="button"
            className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
          >
            <i className="fa fa-fw fa-bars"></i>
          </button>
        </div>

        <div className="d-flex">
          {/* <!--Start Settings Dropdown --> */}
          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="profile-drop btn header-item waves-effect"
              id="page-header-user-dropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {/* profile logo */}
              <Avatar
                name={data && data.firstName + data.lastName}
                round={true}
                size="36"
                textSizeRatio={0.5}
              />
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              {/* <!-- item--> */}
              <Link className="dropdown-item" to="#">
                <span className="align-middle">Profile</span>
              </Link>
              <Link className="dropdown-item" to="/resetPassword">
                <span className="align-middle">Change Password</span>
              </Link>
              <span onClick={signout}>
                <Link className="dropdown-item" to="/">
                  <span className="align-middle">Sign out</span>
                </Link>
              </span>
            </div>
          </div>
          {/* <!--End Settings Dropdown --> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
