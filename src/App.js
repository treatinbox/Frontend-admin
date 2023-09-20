import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ChangePassword from "./component/auth/ChangePassword";
import Login from "./component/auth/Login";
import Client from "./component/client/Client";
import ClientView from "./component/client/ClientView";
import ContactRequest from "./component/contactRequest/ContactRequest";
import ContactRequestView from "./component/contactRequest/ContactRequestView";
import Dashboard from "./component/Dashboard";
import DemoRequest from "./component/demoRequest/DemoRequest";
import DemoRequestView from "./component/demoRequest/DemoRequestView";
import FooterAddress from "./component/footerSetting/FooterAddress";
import FooterLinks from "./component/footerSetting/FooterLinks";
import FooterLogo from "./component/footerSetting/FooterLogo";
import FooterSocialMedia from "./component/footerSetting/FooterSocialMedia";
import HomePageSettings from "./component/HomePageSettings";
import NewsLetters from "./component/NewsLetters";
import Orders from "./component/orders/Orders";
import OrdersView from "./component/orders/OrdersView";
import PaymentSettings from "./component/PaymentSettings";
import ClientAdd from "./component/client/ClientAdd";
import EmailTemplate from "./component/emailTemplates/EmailTemplates";
import EmailTemplateEdit from "./component/emailTemplates/EmailTempalteEdit";
import Product from "./component/Product/Product";
import ProtectedRoute from "./component/auth/Protected";
import PrivateRoute from "./component/auth/Protected";
import FooterApplicationName from "./component/footerSetting/FootetApplicationName";
import FooterCopyrights from "./component/footerSetting/FooterCopyright";

function App() {
  const applicationName = JSON.parse(localStorage.getItem("application"));
  document.title = applicationName

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/resetPassword" element={<ChangePassword />} />
          <Route path="/client" element={<Client />} />
          <Route path="/client/view/:id" element={<ClientView />} />
          <Route path="/client/add" element={<ClientAdd />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/view/:orderId" element={<OrdersView />} />
          <Route path="/contacts/request" element={<ContactRequest />} />
          <Route
            path="/contacts/request/view/:id"
            element={<ContactRequestView />}
          />
          <Route path="/demo/request" element={<DemoRequest />} />
          <Route path="/demo/request/view/:id" element={<DemoRequestView />} />
          <Route path="/address" element={<FooterAddress />} />
          <Route path="/social" element={<FooterSocialMedia />} />
          <Route path="/logo" element={<FooterLogo />} />
          <Route path="/links" element={<FooterLinks />} />
          <Route path="/application" element={<FooterApplicationName />} />
          <Route path="/copyrights" element={<FooterCopyrights />} />
          <Route path="/payment/settings" element={<PaymentSettings />} />
          <Route path="/newsletter" element={<NewsLetters />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
