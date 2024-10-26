import React from "react";
import Layout from "../components/Layouts/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us - Ecom"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contact-us.svg"
            alt="contact us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about product feel free to contact us
          </p>
          <p className="mt-3">
            <BiMailSend /> :{" "}
            <a href="mailto:support@shopshake.com">support@shopshake.com</a>.
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 1200-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-1234-1234 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
