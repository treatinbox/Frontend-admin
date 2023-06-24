import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Dashboard(props) {
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
                        <Link to="/">Treat in Box</Link>
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
                    <h1 className="text-left">Videos</h1>
                    <div className="float-left mt-2">
                      <img
                        src="assets/images/icons/videos-icon.png"
                        className="icon-dahs"
                      />
                    </div>
                    <div className="float-right mt-2">
                      <h4 className="mb-1 mt-1 dash-counter">
                        <span data-plugin="counterup">455</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/*  <!-- end col--> */}

              <div className="col-md-6 col-xl-3">
                <div className="card bg-info h-auto">
                  <div className="card-body dashboard-box">
                    <h1 className="text-left">Viewers</h1>
                    <div className="float-left mt-2">
                      <img
                        src="assets/images/icons/viewers-count-icon.png"
                        className="icon-dahs"
                      />
                    </div>
                    <div className="float-right mt-2">
                      <h4 className="mb-1 mt-1 dash-counter">
                        <span data-plugin="counterup">2500</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/*  <!-- end col--> */}

              <div className="col-md-6 col-xl-3">
                <div className="card bg-primary h-auto">
                  <div className="card-body dashboard-box">
                    <h1 className="text-left">Staff</h1>
                    <div className="float-left mt-2">
                      <img
                        src="assets/images/icons/staff-icon.png"
                        className="icon-dahs"
                      />
                    </div>
                    <div className="float-right mt-2">
                      <h4 className="mb-1 mt-1 dash-counter">
                        <span data-plugin="counterup">5400</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/*  <!-- end col--> */}

              <div className="col-md-6 col-xl-3">
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
              </div>
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
