import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URl } from "../api";
import { isAutheticated } from "../auth/authHelper";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import BreadCumb from "../BreadCumb";

function FooterLinks(props) {
  const [State, setState] = useState({
    link1: "",
    url1: "",
    link2: "",
    url2: "",
    link3: "",
    url3: "",
    link4: "",
    url4: "",
  });
  const { token } = isAutheticated();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(`${API_URl}/admin/view_link`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data?.data);
      setState({
        link1: res.data?.data[0]?.link1,
        url1: res.data?.data[0]?.url1,
        link2: res.data?.data[0]?.link2,
        url2: res.data?.data[0]?.url2,
        link3: res.data?.data[0]?.link3,
        url3: res.data?.data[0]?.url3,
        link4: res.data?.data[0]?.link4,
        url4: res.data?.data[0]?.url4,
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
        `${API_URl}/admin/update_link`,
        {
          link1: State.link1,
          url1: State.url1,
          link2: State.link2,
          url2: State.url2,
          link3: State.link3,
          url3: State.url3,
          link4: State.link4,
          url4: State.url4,
        },
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
      let res = await axios.post(
        `${API_URl}/admin/add_link`,
        {
          link1: State.link1,
          url1: State.url1,
          link2: State.link2,
          url2: State.url2,
          link3: State.link3,
          url3: State.url3,
          link4: State.link4,
          url4: State.url4,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
                  <h4 className="mb-0">Links</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <BreadCumb/>
                      </li>
                      <li className="breadcrumb-item active">Links</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}

            {/* <!-- Row Starts -->              */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12 col-lg-9 col-xl-7">
                        <form>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Link 1 Name
                                </label>
                                <input
                                  value={State.link1}
                                  name="link1"
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  URL
                                </label>
                                <input
                                  value={State.url1}
                                  name="url1"
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Row Ends --> */}
            {/* <!-- Row Starts -->              */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12 col-lg-9 col-xl-7">
                        <form>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Link 2 Name
                                </label>
                                <input
                                  value={State.link2}
                                  name="link2"
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  URL
                                </label>
                                <input
                                  value={State.url2}
                                  name="url2"
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Row Ends --> */}
            {/* <!-- Row Starts -->              */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12 col-lg-9 col-xl-7">
                        <form>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Link 3 Name
                                </label>
                                <input
                                  value={State.link3}
                                  name="link3"
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  URL
                                </label>
                                <input
                                  value={State.url3}
                                  name="url3"
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Row Ends --> */}
            {/* <!-- Row Starts -->              */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12 col-lg-9 col-xl-7">
                        <form>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Link 4 Name
                                </label>
                                <input
                                  value={State.link4}
                                  name="link4"
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  URL
                                </label>
                                <input
                                  value={State.url4}
                                  name="url4"
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Row Ends --> */}
            {/* <!-- Row Starts -->              */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12 col-lg-9 col-xl-7">
                        <form>
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
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Row Ends --> */}
          </div>
          {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}

        <Footer />
      </div>
    </div>
  );
}

export default FooterLinks;
