import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

import { API_URl } from "../api";
import axios from "axios";
import LoaderBox from "../utils/LoaderBox";
import BreadCumb from "../BreadCumb";
import { isAutheticated } from "../auth/authHelper";

function Client(props) {
  const [data, setData] = useState([]);
  const { token } = isAutheticated();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [showData, setShowData] = useState(data);
  const [loader, setLoader] = useState(true);

  // delete franchise

  const deleteFranchisee = (id) => {
    axios.delete(`${API_URl}/admin_users/${id}`).then((res) => {
      setLoader(false);
      fetchData();
    });
  };

  const suspendFranchise = (email,id) => {
    axios
      .post(
        `${API_URl}/admin_users_suspend/${id}`,
        {email:email},
        {
          headers: {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        }
      )
      .then((res) => {
        setLoader(false);
        fetchData();
      });
  };

  const fetchData = () => {
    axios.get(`${API_URl}/admin_users`).then((res) => {
      setData(res.data.data);
      setLoader(false);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const loadData = () => {
      const indexOfLastPost = currentPage * itemPerPage;
      const indexOfFirstPost = indexOfLastPost - itemPerPage;
      setShowData(data.slice(indexOfFirstPost, indexOfLastPost));
    };

    loadData();
  }, [data, currentPage, itemPerPage]);

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
                  <h4 className="mb-0">Franchisees</h4>

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
                      <div className="col-sm-12 col-md-6">
                        <div className="dataTables_length">
                          <label className="w-100">
                            Show{" "}
                            <select
                              name=""
                              className="select-w custom-select custom-select-sm form-control form-control-sm"
                              value={itemPerPage}
                              onChange={(e) => setItemPerPage(e.target.value)}
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
                      <div className="col-sm-12 col-md-6">
                        <div className="dropdown d-block">
                          <Link to="/client/add">
                            <button
                              type="button"
                              className="btn btn-primary add-btn waves-effect waves-light float-right"
                            >
                              <i className="fa fa-plus" aria-hidden="true"></i>{" "}
                              Add New Franchisee
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <LoaderBox loader={loader} />

                    {!loader && (
                      <div className="table-responsive table-shoot">
                        <table className="table table-centered table-nowrap mb-0">
                          <thead className="thead-light">
                            <tr>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Email</th>
                              <th>Joined On</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {showData.length > 0 &&
                              showData.map((item) => (
                                <tr>
                                  <td>{item.firstName}</td>
                                  <td>{item.lastName}</td>
                                  <td>{item.email}</td>
                                  <td>
                                    {new Date(item.createdAt)
                                      .toDateString(item.createdAt)
                                      .split(" ")
                                      .slice(1)
                                      .join(" ")}
                                  </td>
                                  <td>
                                    <span className="badge badge-pill badge-soft-success font-size-12">
                                      Live
                                    </span>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className={`btn ${item?.suspend?"btn-danger":"btn-success"} btn-sm  waves-effect waves-light btn-table`}
                                      onClick={() =>
                                        suspendFranchise(item?.email,item?._id)
                                      }
                                    >
                                      {!item?.suspend?"Suspend":"UnSuspend"}
                                    </button>
                                    <Link to={`/client/view/${item._id}`}>
                                      <button
                                        type="button"
                                        className="btn btn-info btn-sm  waves-effect waves-light btn-table ml-2"
                                      >
                                        View
                                      </button>
                                    </Link>
                                    <button
                                      type="button"
                                      className="btn btn-danger btn-sm  waves-effect waves-light btn-table ml-2"
                                      onClick={() => deleteFranchisee(item._id)}
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    <div className="row mt-20">
                      <div className="col-sm-12 col-md-6 mb-20">
                        <div
                          className="dataTables_info"
                          id="datatable_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing {currentPage * itemPerPage - itemPerPage + 1}{" "}
                          to {Math.min(currentPage * itemPerPage, data.length)}{" "}
                          of {data.length} entries
                        </div>
                      </div>

                      <div className="col-sm-12 col-md-6">
                        <div className="dataTables_paginate paging_simple_numbers float-right">
                          <ul className="pagination">
                            <li
                              className={
                                currentPage === 1
                                  ? "paginate_button page-item previous disabled"
                                  : "paginate_button page-item previous"
                              }
                            >
                              <a
                                href="#"
                                aria-controls="datatable"
                                data-dt-idx="0"
                                tabindex="0"
                                className="page-link"
                                onClick={() =>
                                  setCurrentPage((prev) => prev - 1)
                                }
                              >
                                Previous
                              </a>
                            </li>

                            {!(currentPage - 1 < 1) && (
                              <li className="paginate_button page-item">
                                <a
                                  aria-controls="datatable"
                                  data-dt-idx="1"
                                  tabindex="0"
                                  className="page-link"
                                  onClick={(e) =>
                                    setCurrentPage((prev) => prev - 1)
                                  }
                                >
                                  {currentPage - 1}
                                </a>
                              </li>
                            )}

                            <li className="paginate_button page-item active">
                              <a
                                href="#"
                                aria-controls="datatable"
                                data-dt-idx="2"
                                tabindex="0"
                                className="page-link"
                              >
                                {currentPage}
                              </a>
                            </li>

                            {!(
                              (currentPage + 1) * itemPerPage - itemPerPage >=
                              data.length
                            ) && (
                              <li className="paginate_button page-item ">
                                <a
                                  href="#"
                                  aria-controls="datatable"
                                  data-dt-idx="3"
                                  tabindex="0"
                                  className="page-link"
                                  onClick={() => {
                                    setCurrentPage((prev) => prev + 1);
                                  }}
                                >
                                  {currentPage + 1}
                                </a>
                              </li>
                            )}

                            <li
                              className={
                                !(
                                  (currentPage + 1) * itemPerPage -
                                    itemPerPage >
                                  data.length
                                )
                                  ? "paginate_button page-item next"
                                  : "paginate_button page-item next disabled"
                              }
                            >
                              <a
                                href="#"
                                tabindex="0"
                                className="page-link"
                                onClick={() =>
                                  setCurrentPage((prev) => prev + 1)
                                }
                              >
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

export default Client;
