import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

import { API_URl } from "../api";
import { useEffect, useState } from "react";
import axios from "axios";

function DemoRequest(props) {
  const [demoRequests, setDemoRequests] = useState(null);
  useEffect(() => {
    const getDemoRequests = async () => {
      let { data } = await axios.get(`${API_URl}/view_demo`);
      setDemoRequests(data.data);
    };
    getDemoRequests();
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    let d = date.toDateString(dateStr).split(" ");
    return d[2] + " " + d[1] + " " + d[3];
  };

  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
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
                  <h4 className="mb-0">Demo Requests</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Treat in Box</Link>
                      </li>
                      <li className="breadcrumb-item active">Demo Requests</li>
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
                    <div className="row ml-0 mr-0  mb-10">
                      <div className="col-sm-12 col-md-12">
                        <div className="dataTables_length">
                          <label className="w-100">
                            Show{" "}
                            <select
                              name=""
                              className="select-w custom-select custom-select-sm form-control form-control-sm"
                            >
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>{" "}
                            entries
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="table-responsive table-shoot">
                      <table className="table table-centered table-nowrap mb-0">
                        <thead className="thead-light">
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Demo Date</th>
                            <th>Demo Time</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {demoRequests &&
                            demoRequests.map((req) => (
                              <tr key={req._id}>
                                <td>{req.name}</td>
                                <td>{req.email}</td>
                                <td>{formatDate(req.time_slot)}</td>
                                <td>{formatTime(req.time_slot)}</td>
                                <td>
                                  <span className="badge badge-pill badge-soft-success font-size-12">
                                    Read
                                  </span>
                                </td>
                                <td>
                                  <Link to={`/demo/request/view/${req._id}`}>
                                    <button
                                      type="button"
                                      className="btn btn-info btn-sm  waves-effect waves-light btn-table ml-2"
                                    >
                                      View
                                    </button>
                                  </Link>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="row mt-20">
                      <div className="col-sm-12 col-md-6 mb-20">
                        <div
                          className="dataTables_info"
                          id="datatable_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 1 to 10 of 57 entries
                        </div>
                      </div>

                      <div className="col-sm-12 col-md-6">
                        <div className="dataTables_paginate paging_simple_numbers float-right">
                          <ul className="pagination">
                            <li className="paginate_button page-item previous disabled">
                              <a
                                href="#/"
                                aria-controls="datatable"
                                data-dt-idx="0"
                                tabIndex="0"
                                className="page-link"
                              >
                                Previous
                              </a>
                            </li>

                            <li className="paginate_button page-item active">
                              <a
                                href="#/"
                                aria-controls="datatable"
                                data-dt-idx="1"
                                tabIndex="0"
                                className="page-link"
                              >
                                1
                              </a>
                            </li>

                            <li className="paginate_button page-item ">
                              <a
                                href="#/"
                                aria-controls="datatable"
                                data-dt-idx="2"
                                tabIndex="0"
                                className="page-link"
                              >
                                2
                              </a>
                            </li>

                            <li className="paginate_button page-item ">
                              <a
                                href="#/"
                                aria-controls="datatable"
                                data-dt-idx="3"
                                tabIndex="0"
                                className="page-link"
                              >
                                3
                              </a>
                            </li>

                            <li className="paginate_button page-item next">
                              <a href="#/" tabIndex="0" className="page-link">
                                Next
                              </a>
                            </li>
                          </ul>
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
        </div>
        {/* <!-- End Page-content --> */}

        <Footer />
      </div>
    </div>
  );
}

export default DemoRequest;
