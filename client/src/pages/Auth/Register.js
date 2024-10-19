import React, { useState } from "react";
import Layout from "../../components/Layouts/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [answer, setAnswer] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, answer, address }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 0);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title="Register - Ecommerce App">
      <div className="register">
        <h1>Register Page</h1>
        <form on onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="InputName">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="InputName1"
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="InputEmail">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="InputEmail1"
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="InputPhone">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="InputPhone1"
              placeholder="Enter Phone"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="InputAnswer">What is your Favorite Sport?</label>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="InputAnswer1"
              placeholder="Enter answer"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="InputAnswer">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="InputAddress1"
              placeholder="Enter Address"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="InputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="InputPassword1"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="Check1" />
            <label className="form-check-label mb-3" htmlFor="Check1">
              I accept all the privacy Policy
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
