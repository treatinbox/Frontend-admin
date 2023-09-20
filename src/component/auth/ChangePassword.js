import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import swal from "sweetalert";
import { isAutheticated } from "./authHelper";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { API_URl } from "../api";
import BreadCumb from "../BreadCumb";

function ChangePassword(props) {
  let history = useNavigate();
  const [user, setUser] = useState({
    password: "",
    confirmPassword: "",
  });

  const token = isAutheticated();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (user.password === user.confirmPassword) {
      axios
        .post(
          `${API_URl}/signin_admin_reset_password`,
          {
            ...user,
            email: token.user,
          },
          {
            headers: {
              authorization: `Bearer ${token.token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          if (response?.status === 201) {
            swal("Success", "Password Reset Successfully", "success");
          }
          setLoading(false);
          history.push("/dashboard");
        })
        .catch((err) => {
          swal({
            title: "Invalid credentials!",
            icon: "error",
            text: err.message,
          });
        });
    } else {
      swal("Error", "Password and Confirm Password not Match", "error");
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const applicationName = JSON.parse(localStorage.getItem("application"))||"Tiffin Mate";
  return (
    <div>
      <Sidebar />
      <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Reset Password</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <BreadCumb/>
                      </li>
                      <li className="breadcrumb-item active">Reset Password</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary welcome-text">
                        Welcome Back !
                      </h5>
                      <p className="text-muted">
                        Reset Password <strong>{applicationName}</strong>
                      </p>
                    </div>
                    <div className="p-2 mt-4">
                      <form>
                        <div className="form-group">
                          <label for="username">Email</label>
                          <input
                            name="email"
                            value={token.user}
                            type="text"
                            className="form-control input-field"
                            placeholder="Enter Email ID"
                          />
                        </div>

                        <div className="form-group">
                          <label for="userpassword">Password</label>
                          <input
                            value={user.password}
                            name="password"
                            onChange={handleChange}
                            type="text"
                            className="form-control input-field"
                            placeholder="Enter password"
                          />
                        </div>
                        <div className="form-group">
                          <label for="userpassword">Confirm Password</label>
                          <input
                            value={user.confirmPassword}
                            name="confirmPassword"
                            onChange={handleChange}
                            type="text"
                            className="form-control input-field"
                            placeholder="Enter confirm password"
                          />
                        </div>

                        <div className="mt-3 text-right">
                          <button
                            onClick={handleSubmit}
                            className="btn btn-primary w-sm waves-effect waves-light"
                          >
                            <ClipLoader
                              color="blue"
                              loading={loading}
                              size={20}
                            />
                            {!loading && "Reset Password"}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}

        <Footer />
      </div>
    </div>
  );
}

export default ChangePassword;
