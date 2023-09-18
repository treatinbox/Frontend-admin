import React, { useEffect, useState } from "react";
import { NavL, NavLink, NavLinkinkNavLink } from "react-router-dom";

function Sidebar(props) {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="vertical-menu" style={sideBar ? { width: 80 } : null}>
      {/* <!-- LOGO --> */}
      <div className="navbar-brand-box ">
        {!sideBar && (
          <NavLink to="/dashboard" className="logo logo-dark ">
            <span className="logo-lg text-left font-size-20 text-black">
              <strong className="fs-4">Treat In Box</strong>
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
        font-size-20
        header-item
        waves-effect
        vertical-menu-btn
       
      "
        onClick={() => setSideBar((prev) => !prev)}
      >
        {sideBar ? (
          <span
            className="logo-sm text-left mr-2 "
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

      <div data-simplebar className="sidebar-menu-scroll border border-top-1">
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
                {!sideBar && <span>Franchisees</span>}
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

            {!sideBar && (
              <li className="d-flex  w-100 justify-content-between1">
                <div className="w-100 ">
                  <a>
                    <img alt="img" src="/assets/images/icons/cms-icon.png" />
                    <span className="">Footer Settings</span>
                  </a>

                  <ul className="sub-menu1 mx-3 display-menu1">
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
                      <NavLink to="/application">Application Name</NavLink>
                    </li>
                    <li>
                      <NavLink to="/copyrights">Copyright</NavLink>
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
