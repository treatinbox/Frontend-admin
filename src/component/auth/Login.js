import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { isAutheticated } from "./authHelper";
// import { API_URl } from "../api";
import swal from "sweetalert";
import { useEffect } from "react";
import { API_URl } from "../api";
function Login(props) {
  let history = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [forgot, setForgot] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const { token } = isAutheticated();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleForgotChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setForgot(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(!loading);
    axios
      .post(`${API_URl}/signin_admin`, { ...user })
      .then((response) => {
        setLoading(false);
        localStorage.setItem(
          "auth",
          JSON.stringify({
            user: user.email,
            token: response.data.token,
          })
        );
        history("/dashboard");
      })
      .catch((err) => {
        swal({
          title: "Invalid credentials!",
          icon: "error",
        });
        setLoading(false);
      });
  };

  const forgotPasswordHandler = (e) => {
    e.preventDefault();
    if (!forgot) {
      swal({
        title: "Email Address Missing!",
        icon: "error",
      });
    } else {
      setLoading(!loading);
      axios
        .post(`${API_URl}/forgot_password_admin`, { forgot })
        .then((response) => {
          setLoading(false);
          if (response.data.success) {
            swal({
              title: "Successfull forgot password!",
              text: "password sent to your email address",
              icon: "success",
            });
            setForgotPassword(false);
          } else {
            return swal({
              title: "something error!",
              text: "Email is incorrect",
              icon: "error",
            });
          }
        })
        .catch((err) => {
          return swal({
            title: "something error occured!",
            icon: "error",
          });
        });
    }
  };

  useEffect(() => {
    if (isAutheticated() === false) {
      history("/");
    } else {
      if (token) {
        history("/dashboard");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="wrapperLogin ">
      <div className="container  mx-auto h-100 row flex-wrap align-items-center pt-sm-5">
        <div className="leftWrapperLogin text-center col-lg-6">
          <div className="loginContentWithImage mt-4">
            <div className="textLogin"></div>
            <h5 className="text-primary fs-3">
            <strong>Admin Login</strong>
            </h5>
            <div className="loginCOntent">
              <p>
            Access the Tiffin Mate control center to manage franchisees, dishes, and orders with ease
              </p>
            </div>
            <div className="loginImage">
              <img
                className="img-size"
                src="/assets/images/login.png"
                alt="login"
              />
            </div>
          </div>
        </div>

        <div className="rightWrapperLogin col-lg-6 ">
          <div className="authentication-bg ">
            <div className="account-pages ">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-12 col-lg-12 col-xl-9">
                  <div className="card py-5">
                    <div className="card-body p-4">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="text-center">
                            <a href="/" className="mb-5 d-block auth-logo">
                              <img
                                src="./treat.png"
                                alt=""
                                height="60"
                                className="logo logo-dark"
                              />
                              <img
                                src="./treat.png"
                                alt=""
                                height="40"
                                className="logo logo-light"
                              />
                            </a>
                          </div>
                        </div>
                      </div>

                    
                      <div className="p-2 ">
                        {!forgotPassword ? (
                          <form>
                            <div className="form-group">
                              <label for="username">Email</label>
                              <input
                                name="email"
                                value={user.email}
                                onChange={handleChange}
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

                            <div className="mt-3 text-right">
                              <div
                                className="forgetPassword"
                                style={{ cursor: "pointer" }}
                                onClick={() => setForgotPassword(true)}
                              >
                                {/* <Link to="/forgotPassword"> </Link> */}
                                <p className="text-primary">
                                  Forgot your password?
                                </p>
                              </div>

                              <button
                                onClick={handleSubmit}
                                className="btn btn-block btn-primary w-sm waves-effect waves-light"
                              >
                                <ClipLoader
                                  color="blue"
                                  loading={loading}
                                  size={20}
                                />
                                {!loading && "Log In"}
                              </button>
                            </div>
                          </form>
                        ) : (
                          <form>
                            <div className="form-group">
                              <label for="username">Email</label>
                              <input
                                name="email"
                                onChange={handleForgotChange}
                                type="text"
                                className="form-control input-field"
                                placeholder="Enter Email ID"
                                required={true}
                                autoComplete="off"
                              />
                            </div>
                            <div className="mt-3 d-flex gap-3 justify-content-end">
                              <button
                                onClick={() => setForgotPassword(false)}
                                className="btn btn-primary w-sm "
                              >
                                Back
                              </button>
                              <button
                                onClick={(e) => forgotPasswordHandler(e)}
                                className="btn btn-primary w-sm waves-effect waves-light"
                              >
                                <ClipLoader
                                  color="blue"
                                  loading={loading}
                                  size={20}
                                />
                                {!loading && "Forgot Password"}
                              </button>
                            </div>
                          </form>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end row --> */}
            </div>
            {/* <!-- end container --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
