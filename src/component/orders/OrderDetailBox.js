import React, { useState } from "react";
import UpdateOrderModel from "./UpdateOrder";
import { formattedData } from "../error";

function OrderDetailBox({ orders }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <UpdateOrderModel
        show={show}
        handleClose={handleClose}
        orderId={orders?.order_id}
        statusEx={orders?.status}
      />
      <div className="">
        <div className="">
          <div className="row">
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="mb-3 d-flex justify-content-between">
                    <div>
                      <span className="me-3">
                        <b>{formattedData(orders?.createdAt)}</b>
                      </span>
                      <span className="me-3">
                        <b>#{orders?.order_id}</b>
                      </span>
                      <span className="badge rounded-pill bg-success">
                        {orders?.status}
                      </span>
                    </div>
                    <div className="d-flex">
                      <button
                        className="btn btn-dark border p-1 "
                        onClick={() => handleShow()}
                      >
                        <span className="text">update status</span>
                      </button>
                    </div>
                  </div>
                  <table className="table table-borderless">
                    <tbody>
                      {orders?.product?.map((prod) => {
                        return (
                          <tr key={prod.productId}>
                            <td>
                              <div className="d-flex mb-2">
                                <div className="flex-shrink-0">
                                  <img
                                    src={prod.image}
                                    alt=""
                                    width="35"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="flex-lg-grow-1 ms-3">
                                  <h6 className="small mb-0">
                                    <span className="text-reset">
                                      {prod.title}:{prod.description}
                                    </span>
                                  </h6>
                                  <span className="small">Color: Black</span>
                                </div>
                              </div>
                            </td>
                            <td>{prod.qty}</td>

                            <td className="text-end">Rs: {prod.price}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colspan="2">Subtotal</td>
                        <td className="text-end">Rs: {orders?.totalPrice}</td>
                      </tr>
                      <tr>
                        <td colspan="2">GST(Rs)</td>
                        <td className="text-end">5%</td>
                      </tr>

                      <tr className="fw-bold">
                        <td colspan="2">TOTAL</td>
                        <td className="text-end">Rs : {orders?.GSTPrice}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <h3 className="h6">Payment Method</h3>
                      <p>
                        Razorpay - {orders?.razorpay_order_id}
                        <br />
                        <br />
                        Total: Rs: {orders?.GSTPrice} &nbsp;
                        <span className="badge bg-success rounded-pill">
                          PAID
                        </span>
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <h3 className="h6">Billing address</h3>
                      <address>
                        <strong>
                          {orders?.userID?.firstName +
                            " " +
                            orders?.userID?.lastName}
                        </strong>
                        <br />
                        {orders?.userAddress?.AdminAddress}
                        {orders?.userAddress?.country || ""}
                        <br />
                        {orders?.userAddress?.state},{" "}
                        {orders?.userAddress?.city}{" "}
                        {orders?.userAddress?.pincode}
                        <br />
                        <abbr title="Phone">P:</abbr>{" "}
                        {orders?.userAddress?.contact_number}
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h3 className="h6">Shipping Information</h3>
                  <strong>ShippingId: </strong>
                  <span>
                    <a
                      href={orders?.shipping_id}
                      target="_blank"
                      rel="noreferrer"
                    >
                      &nbsp;
                      {orders?.shipping_id || ""}
                    </a>{" "}
                    <i className="bi bi-box-arrow-up-right"></i>{" "}
                  </span>
                  <hr />

                  <h3 className="h6">Address</h3>
                  <address>
                    <strong>
                      {orders?.userID?.firstName +
                        " " +
                        orders?.userID?.lastName}
                    </strong>
                    <br />
                    {orders?.userAddress?.AdminAddress}
                    {orders?.userAddress?.country || ""}
                    <br />
                    {orders?.userAddress?.state}, {orders?.userAddress?.city}{" "}
                    {orders?.userAddress?.pincode}
                    <br />
                    <abbr title="Phone">P:</abbr>{" "}
                    {orders?.userAddress?.contact_number}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetailBox;
