import React, { useEffect, useState } from "react";
import { isAutheticated } from "./auth/authHelper";
import { API_URl } from "./api";
import axios from "axios";

function Footer({footer}) {

  const { token } = isAutheticated();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(`${API_URl}/admin/view_copyright`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data?.data);
 
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <footer className="footer bg-white">
      <div className="container-fluid text-center mx-auto">
        <div className="row ">
          <div className="col-sm-12 text-primary">
             {data[0]?.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
