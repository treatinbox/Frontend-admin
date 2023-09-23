import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { API_URl } from "../api";
import BreadCumb from "../BreadCumb";
import Footer from "../Footer";
import { isAutheticated } from "../auth/authHelper";

function ClientView(props) {
  const { id } = useParams();
  const { token } = isAutheticated();
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${API_URl}/admin_users/${id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          // console.log(res.data)
          // const fetchedData = res.data.data;
          // const client = fetchedData.filter((item) => item._id === id)[0];
          setData(res.data);
          // console.log(client);
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
                        <BreadCumb />
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
                          <b>Unique Client ID</b>
                        </td>
                        <td>{data?.user?._id}</td>
                      </tr>
                          <tr>
                            <td width="20%">
                              <b>First Name</b>
                            </td>
                            <td>{data?.user?.firstName}</td>
                          </tr>
                          <tr>
                            <td width="20%">
                              <b>Last Name</b>
                            </td>
                            <td>{data?.user?.lastName}</td>
                          </tr>
                          <tr>
                            <td width="20%">
                              <b>Email</b>
                            </td>
                            <td>{data?.user?.email}</td>
                          </tr>
                          <tr>
                            <td width="20%">
                              <b>User Name</b>
                            </td>
                            <td>{data?.user?.username}</td>
                          </tr>

                          <tr>
                            <td width="20%">
                              <b>Contact Number</b>
                            </td>
                            <td>{data?.address?.contact_number}</td>
                          </tr>
                         
                          <tr>
                            <td width="20%">
                              <b>Companay Name</b>
                            </td>
                            <td>{data?.address?.company_name}</td>
                          </tr>
                          <tr>
                          <td width="20%">
                            <b>Country</b>
                          </td>
                          <td>{data?.address?.country}</td>
                        </tr>
                          <tr>
                            <td width="20%">
                              <b>State</b>
                            </td>
                            <td>{data?.address?.state}</td>
                          </tr>
                          <tr>
                            <td width="20%">
                              <b>City</b>
                            </td>
                            <td>{data?.address?.city}</td>
                          </tr>
                          <tr>
                            <td width="20%">
                              <b>Address</b>
                            </td>
                            <td>{data?.address?.AdminAddress}</td>
                          </tr>
                          <tr>
                            <td width="20%">
                              <b>Pin Code</b>
                            </td>
                            <td>{data?.address?.pincode}</td>
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

        <Footer />
      </div>
    </div>
  );
}

export default ClientView;
