import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URl } from "../api";
import { isAutheticated } from "../auth/authHelper";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

function FooterAddress(props) {
  const [State, setState] = useState({
    company_name: "",
    AdminAddress: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    website: "",
    contact_number: "",
    email: "",
  });
  const { token } = isAutheticated();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(`${API_URl}/admin/view_address`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data?.data);
      setState({
        company_name: res.data.data[0]?.company_name,
        AdminAddress: res.data.data[0]?.AdminAddress,
        city: res.data.data[0]?.city,
        state: res.data.data[0]?.state,
        country: res.data.data[0]?.country,
        pincode: res.data.data[0]?.pincode,
        website: res.data.data[0]?.website,
        contact_number: res.data.data[0]?.contact_number,
        email: res.data.data[0]?.email,
      });
    };
    fetchData();
  }, []);
  const handleChange = (e) => {
    setState({
      ...State,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    if (data[0]?._id) {
      let resData = await axios.patch(
        `${API_URl}/admin/update_address`,
        State,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (resData) {
        window.location.reload();
      }
    } else {
      let res = await axios.post(`${API_URl}/admin/add_address`, State, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        window.location.reload();
      }
    }
  };

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
                  <h4 className="mb-0">Address</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Treat in Box</Link>
                      </li>
                      <li className="breadcrumb-item active">Address</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12 col-lg-9 col-xl-7">
                        <h1 className="text-left head-small">Address</h1>
                        <form>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  htmlFor="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Company Name
                                </label>
                                <input
                                  value={State.company_name}
                                  name="company_name"
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  htmlFor="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Address
                                </label>
                                <input
                                  value={State.AdminAddress}
                                  name="AdminAddress"
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  htmlFor="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  City
                                </label>
                                <input
                                  value={State.city}
                                  name="city"
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  htmlFor="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  State
                                </label>
                                <input
                                  value={State.state}
                                  name="state"
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  htmlFor="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Country
                                </label>
                                <input
                                  value={State.country}
                                  name="country"
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  htmlFor="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Pincode
                                </label>
                                <input
                                  value={State.pincode}
                                  name="pincode"
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  htmlFor="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Website
                                </label>
                                <input
                                  value={State.website}
                                  name="website"
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  htmlFor="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Contact Number
                                </label>
                                <input
                                  value={State.contact_number}
                                  name="contact_number"
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  htmlFor="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Email
                                </label>
                                <input
                                  value={State.email}
                                  name="email"
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group text-left">
                                <button
                                  onClick={handleSubmit}
                                  type="button"
                                  className="btn btn-success btn-login waves-effect waves-light mr-3"
                                >
                                  Save
                                </button>
                                <a href="#">
                                  <button
                                    type="button"
                                    className="btn btn-success btn-cancel waves-effect waves-light mr-3"
                                    onClick={() => window.location.reload()}
                                  >
                                    Cancel
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                    {/* <!-- end table-responsive --> */}

                    {/* <!-- end table-responsive --> */}
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

export default FooterAddress;
