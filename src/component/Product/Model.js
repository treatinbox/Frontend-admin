import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { createProduct, fetchProduct, updateProduct } from "./utils";
export default function Model({
  show,
  closeModel,
  text = "Create",
  disable = false,
  id = "",
  setReload,
}) {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: "",
    qty: "",
    image: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { title, description, price, qty } = productData;
    // Do something with the productData object
    if (title && description && price && qty) {
      const resp = await createProduct(productData);
      if (resp.status === 201) {
        alert("suucessfully added product");
        setReload(Math.random());
        closeModel();
      } else {
        alert("something error!");
      }
      // Reset form fields
      setProductData({
        title: "",
        description: "",
        price: "",
        qty: "",
      });
    } else {
      alert("all field are field required!");
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const { title, description, price, qty } = productData;
    // Do something with the productData object
    if (title && description && price && qty) {
      const resp = await updateProduct(id, productData);
      if (resp.status === 200) {
        alert("suucessfully updated product");
        setReload(Math.random());
        closeModel();
      } else {
        alert("something error!");
      }
    } else {
      alert("all field are field required!");
    }
  };

  async function getProduct() {
    const resp = await fetchProduct(id);
    const { title, description, price, qty } = resp.data;
    setProductData({ title, description, price, qty });
  }

  useEffect(() => {
    if (text === "View") {
      getProduct();
    } else if (text === "Update") {
      async function uptProduct() {
        const resp = await fetchProduct(id);
        const { title, description, price, qty } = resp.data;
        setProductData({ title, description, price, qty });
      }
      uptProduct();
    } else {
      return;
    }
  }, []);

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter1"
      centered
    >
      <Modal.Header closeButton onClick={() => closeModel()}>
        <Modal.Title id="contained-modal-title-vcenter">
          {text} Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={productData.title}
              onChange={handleInputChange}
              disabled={disable}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={productData.description}
              onChange={handleInputChange}
              disabled={disable}
            />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={productData.price}
              onChange={handleInputChange}
              disabled={disable}
            />
          </Form.Group>

          <Form.Group controlId="qty">
            <Form.Label>Qty</Form.Label>
            <Form.Control
              type="number"
              name="qty"
              value={productData.qty}
              onChange={handleInputChange}
              disabled={disable}
            />
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              name="image"
              value={productData.image}
              onChange={handleInputChange}
              disabled={disable}
            />
            <img
              className="mt-2"
              style={{ width: "4em" }}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSnfBD8oiQixFsc59ccAI4fSbIBvvTjUEZuw&usqp=CAU"
              }
              alt="img"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => closeModel()}>
          Close
        </Button>
        <Button
          disabled={disable}
          variant="success"
          onClick={(event) =>
            text === "Create" ? handleSubmit(event) : handleUpdate(event)
          }
        >
          {text}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
