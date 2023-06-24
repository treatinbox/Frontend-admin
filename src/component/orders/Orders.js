import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { useEffect } from "react";
import { orders } from "./utils";
import { useState } from "react";
import { formattedData, showToast } from "../error";
import LoaderBox from "../utils/LoaderBox";

function Orders(props) {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getAllOrders = async () => {
      const data = await orders();
      if (data?.status === 200) {
        setProducts(data.data);
        setLoader(false);
      } else {
        return showToast("api error", "please try again", "error");
      }
    };

    getAllOrders();
  }, []);

  return (
    <>
      <Sidebar />
      <Header />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Orders</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Treat in Box</Link>
                      </li>
                      <li className="breadcrumb-item active">Orders</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <LoaderBox loader={loader} />
                  {!loader && (
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
                              <th>S.No</th>
                              <th>OderId</th>
                              <th>Total Qty</th>
                              <th>Total Price</th>
                              <th>Order On</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {products?.data?.map((prod, index) => {
                              return (
                                <tr key={prod?._id}>
                                  <td>{index + 1}</td>
                                  <td>#{prod?.order_id}</td>
                                  <td>{prod?.totalQuantity}</td>
                                  <td>Rs: {prod?.totalPrice}</td>
                                  <td>{formattedData(prod?.updatedAt)}</td>
                                  <td>
                                    <span className="badge badge-pill badge-success font-size-12">
                                      {prod?.status}
                                    </span>
                                  </td>
                                  <td>
                                    <Link to={`/orders/view/${prod?.order_id}`}>
                                      <button
                                        type="button"
                                        className="btn btn-info btn-sm  waves-effect waves-light btn-table ml-2"
                                      >
                                        View
                                      </button>
                                    </Link>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>

                      <div className="row mt-4 mt-20">
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
                                  href="#"
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
                                  href="#"
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
                                  href="#"
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
                                  href="#"
                                  aria-controls="datatable"
                                  data-dt-idx="3"
                                  tabIndex="0"
                                  className="page-link"
                                >
                                  3
                                </a>
                              </li>

                              <li className="paginate_button page-item next">
                                <a href="#" tabIndex="0" className="page-link">
                                  Next
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* <!-- end table-responsive --> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}

        <Footer />
      </div>
    </>
  );
}

export default Orders;
