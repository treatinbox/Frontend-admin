import React from "react";

function Footer(props) {
  return (
    <footer className="footer bg-white">
      <div className="container-fluid text-center mx-auto">
        <div className="row ">
          <div className="col-sm-12 text-primary">
            {new Date().getFullYear()} ©Treat In Box.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
