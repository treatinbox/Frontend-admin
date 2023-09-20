import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

import { API_URl } from "./api";
import { useEffect, useState } from "react";
import axios from "axios";
import BreadCumb from "./BreadCumb";

function NewsLetters(props) {
  const [newsLetters, setNewsLetters] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [showData, setShowData] = useState(newsLetters);

  useEffect(() => {
    const getNewsLetters = async () => {
      let { data } = await axios.get(`${API_URl}/view_news`);
      setNewsLetters(data.data);
    };
    getNewsLetters();
  }, []);

  useEffect(() => {
    const loadData = () => {
      const indexOfLastPost = currentPage * itemPerPage;
      const indexOfFirstPost = indexOfLastPost - itemPerPage;
      setShowData(newsLetters.slice(indexOfFirstPost, indexOfLastPost));
    };

    loadData();
  }, [newsLetters, currentPage, itemPerPage]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    let d = date.toDateString(dateStr).split(" ");
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let strTime = hours + ":" + minutes + " " + ampm;
    return d[2] + " " + d[1] + " " + d[3] + " " + strTime;
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
                  <h4 className="mb-0">Newsletter Subscribers</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <BreadCumb/>
                      </li>
                      <li className="breadcrumb-item active">
                        Newsletter Subscribers
                      </li>
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
                    </div>

                    <div className="table-responsive table-shoot">
                      <table className="table table-centered table-nowrap mb-0">
                        <thead className="thead-light">
                          <tr>
                            <th>Email</th>
                            <th>IP</th>
                            <th>Data and Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          {showData.length > 0 &&
                            showData.map((newsLetter) => (
                              <tr key={newsLetter._id}>
                                <td>{newsLetter.email}</td>
                                <td>{newsLetter.ip_address}</td>
                                <td>{formatDate(newsLetter.updatedAt)}</td>
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
                          Showing {currentPage * itemPerPage - itemPerPage + 1}{" "}
                          to{" "}
                          {Math.min(
                            currentPage * itemPerPage,
                            newsLetters.length
                          )}{" "}
                          of {newsLetters.length} entries
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
                              newsLetters.length
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
                                  newsLetters.length
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

export default NewsLetters;
