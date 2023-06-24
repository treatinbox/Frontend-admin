import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URl } from "../api";
import { isAutheticated } from "../auth/authHelper";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

function ClientAdd(props) {
  const { token } = isAutheticated();
  const history = useNavigate();
  const industries = [
    "Beverages (Chilled)",
    "Books",
    "Cigarettes and Tobacco",
    "Clothing and Accessories",
    "Cosmetics",
    "Combo (Room Temperature + Chilled)",
    "Electronics",
    "Food (Room Temperature)",
    "Food (Chilled)",
    "Grocery",
    "Gifting",
    "Health and Wellness",
    "Vegetables",
    "Other",
  ];

  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    store_name: "",
    industry: "",
    company_name: "",
    country: "",
    state: "",
    city: "",
    address: "",
    pincode: "",
    contact_number: "",
  });

  const handleEdit = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const handleSubmit = () => {
    axios
      .post(`${API_URl}/signup`, {
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email,
        password: data.password,
      })
      .then(async (res) => {
        const token = res.data?.token;

        const store_data = await axios.put(
          `${API_URl}/api/user`,
          {
            store_name: data.store_name,
            industry: data.industry,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const address_data = await axios.put(
          `${API_URl}/api/user/update_address`,
          {
            company_name: data.company_name,
            AdminAddress: data.address,
            city: data.city,
            state: data.state,
            country: data.country,
            pincode: data.pincode,
            contact_number: data.contact_number,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (store_data && address_data) {
          console.log("Success");
          history.push("/client");
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
                  <h4 className="mb-0">Add Client</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Treat in Box</Link>
                      </li>
                      <li className="breadcrumb-item active">Add Client</li>
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
                        <h1 className="text-left head-small">Add Client</h1>
                        <form>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  htmlFor="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  First Name
                                </label>
                                <input
                                  value={data.first_name}
                                  name="first_name"
                                  onChange={handleEdit}
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
                                  Last Name
                                </label>
                                <input
                                  value={data.last_name}
                                  name="last_name"
                                  onChange={handleEdit}
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
                                  value={data.email}
                                  name="email"
                                  onChange={handleEdit}
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
                                  Password
                                </label>
                                <input
                                  value={data.password}
                                  name="password"
                                  onChange={handleEdit}
                                  type="password"
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
                                  Store Name
                                </label>
                                <input
                                  value={data.store_name}
                                  name="store_name"
                                  onChange={handleEdit}
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
                                  Which Industry will the client be operating
                                  in?
                                </label>
                                <select
                                  name="industry"
                                  value={data.industry}
                                  className="form-control input-field"
                                  onChange={handleEdit}
                                >
                                  <option value="">--select--</option>
                                  {industries.map((item, idx) => (
                                    <option value={item} key={idx}>
                                      {item}
                                    </option>
                                  ))}
                                </select>
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
                                  Company Name
                                </label>
                                <input
                                  value={data.company_name}
                                  name="company_name"
                                  onChange={handleEdit}
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
                                  value={data.country}
                                  name="country"
                                  onChange={handleEdit}
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
                                  value={data.state}
                                  name="state"
                                  onChange={handleEdit}
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
                                  value={data.city}
                                  name="city"
                                  onChange={handleEdit}
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
                                  value={data.address}
                                  name="address"
                                  onChange={handleEdit}
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
                                  value={data.pincode}
                                  name="pincode"
                                  onChange={handleEdit}
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
                                  value={data.contact_number}
                                  name="contact_number"
                                  onChange={handleEdit}
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
                                <Link to="/client">
                                  <button
                                    type="button"
                                    className="btn btn-success btn-cancel waves-effect waves-light mr-3"
                                  >
                                    Cancel
                                  </button>
                                </Link>
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

export default ClientAdd;
