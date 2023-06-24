import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

import { API_URl } from "../api";
import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

function ContactRequestView(props) {
  const { id } = useParams();
  const [demo, setDemo] = useState(null);
  useEffect(() => {
    const getDemo = async () => {
      let { data } = await axios.get(`${API_URl}/view_demo_id/${id}`);
      setDemo(data.data);
    };
    getDemo();
  }, [id]);
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
                  <h4 className="mb-0">Contact Requests</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Treat in Box</Link>
                      </li>
                      <li className="breadcrumb-item">Contact Requests</li>

                      <li className="breadcrumb-item">View Details</li>
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
                      <div className="col-md-12 col-lg-6 col-xl-6">
                        <h1 className="text-left head-small">View Details</h1>

                        {demo && (
                          <form>
                            <div className="row mt-20">
                              <div className="col-md-4 font-b">Name</div>
                              <div className="col-md-8">{demo.name}</div>
                            </div>
                            <div className="row mt-20">
                              <div className="col-md-4 font-b">Email</div>
                              <div className="col-md-8">{demo.email}</div>
                            </div>
                            <div className="row mt-20">
                              <div className="col-md-4 font-b">Message</div>
                              <div className="col-md-8">{demo.message}</div>
                            </div>
                            {demo.contact_number && (
                              <div className="row mt-20">
                                <div className="col-md-4 font-b">
                                  Contact Number
                                </div>
                                <div className="col-md-8">
                                  {demo.contact_number}
                                </div>
                              </div>
                            )}
                            {demo.country && (
                              <div className="row mt-20">
                                <div className="col-md-4 font-b">Country</div>
                                <div className="col-md-8">{demo.country}</div>
                              </div>
                            )}
                            <div className="row mt-20">
                              <div className="col-md-4 font-b">
                                Date and Time
                              </div>
                              <div className="col-md-8">
                                {new Date(demo.time_slot).getDate() > 9
                                  ? new Date(demo.time_slot).getDate()
                                  : "0" + new Date(demo.time_slot).getDate()}
                                {"-"}
                                {new Date(demo.time_slot).getMonth() + 1 > 9
                                  ? new Date(demo.time_slot).getMonth() + 1
                                  : "0" +
                                    (new Date(demo.time_slot).getMonth() + 1)}
                                {"-"}
                                {new Date(demo.time_slot).getFullYear()}{" "}
                                {demo.time_slot
                                  .split("T")[1]
                                  .split(".")[0]
                                  .substr(0, 5)}
                              </div>
                            </div>
                            {demo.ip_address && (
                              <div className="row mt-20">
                                <div className="col-md-4 font-b">IP</div>
                                <div className="col-md-8">
                                  {demo.ip_address}
                                </div>
                              </div>
                            )}

                            <div className="row mt-20">
                              <div className="col-md-4 font-b">Status</div>
                              <div className="col-md-8">{demo.status}</div>
                            </div>

                            <div className="row mt-20">
                              <div className="col-lg-12">
                                <div className="form-group text-left">
                                  <Link to={`/demo/request`}>
                                    <button
                                      type="button"
                                      className="btn btn-success btn-login waves-effect waves-light mr-3"
                                    >
                                      Back
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </form>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* <!-- end table-responsive --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- container-fluid --> */}
        <Footer />
      </div>
    </div>
  );
}

export default ContactRequestView;
