import React, { useEffect, useState } from "react";
import { NavL, NavLink, NavLinkinkNavLink } from "react-router-dom";

function Sidebar(props) {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="vertical-menu" style={sideBar ? { width: 80 } : null}>
      {/* <!-- LOGO --> */}
      <div className="navbar-brand-box">
        {!sideBar && (
          <NavLink to="/dashboard" className="logo logo-dark">
            <span className="logo-lg text-left font-size-20 text-white">
              <strong>Treat In Box</strong>
              {/*<img
            alt="img" src={logo} alt="" height="40" style={{ paddingRight: 25 }} /> */}
            </span>
          </NavLink>
        )}
      </div>

      <button
        type="button"
        className="
        btn btn-sm
        px-3
        text-white
        font-size-16
        header-item
        waves-effect
        vertical-menu-btn
      "
        onClick={() => setSideBar((prev) => !prev)}
      >
        {sideBar ? (
          <span
            className="logo-sm text-left mr-2 text-white"
            style={{ fontSize: "1.6rem" }}
          >
            <strong>TIB</strong>
            {/*<img
          alt="img" src={logo} alt="" height="25" width="50" />12 */}
          </span>
        ) : (
          <i className="fa fa-fw fa-bars"></i>
        )}
      </button>

      <div data-simplebar className="sidebar-menu-scroll">
        {/* <!--- Sidebar Begins --> */}
        <div id="sidebar-menu">
          {/* <!-- Left Menu Start --> */}
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="">
              <NavLink to="/dashboard">
                <img
                  alt="img"
                  src="/assets/images/icons/dashboard-icon.png"
                  style={sideBar ? { width: 25 } : null}
                />
                {!sideBar && <span>Dashboard</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/client">
                <img
                  alt="img"
                  src="/assets/images/icons/viewer-icon.png"
                  style={sideBar ? { width: 25 } : null}
                />
                {!sideBar && <span>Clients</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/orders">
                <img
                  alt="img"
                  src="/assets/images/icons/viewer-icon.png"
                  style={sideBar ? { width: 25 } : null}
                />
                {!sideBar && <span>Orders</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/product">
                <img
                  alt="img"
                  src="/assets/images/icons/viewer-icon.png"
                  style={sideBar ? { width: 25 } : null}
                />
                {!sideBar && <span>Products</span>}
              </NavLink>
            </li>
            {/* <li>
                        <a>
                        <img
                        alt="img" src="/assets/images/icons/revenue-icon.png"/>
                        <span>Revenue Management</span>
                        </a>
                        <ul className="sub-menu display-menu">
                        <li><NavLink to="/orders">Orders </NavLink></li>
                        <li><NavLink to="/payment/settings">Payment Setting</NavLink></li>
                        </ul>
                    </li> */}
            <li>
              <NavLink to="/newsletter">
                <img
                  alt="img"
                  src="/assets/images/icons/log-icon.png"
                  style={sideBar ? { width: 25 } : null}
                />
                {!sideBar && <span>Newsletter Subscribers</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts/request">
                <img
                  alt="img"
                  src="/assets/images/icons/log-icon.png"
                  style={sideBar ? { width: 25 } : null}
                />
                {!sideBar && <span>Contact Requests</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/demo/request">
                <img
                  alt="img"
                  src="/assets/images/icons/log-icon.png"
                  style={sideBar ? { width: 25 } : null}
                />
                {!sideBar && <span>Demo Requests</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/home/settings">
                <img
                  alt="img"
                  src="/assets/images/icons/log-icon.png "
                  style={sideBar ? { width: 25 } : null}
                />
                {!sideBar && <span>Home Page Settings</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/email-templates">
                <img
                  alt="img"
                  src="/assets/images/icons/email-template-icon.png"
                  style={sideBar ? { width: 25 } : null}
                />
                {!sideBar && <span>Email Templates</span>}
              </NavLink>
            </li>

            {!sideBar && (
              <li className="d-flex  justify-content-between">
                <div>
                  <a>
                    <img alt="img" src="/assets/images/icons/cms-icon.png" />
                    <span>Footer Settings</span>
                  </a>

                  <ul className="sub-menu display-menu">
                    <li>
                      <NavLink to="/social">Social Media</NavLink>
                    </li>
                    <li>
                      <NavLink to="/address">Address</NavLink>
                    </li>
                    <li>
                      <NavLink to="/logo">Logo</NavLink>
                    </li>
                    <li>
                      <NavLink to="/NavLinks">NavLinks</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="px-2 mt-2 text-white"></div>
              </li>
            )}
          </ul>
        </div>
        {/* <!-- Sidebar Ends --> */}
      </div>
    </div>
  );
}

export default Sidebar;
