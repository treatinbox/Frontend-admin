import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { SiIledefrancemobilites } from "react-icons/si";
import {
  FaBorderStyle,
  FaProductHunt,
  FaHackerNewsSquare,
  FaUserTag,
  FaRegCopyright,
} from "react-icons/fa";
import { BiSolidContact, BiSolidRename } from "react-icons/bi";
import { MdEmojiNature, MdAddReaction } from "react-icons/md";
import { FcSettings } from "react-icons/fc";
import { SlSocialDropbox } from "react-icons/sl";

function Sidebar(props) {
  const [sideBar, setSideBar] = useState(false);
  const applicationName = JSON.parse(localStorage.getItem('application'))||"Tiffin Mate"


  return (
    <div className="vertical-menu" style={sideBar ? { width: 80 } : null}>
      {/* <!-- LOGO --> */}
      <div className="navbar-brand-box ">
        {!sideBar && (
          <NavLink to="/dashboard" className="logo logo-dark ">
            <span className="logo-lg text-left font-size-20 text-black">
              <strong className="fs-4">{applicationName}</strong>
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
            <li>
              <NavLink to="/dashboard">
                <RiDashboardFill size={20} />
                {!sideBar && <span className="mx-2">Dashboard</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/client">
                <SiIledefrancemobilites size={20} />
                {!sideBar && <span className="mx-2">Franchisees</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/orders">
                <FaBorderStyle size={20} />
                {!sideBar && <span className="mx-2">Orders</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/product">
                <FaProductHunt size={20} />
                {!sideBar && <span className="mx-2">Products</span>}
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
                <FaHackerNewsSquare size={20} />
                {!sideBar && (
                  <span className="mx-2">Newsletter Subscribers</span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts/request">
                <BiSolidContact size={20} />
                {!sideBar && <span className="mx-2">Contact Requests</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/demo/request">
                <MdEmojiNature size={20} />
                {!sideBar && <span className="mx-2">Demo Requests</span>}
              </NavLink>
            </li>

            {!sideBar && (
              <li className="d-flex w-100 justify-content-between1">
                <div className="w-100 ">
                  <a>
                    <FcSettings size={20} />
                    <span className="mx-2">Footer Settings</span>
                  </a>

                  <ul
                    className="sub-menu mx-3 display-menu"
                    style={{ position: "relative", left: "-2em" }}
                  >
                    <li>
                      <NavLink to="/social" style={{ paddingLeft: "3em" }}>
                        <SlSocialDropbox size={20} />

                        <span className="mx-2">Social Media</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/address" style={{ paddingLeft: "3em" }}>
                        <MdAddReaction size={20} />
                        <span className="mx-2">Address</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/logo" style={{ paddingLeft: "3em" }}>
                        <FaUserTag size={20} />

                        <span className="mx-2">Logo</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/application" style={{ paddingLeft: "3em" }}>
                        <BiSolidRename size={20} />

                        <span className="mx-2">Application Name</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/copyrights" style={{ paddingLeft: "3em" }}>
                        <FaRegCopyright size={20} />

                        <span className="mx-2">Copyright</span>
                      </NavLink>
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
