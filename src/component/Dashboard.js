import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { isAutheticated } from "./auth/authHelper";
import axios from "axios";
import { API_URl } from "./api";
import BreadCumb from "./BreadCumb";

function Dashboard(props) {
  const { token } = isAutheticated();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(`${API_URl}/admin/details`, {
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
    <>
      <Sidebar />
      <Header />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Dashboard</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <BreadCumb/>
                      </li>
                      <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}

            <div className="row">
              <div className="col-md-6 col-xl-3">
                <div className="card bg-success h-auto">
                  <div className="card-body dashboard-box">
                    <h1 className="text-left">Franchisees</h1>
                    <div className="float-left mt-2">
                      <img
                        src="assets/images/icons/videos-icon.png"
                        className="icon-dahs"
                      />
                    </div>
                    <div className="float-right mt-2">
                      <h4 className="mb-1 mt-1 dash-counter">
                        <span data-plugin="counterup">{data?.franchises}</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/*  <!-- end col--> */}

              <div className="col-md-6 col-xl-3">
                <div className="card bg-info h-auto">
                  <div className="card-body dashboard-box">
                    <h1 className="text-left">Products</h1>
                    <div className="float-left mt-2">
                      <img
                        src="assets/images/icons/viewers-count-icon.png"
                        className="icon-dahs"
                      />
                    </div>
                    <div className="float-right mt-2">
                      <h4 className="mb-1 mt-1 dash-counter">
                        <span data-plugin="counterup">{data?.product}</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/*  <!-- end col--> */}

              <div className="col-md-6 col-xl-3">
                <div className="card bg-primary h-auto">
                  <div className="card-body dashboard-box">
                    <h1 className="text-left">Orders</h1>
                    <div className="float-left mt-2">
                      <img
                        src="assets/images/icons/staff-icon.png"
                        className="icon-dahs"
                      />
                    </div>
                    <div className="float-right mt-2">
                      <h4 className="mb-1 mt-1 dash-counter">
                        <span data-plugin="counterup">{data?.orders}</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/*  <!-- end col--> */}

              {/*  <div className="col-md-6 col-xl-3">
                <div className="card bg-warning h-auto">
                  <div className="card-body dashboard-box">
                    <h1 className="text-left">Categories</h1>
                    <div className="float-left mt-2">
                      <img
                        src="assets/images/icons/categories-icon.png"
                        className="icon-dahs"
                      />
                    </div>
                    <div className="float-right mt-2">
                      <h4 className="mb-1 mt-1 dash-counter">
                        <span data-plugin="counterup">6</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*  <!-- end col--> */}
            </div>
          </div>
          {/*  <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}

        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
