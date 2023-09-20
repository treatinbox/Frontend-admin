import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import BreadCumb from "./BreadCumb";

function PaymentSettings(props) {
  return (
    <div>
      <Sidebar />
      <Header />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Revenue Management - Payment Setting</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <BreadCumb/>
                      </li>
                      <li className="breadcrumb-item active">
                        Revenue Management - Payment Setting
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-12 col-lg-6 col-xl-6">
                                <h1 className="text-left head-small">
                                  Payment Options
                                </h1>

                                <form>
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label
                                          for="basicpill-phoneno-input"
                                          className="label-100"
                                        >
                                          Selected Currency
                                        </label>

                                        <select
                                          name="currency"
                                          value=""
                                          className="form-control  input-field"
                                        >
                                          <option value="">--select--</option>
                                          <option value="INR" selected>
                                            INR
                                          </option>
                                          <option value="USD">USD</option>
                                          <option value="AED">AED</option>
                                          <option value="AUD">AUD</option>
                                          <option value="CAD">CAD</option>
                                          <option value="EUR">EUR</option>
                                          <option value="GBP">GBP</option>
                                          <option value="HKD">HKD</option>
                                          <option value="INR">INR</option>
                                          <option value="JPY">JPY</option>
                                          <option value="SGD">SGD</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label
                                          for="basicpill-phoneno-input"
                                          className="label-100"
                                        >
                                          Monthly Subscription Price
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control input-field"
                                          value="99"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label
                                          for="basicpill-phoneno-input"
                                          className="label-100"
                                        >
                                          Quarterly Subscription Price
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control input-field"
                                          value="299"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label
                                          for="basicpill-phoneno-input"
                                          className="label-100"
                                        >
                                          Half Yearly Subscription Price
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control input-field"
                                          value="599"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label
                                          for="basicpill-phoneno-input"
                                          className="label-100"
                                        >
                                          1 Year Subscription Price
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control input-field"
                                          value="999"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="form-group text-left">
                                        <a href="index.html">
                                          <button
                                            type="button"
                                            className="btn btn-success btn-login waves-effect waves-light mr-3"
                                          >
                                            Update
                                          </button>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>

                            {/* <!-- end table-responsive --> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- end table-responsive --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}

        <Footer />
      </div>
    </div>
  );
}

export default PaymentSettings;
