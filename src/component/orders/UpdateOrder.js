import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { orderUpdateStatus } from "./utils";
import { FadeLoader } from "react-spinners";
function UpdateOrderModel(props) {
  const { show, handleClose, orderId, statusEx } = props;

  const [status, setStatus] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  const refs = useRef(null);
  const [orderStatus, setOrderStatus] = React.useState([]);
  // update status
  const handleUpdateStatus = async (e) => {
    const status = e.target.value;
    setStatus(status);
  };

  const updateStatusBtn = async () => {
    setLoader(true);

    if (status === "SHIPPING") {
      const shipingId = refs.current.value;
      const updateStatus = await orderUpdateStatus(status, orderId, shipingId);
      if (updateStatus.status === 201) {
        setOrderStatus(updateStatus?.data?.data?.status);
        setLoader(false);
        handleClose();
        window.location.reload();
      }
    } else {
      const updateStatus = await orderUpdateStatus(status, orderId);
      if (updateStatus.status === 201) {
        setOrderStatus(updateStatus?.data?.data?.status);
        setLoader(false);
        handleClose();
        window.location.reload();
      }
    }
  };

  console.log("Order", orderStatus);

  return (
    <>
      <div className="text-center d-flex justify-content-center align-items-center">
        <FadeLoader color="blue" loading={loader} />
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          #OrderId: {orderId} - status : &nbsp;
          <span className="badge badge-success ">
            {orderStatus?.status || statusEx}
          </span>
        </Modal.Header>
        <Modal.Body>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => handleUpdateStatus(e)}
          >
            <option disabled selected>
              update status
            </option>
            <option value="PAID">PAID</option>
            <option value="DISPATCHED">DISPATCHED</option>
            <option value="SHIPPING">SHIPPING</option>
            <option value="DELIVERED">DELIVERED</option>
          </Form.Select>

          {status === "SHIPPING" && (
            <Form.Group className="my-3" controlId="exampleForm.ControlInput1">
              <Form className="label text-danger">*</Form>
              <Form.Control
                type="email"
                placeholder="shippingId"
                required={true}
                ref={refs}
              />
            </Form.Group>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => updateStatusBtn()}>
            Update Status
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateOrderModel;
