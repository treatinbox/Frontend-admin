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
  const [constact, setContact] = useState(null);
  useEffect(() => {
    const getContact = async () => {
      let { data } = await axios.get(`${API_URl}/view_contact_id/${id}`);
      setContact(data.data);
    };
    getContact();
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

                        {constact && (
                          <form>
                            <div className="row mt-20">
                              <div className="col-md-4 font-b">Name</div>
                              <div className="col-md-8">{constact.name}</div>
                            </div>
                            <div className="row mt-20">
                              <div className="col-md-4 font-b">Email</div>
                              <div className="col-md-8">
                                {constact.contact_no}
                              </div>
                            </div>
                            <div className="row mt-20">
                              <div className="col-md-4 font-b">Message</div>
                              <div className="col-md-8">
                                {constact.description}
                              </div>
                            </div>
                            <div className="row mt-20">
                              <div className="col-md-4 font-b">
                                Date and Time
                              </div>
                              <div className="col-md-8">
                                {new Date(constact.createdAt).getDate() > 9
                                  ? new Date(constact.createdAt).getDate()
                                  : "0" +
                                    new Date(constact.createdAt).getDate()}
                                {"-"}
                                {new Date(constact.createdAt).getMonth() + 1 > 9
                                  ? new Date(constact.createdAt).getMonth() + 1
                                  : "0" +
                                    (new Date(constact.createdAt).getMonth() +
                                      1)}
                                {"-"}
                                {new Date(
                                  constact.createdAt
                                ).getFullYear()}{" "}
                                {constact.createdAt
                                  .split("T")[1]
                                  .split(".")[0]
                                  .substr(0, 5)}
                              </div>
                            </div>
                            {constact.ip_address && (
                              <div className="row mt-20">
                                <div className="col-md-4 font-b">IP</div>
                                <div className="col-md-8">
                                  {constact.ip_address}
                                </div>
                              </div>
                            )}

                            <div className="row mt-20">
                              <div className="col-md-4 font-b">Status</div>
                              <div className="col-md-8">{constact.status}</div>
                            </div>

                            <div className="row mt-20">
                              <div className="col-lg-12">
                                <div className="form-group text-left">
                                  <Link to={`/contacts/request`}>
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
