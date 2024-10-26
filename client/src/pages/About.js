import React from "react";
import Layout from "../components/Layouts/Layout";
const About = () => {
  return (
    <Layout title={"About us - Ecom"}>
      {/* <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div> */}

      <div className="container mt-5">
        <h1 className="text-center mb-4">About Us</h1>
        <p className="lead text-center">
          Welcome to <strong>ShopShack!</strong>
        </p>
        <p>
          At ShopShack, we believe that shopping should be an experience filled
          with excitement and discovery. Founded with a passion for quality and
          a commitment to customer satisfaction, we are your one-stop shop for a
          diverse range of products designed to enhance your everyday life.
        </p>

        <h3 className="mt-4">Our Mission</h3>
        <p>
          Our mission is simple: to provide an exceptional online shopping
          experience that connects you with the products you love. We curate a
          selection of unique and trending items that cater to various tastes
          and preferences, ensuring that there’s something for everyone.
        </p>

        <h3 className="mt-4">What We Offer</h3>
        <p>
          From stylish apparel and accessories to innovative gadgets and home
          essentials, our carefully curated collections are designed to inspire.
          We prioritize quality, affordability, and customer satisfaction,
          making it easy for you to find what you need without compromise.
        </p>

        <h3 className="mt-4">Our Values</h3>
        <ul>
          <li>
            <strong>Quality:</strong> We source products from trusted suppliers
            to ensure you receive only the best.
          </li>
          <li>
            <strong>Affordability:</strong> We strive to keep our prices
            competitive, so you can shop with confidence.
          </li>
          <li>
            <strong>Customer Focus:</strong> Your satisfaction is our top
            priority. Our dedicated support team is here to assist you every
            step of the way.
          </li>
        </ul>

        <h3 className="mt-4">Join Our Community</h3>
        <p>
          At ShopShack, we’re more than just an online store; we’re a community
          of like-minded individuals who love to explore and discover new
          things. Follow us on social media for the latest updates, promotions,
          and inspiration.
        </p>

        <p className="text-center">
          Thank you for choosing ShopShack. We look forward to serving you and
          helping you find exactly what you’re looking for!
        </p>

        <footer className="text-center mt-5">
          <p>— The ShopShack Team</p>
        </footer>
      </div>
    </Layout>
  );
};

export default About;
