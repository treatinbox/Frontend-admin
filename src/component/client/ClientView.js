import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { API_URl } from "../api";
import BreadCumb from "../BreadCumb";
import Footer from "../Footer";

function ClientView(props) {
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = () => {
      axios.get(`${API_URl}/admin_users`).then((res) => {
        const fetchedData = res.data.data;
        const client = fetchedData.filter((item) => item._id === id)[0];
        setData(client);
        console.log(client);
      });
    };

    fetchData();
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
                  <h4 className="mb-0">Franchisees Information</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <BreadCumb/>
                      </li>
                      <li className="breadcrumb-item active">Franchisees</li>
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
                      <div className="col-sm-12 col-md-6"></div>

                      <div className="col-sm-12 col-md-6">
                        <div className="dropdown d-block">
                          <Link to="/client">
                            <button
                              type="button"
                              className="btn btn-primary add-btn waves-effect waves-light float-right"
                            >
                              Back
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive table-shoot">
                      <table className="table table-centered table-nowrap mb-0">
                        <tbody>
                          <tr>
                            <td width="20%">
                              <b>First Name</b>
                            </td>
                            <td>{data?.firstName}</td>
                          </tr>
                          <tr>
                            <td width="20%">
                              <b>Last Name</b>
                            </td>
                            <td>{data?.lastName}</td>
                          </tr>
                          <tr>
                            <td width="20%">
                              <b>Email</b>
                            </td>
                            <td>{data?.email}</td>
                          </tr>
                          <tr>
                            <td width="20%">
                              <b>Joined On</b>
                            </td>
                            <td>
                              {new Date(data?.createdAt)
                                .toDateString(data?.createdAt)
                                .split(" ")
                                .slice(1)
                                .join(" ")}
                            </td>
                          </tr>
                        
                          <tr>
                            <td width="20%">
                              <b>Contact Number</b>
                            </td>
                            <td>{data?.contactNo}</td>
                          </tr>
                          <tr>
                            <td width="20%">
                              <b>Unique Client ID</b>
                            </td>
                            <td>{data?._id}</td>
                          </tr>
                          <tr>
                            <td width="20%">
                              <b>Unique URL</b>
                            </td>
                            <td>https://play.Treat in Box.com/1234</td>
                          </tr>
                          <tr>
                            <td width="20%">
                              <b>Subscription Status</b>
                            </td>
                            <td>Subscribed/Not Subscribed</td>
                          </tr>
                       
                     
                       
                        </tbody>
                      </table>
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

   <Footer/>
      </div>
    </div>
  );
}

export default ClientView;
