import axios from "axios";
import { API_URl } from "../api";

const createProduct = async (data) => {
  try {
    const resp = await axios.post(`${API_URl}/addProduct`, data);
    return resp;
  } catch (error) {
    alert("Error creating product");
  }
};
const fetchProduct = async (id) => {
  try {
    const resp = await axios.get(`${API_URl}/api/prod/products/${id}`);
    return resp;
  } catch (error) {
    alert("Error fetching product");
  }
};
const deleteProduct = async (id) => {
  try {
    const resp = await axios.delete(`${API_URl}/api/prod/products/${id}`);

    return resp;
  } catch (error) {
    alert("Error deleting product");
  }
};
const updateProduct = async (id, payload) => {
  try {
    const resp = await axios.put(`${API_URl}/api/prod/products/${id}`, payload);
    return resp;
  } catch (error) {
    alert("Error updating product");
  }
};

export { createProduct, fetchProduct, deleteProduct, updateProduct };
