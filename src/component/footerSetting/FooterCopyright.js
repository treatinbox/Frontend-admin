import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URl } from "../api";
import { isAutheticated } from "../auth/authHelper";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import BreadCumb from "../BreadCumb";

function FooterCopyrights(props) {
  const [State, setState] = useState({
    copyright: "",
  });
  const { token } = isAutheticated();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(`${API_URl}/admin/view_copyright`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data?.data);
      setState({
        copyright: res.data?.data[0]?.copyright,
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
        `${API_URl}/admin/update_copyright`,
        {
          copyright: State.copyright,
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
        `${API_URl}/admin/add_copyright`,
        {
          copyright: State.copyright,
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
                  <h4 className="mb-0">Copyright</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <BreadCumb/>
                      </li>
                      <li className="breadcrumb-item active">Copyright</li>
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
                                  Copyright
                                </label>
                                <input
                                  value={State.copyright}
                                  name="copyright"
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

export default FooterCopyrights;
