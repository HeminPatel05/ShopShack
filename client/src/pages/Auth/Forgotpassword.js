import React, { useState } from "react";
import Layout from "../../components/Layouts/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, newPassword, answer }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <Layout title={"Forgot Password - Ecommerce"}>
      <div className="register">
        <h1>Reset Password</h1>
        <form on onSubmit={handleSubmit}>
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
            <label htmlFor="InputAnswer">Security Answer</label>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="InputAnswer1"
              placeholder="Your Answer"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="InputNewPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              id="InputNewPassword1"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            RESET
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Forgotpassword;
