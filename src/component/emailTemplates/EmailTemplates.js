import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URl } from "../api";
import { isAutheticated } from "../auth/authHelper";
import Footer from "../Footer";
import axios from "axios";
import Header from "../Header";
import Sidebar from "../Sidebar";

const EmailTemplate = () => {
  const { token } = isAutheticated();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      console.log(token, "token");
      axios
        .get(`${API_URl}/api/email`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, [token]);

  const handleSuspend = (id, status) => {
    const newStatus = status === "active" ? "inactive" : "active";
    axios
      .put(
        `${API_URl}/api/email/${id}`,
        {
          status: newStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        alert("Status changed successfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
    alert("Status changed successfully!");
    window.location.reload();
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    let d = date.toDateString(dateStr);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let strTime = hours + ":" + minutes + " " + ampm;
    return d + ", " + strTime;
  };
  return (
    <>
      <Sidebar />
      <Header />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Email Template</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/dashboard">TellyTell</Link>
                      </li>
                      <li className="breadcrumb-item">Email Template</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row ml-0 mr-0  mb-10">
                      <div className="col-sm-12 col-md-6"></div>
                    </div>
                    <div className="table-responsive table-shoot">
                      <table className="table table-centered table-nowrap mb-0">
                        <thead className="thead-light">
                          <tr>
                            <th>Title</th>
                            <th>Updated On</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          {data?.map((item) => (
                            <tr key={item._id}>
                              <td>{item.title}</td>
                              <td>{formatDate(item.updatedAt)}</td>
                              <td>
                                {item.status === "active" ? (
                                  <span className="badge badge-pill badge-success font-size-12">
                                    Active
                                  </span>
                                ) : (
                                  <span className="badge badge-pill badge-danger font-size-12">
                                    Inactive
                                  </span>
                                )}
                              </td>
                              <td>
                                <Link to={`email-templates/${item._id}`}>
                                  <button
                                    type="button"
                                    className="btn btn-primary btn-sm  waves-effect waves-light btn-table ml-2"
                                  >
                                    Edit
                                  </button>
                                </Link>
                                {item.status === "active" ? (
                                  <button
                                    type="button"
                                    className="btn btn-danger btn-sm  waves-effect waves-light btn-table ml-2"
                                    id="sa-params"
                                    onClick={() =>
                                      handleSuspend(item._id, item.status)
                                    }
                                  >
                                    Suspend
                                  </button>
                                ) : (
                                  <button
                                    type="button"
                                    className="btn btn-warning btn-sm  waves-effect waves-light btn-table ml-2"
                                    id="sa-params"
                                    onClick={() =>
                                      handleSuspend(item._id, item.staus)
                                    }
                                  >
                                    Activate
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default EmailTemplate;
