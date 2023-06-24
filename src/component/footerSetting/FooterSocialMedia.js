import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URl } from "../api";
import { isAutheticated } from "../auth/authHelper";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

function FooterSocialMedia(props) {
  const { token } = isAutheticated();
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(`${API_URl}/admin/view_social`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFacebook(res.data.data[0]?.facebook);
      setInstagram(res.data.data[0]?.instagram);
      setTwitter(res.data.data[0]?.twitter);
      setLinkedin(res.data.data[0]?.linkedin);
      setId(res.data.data[0]?._id);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    switch (name) {
      case "instagram":
        setInstagram(value);
        break;
      case "facebook":
        setFacebook(value);
        break;
      case "twitter":
        setTwitter(value);
        break;
      case "linkedin":
        setLinkedin(value);
        break;
      default:
        console.log(name);
    }
  };

  const handleSubmit = async (e) => {
    if (id) {
      let resData = await axios.patch(
        `${API_URl}/admin/update_social`,
        {
          facebook: facebook,
          twitter: twitter,
          instagram: instagram,
          linkedin: linkedin,
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
        `${API_URl}/admin/add_social`,
        {
          facebook: facebook,
          twitter: twitter,
          instagram: instagram,
          linkedin: linkedin,
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
                  <h4 className="mb-0">Social Media</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Treat in Box</Link>
                      </li>
                      <li className="breadcrumb-item active">Social Media</li>
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
                        <h1 className="text-left head-small">Social Media</h1>
                        <form>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  htmlFor="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Facebook
                                </label>
                                <input
                                  value={facebook}
                                  name="facebook"
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
                                  Twitter
                                </label>
                                <input
                                  value={twitter}
                                  name="twitter"
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
                                  Instagram
                                </label>
                                <input
                                  value={instagram}
                                  name="instagram"
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
                                  Linkedin
                                </label>
                                <input
                                  value={linkedin}
                                  name="linkedin"
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
                                <button
                                  type="button"
                                  className="btn btn-success btn-cancel waves-effect waves-light mr-3"
                                  onClick={() => window.location.reload()}
                                >
                                  Cancel
                                </button>
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

export default FooterSocialMedia;
