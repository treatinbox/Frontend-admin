import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URl } from "../api";
import { isAutheticated } from "../auth/authHelper";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import BreadCumb from "../BreadCumb";

function FooterLogo(props) {
  const [State, setState] = useState({
    logo: "",
    logoPreview: "",
  });

  const { token } = isAutheticated();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(`${API_URl}/admin/view_logo`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data?.data);
      setState({
        logo: res.data.data[0]?.logo,
        logoPreview: res.data.data[0]?.logo,
      });
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    if (e.target.files.length === 0 || !e.target.files[0]) {
      alert("Please upload a valid Image");
      return;
    }
    setState({
      ...State,
      [e.target.name]: e.target.files[0],
      logoPreview: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = async (e) => {
    if (data[0]?._id) {
      const formData = new FormData();
      formData.append("file", State.logo);
      let resData = await axios.patch(
        `${API_URl}/admin/update_logo`,
        formData,
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
      const formData = new FormData();
      formData.append("file", State.logo);
      let res = await axios.post(`${API_URl}/admin/add_logo`, formData, {
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
                  <h4 className="mb-0">Logo</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <BreadCumb/>
                      </li>
                      <li className="breadcrumb-item active">Logo</li>
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
                        <h1 className="text-left head-small">Logo</h1>
                        <form>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group mb-30 width-100 row">
                                <label className="col-md-4 control-label">
                                  Upload Logo
                                  <br />
                                  <span className="size">(148 x 48 px)</span>
                                </label>
                                <div className="col-md-8">
                                  <input
                                    name="logo"
                                    onChange={handleChange}
                                    type="file"
                                    className="form-control input-field"
                                  />
                                  <div className="LogoImage">
                                    {State.logoPreview !== "" && (
                                      <img src={State.logoPreview} />
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group text-left">
                                <button
                                  onClick={handleSubmit}
                                  type="button"
                                  disabled={true}
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

export default FooterLogo;
