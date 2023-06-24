import React from "react";
import { FadeLoader } from "react-spinners";
function LoaderBox({ loader }) {
  return (
    <div
      className="text-center d-flex justify-content-center align-items-center"
      style={{}}
    >
      <FadeLoader color="blue" loading={loader} />
    </div>
  );
}

export default LoaderBox;
