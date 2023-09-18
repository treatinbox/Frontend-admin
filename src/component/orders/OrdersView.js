import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

import OrderDetailBox from "./OrderDetailBox";
import { formattedData, showToast } from "../error";
import { ordersViewById } from "./utils";
import { useState } from "react";

function OrdersView(props) {
  const navigate = useNavigate();
  // Order Id
  const { orderId } = useParams();
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState([]);
  // fetch product based on OrderId and FranchiseId

  useEffect(() => {
    const getAllOrders = async () => {
      const data = await ordersViewById(orderId);
      console.log(data?.data?.data);
      if (data.status === 200) {
        setOrders(data?.data?.data);
        setUser(data?.data?.data?.userID);
      } else {
        return showToast("api error", "please try again", "error");
      }
    };

    getAllOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  <h4 className="mb-0">Orders Management - Orders</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Treat in Box</Link>
                      </li>
                      <li className="breadcrumb-item">
                        Orders Management - Orders
                      </li>

                      <li className="breadcrumb-item">View Order</li>
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
                        <h1 className="text-left head-small">
                          View Franchise Details{" "}
                        </h1>
                        <form>
                          <div className="row mt-20">
                            <div className="col-md-4 font-b">User Name</div>
                            <div className="col-md-8">
                              {user?.firstName + " " + user?.lastName}
                            </div>
                          </div>

                          <div className="row mt-20">
                            <div className="col-md-4 font-b">Email</div>
                            <div className="col-md-8">{user?.email}</div>
                          </div>

                          <div className="row mt-20">
                            <div className="col-md-4 font-b">Contact No</div>
                            <div className="col-md-8">
                              {orders?.userAddress?.contact_number}
                            </div>
                          </div>

                          <div className="row mt-20">
                            <div className="col-md-4 font-b">Total Amount</div>
                            <div className="col-md-8">
                              Rs: {orders?.totalPrice}
                            </div>
                          </div>

                          <div className="row mt-20">
                            <div className="col-md-4 font-b">Order On</div>
                            <div className="col-md-8">
                              {formattedData(orders?.createdAt)}
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  {/* <!-- end table-responsive --> */}
                </div>
              </div>
            </div>

            {/* <!-- Order details -->  */}

            <div className="mt-0">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12 col-lg-12 col-xl-12">
                          <h1 className="text-left head-small">
                            View Order Details - #16123222{" "}
                          </h1>

                          <div className="orderDetails">
                            <OrderDetailBox orders={orders ? orders : []} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- end Order details --> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-20">
              <div className="col-lg-12">
                <div className="form-group mt-2 text-left">
                  <button
                    type="button"
                    className="btn btn-success btn-login waves-effect waves-light mr-3"
                    onClick={() => navigate("/orders")}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        {/* <!-- container-fluid --> */}
      </div>
    </div>
  );
}

export default OrdersView;
