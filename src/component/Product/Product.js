import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { deleteProduct, fetchProduct } from "./utils";

import { API_URl } from "../api";
import axios from "axios";
import Model from "./Model";
import LoaderBox from "../utils/LoaderBox";
import BreadCumb from "../BreadCumb";

function Product(props) {
  const [modalShow, setModalShow] = useState(false);

  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [showData, setShowData] = useState(data);
  const [text, setText] = useState("");
  const [disable, setDisable] = useState(false);
  const [rand, setRand] = useState(false);
  const [id, setId] = useState();
  const [reload, setReload] = useState(Math.random());

  const closeModel = () => {
    setModalShow(false);
    setDisable(false);
  };
  const openModel = () => {
    setModalShow(true);
    setDisable(false);
    setText("Create");
  };
  const viewProduct = (id) => {
    setText("View");
    setModalShow(true);
    setId(id);
    setDisable(true);
    setRand(Math.random());
  };
  const updateProduct = (id) => {
    setText("Update");
    setModalShow(true);
    setId(id);
    setDisable(false);
    setRand(Math.random());
  };

  const deleteProductItem = async (id) => {
    await deleteProduct(id);
    fetchData();
  };

  const fetchData = () => {
    axios.get(`${API_URl}/api/prod/products`).then((res) => {
      setData(res.data);
      setLoader(false);
    });
  };
  useEffect(() => {
    fetchData();
  }, [reload]);

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

      <Model
        show={modalShow}
        closeModel={closeModel}
        text={text}
        disable={disable}
        id={id}
        key={rand}
        setReload={setReload}
      />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Product</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <BreadCumb/>
                      </li>
                      <li className="breadcrumb-item active">Product</li>
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
                          <button
                            type="button"
                            className="btn btn-primary add-btn waves-effect waves-light float-right"
                            onClick={() => openModel()}
                          >
                            <i className="fa fa-plus" aria-hidden="true"></i>{" "}
                            Add New Product
                          </button>
                        </div>
                      </div>
                    </div>
                    <LoaderBox loader={loader} />

                    {!loader && (
                      <div className="table-responsive table-shoot">
                        <table className="table table-centered table-nowrap mb-0">
                          <thead className="thead-light">
                            <tr>
                              <th>Title</th>
                              <th>Short Description</th>
                              <th>Price (in Rs)</th>
                              <th>Qty On</th>
                              <th>Created At</th>
                              <th>stock</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {showData.length > 0 &&
                              showData.map((item) => (
                                <tr>
                                  <td>{item.title}</td>
                                  <td>{item.description.slice(0, 40)}...</td>
                                  <td>{item.price}</td>
                                  <td>{item.qty}</td>
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
                                  <td className="d-flex justify-content-between">
                                    <button
                                      type="button"
                                      className="btn btn-success btn-sm  waves-effect waves-light btn-table"
                                      onClick={() => updateProduct(item._id)}
                                    >
                                      Update
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-info btn-sm  waves-effect waves-light btn-table ml-2"
                                      onClick={() => viewProduct(item._id)}
                                    >
                                      View
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-danger btn-sm  waves-effect waves-light btn-table ml-2"
                                      onClick={() =>
                                        deleteProductItem(item._id)
                                      }
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

export default Product;
