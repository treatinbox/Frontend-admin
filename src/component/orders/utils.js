// handle all api
import axios from "axios";
import { showToast } from "../error";
import { API_URl } from "../api";

// fetch order - payment success
const orders = async () => {
  try {
    const resp = await axios.get(`${API_URl}/api/manage/orders`);
    return resp;
  } catch (error) {
    return showToast("something error", "api server error", "error");
  }
};
const ordersViewById = async (order_id) => {
  try {
    const resp = await axios.get(`${API_URl}/api/manage/orders/${order_id}`);
    return resp;
  } catch (error) {
    return showToast("something error", "api server error", "error");
  }
};
const orderUpdateStatus = async (status, order_id, shipingId = "") => {
  try {
    console.log("status", status);
    console.log(order_id);
    const resp = await axios.post(`${API_URl}/api/manage/updateOrderStatus`, {
      status: status,
      orderId: order_id,
      shipingId: shipingId,
    });
    return resp;
  } catch (error) {
    return showToast("something error", "api server error", "error");
  }
};

export { orders, ordersViewById, orderUpdateStatus };
