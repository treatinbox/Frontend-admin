import moment from "moment";
import swal from "sweetalert";

export const showToast = (title, text, status) => {
  return swal({
    title: title,
    text: text,
    icon: status,
  });
};

export const formattedData = (createdAt) => {
  const date = moment(createdAt);
  const formattedDate = date.format("DD MMM, YYYY");

  return formattedDate;
};
