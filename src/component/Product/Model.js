import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { createProduct, fetchProduct, updateProduct } from "./utils";
import { ClipLoader } from "react-spinners";
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
  const[loader,setLoader] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
  };

// handle image
const handleImageChange = (event) => {
  const value = event.target.files[0]
  console.log(value)
  setProductData({ ...productData, image: value });

}

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true)
    const { title, description, price, qty } = productData;
    // Do something with the productData object
    if (title && description && price && qty) {
      const resp = await createProduct(productData);
      if (resp.status === 201) {
        // alert("suucessfully added product");
        setReload(Math.random());
        closeModel();
        setLoader(false)
      } else {
        alert("something error!");
        setLoader(false)
      }
      // Reset form fields
      setProductData({
        title: "",
        description: "",
        price: "",
        qty: "",
      });
    } else {
      setLoader(false)
      alert("all field are field required!");
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    setLoader(true)
    const { title, description, price, qty } = productData;
    // Do something with the productData object
    if (title && description && price && qty) {
      const resp = await updateProduct(id, productData);
      if (resp.status === 200) {
        // alert("suucessfully updated product");
        setReload(Math.random());
        closeModel();
        setLoader(false)
      } else {
        alert("something error!");
        setLoader(false)
      }
    } else {
      alert("all field are field required!");
      setLoader(false)
    }
  };

  async function getProduct() {
    const resp = await fetchProduct(id);
    const { title, description, price, qty ,image} = resp.data;
    setProductData({ title, description, price, qty,image });
  }

  useEffect(() => {
    if (text === "View") {
      getProduct();
    } else if (text === "Update") {
      async function uptProduct() {
        const resp = await fetchProduct(id);
        const { title, description, price, qty ,image} = resp.data;
        setProductData({ title, description, price, qty,image });
      }
      uptProduct();
    } else {
      return;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
              onInput={(e) => handleImageChange(e)}
              disabled={disable}
            />
            <img
              className="mt-2"
              style={{ width: "4em" }}
              src={
               productData.image|| "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSnfBD8oiQixFsc59ccAI4fSbIBvvTjUEZuw&usqp=CAU"
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
          disabled={disable || loader}
          variant="success"
          onClick={(event) =>
            text === "Create" ? handleSubmit(event) : handleUpdate(event)
          }
        >
        {
          loader?<ClipLoader color={"#fff"} loading={loader} size={20} />  :text
        }
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
