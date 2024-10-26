import React from "react";
import Layout from "../components/Layouts/Layout";

const Policy = () => {
  return (
    <Layout title={"Policy - Ecom"}>
      <div className="container my-5">
        <h1 className="mb-4">Privacy Policy</h1>

        <p>
          Welcome to ShopShake (the “Website,” “we,” “us,” or “our”). Your
          privacy is important to us, and we are committed to protecting your
          personal information. This Privacy Policy outlines how we collect,
          use, disclose, and safeguard your information when you visit our
          website and use our services. By accessing or using ShopShake, you
          agree to the practices described in this policy.
        </p>

        <h2 className="mt-5">Information We Collect</h2>
        <p>
          We collect various types of information in connection with your use of
          our website, including:
        </p>

        <h3 className="mt-4">1. Personal Information</h3>
        <p>
          When you create an account, place an order, or subscribe to our
          newsletter, we may collect personal information such as:
        </p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Shipping address</li>
          <li>Billing address</li>
          <li>Phone number</li>
          <li>Payment information (e.g., credit card details)</li>
        </ul>

        <p>
          We follow the Payment Card Industry Data Security Standard (PCI DSS)
          when handling credit card data.
        </p>

        <h3 className="mt-4">2. Non-Personal Information</h3>
        <p>
          We may also collect non-personal information that does not directly
          identify you. This includes:
        </p>
        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device type</li>
          <li>Operating system</li>
          <li>Referring website</li>
          <li>
            Usage data (e.g., pages viewed, time spent on the website, etc.)
          </li>
        </ul>

        <h3 className="mt-4">3. Cookies and Tracking Technologies</h3>
        <p>
          We use cookies and similar technologies to enhance your shopping
          experience. Cookies help us track your preferences, shopping cart
          contents, and improve our website’s functionality. You can choose to
          disable cookies through your browser settings, though doing so may
          limit certain features of the website.
        </p>

        <h2 className="mt-5">How We Use Your Information</h2>
        <p>We may use the information we collect for the following purposes:</p>
        <ul>
          <li>
            Processing Orders: To process and fulfill your orders, including
            delivering products, managing payments, and providing customer
            service.
          </li>
          <li>
            Personalization: To customize your shopping experience by providing
            personalized product recommendations, offers, and content.
          </li>
          <li>
            Communication: To send you transactional emails (e.g., order
            confirmations) and promotional messages, provided you have opted in
            to receive them.
          </li>
          <li>
            Website Improvement: To analyze and improve the functionality and
            performance of the website.
          </li>
          <li>
            Security and Fraud Prevention: To protect our website and users from
            unauthorized access, fraud, and other security risks.
          </li>
          <li>
            Compliance: To comply with applicable legal and regulatory
            requirements.
          </li>
        </ul>

        <h2 className="mt-5">How We Share Your Information</h2>
        <p>
          We value your privacy and do not sell or share your personal
          information with third parties for their direct marketing purposes.
          However, we may share your information with trusted third parties in
          the following circumstances:
        </p>
        <ul>
          <li>
            Service Providers: We may share your information with third-party
            service providers that help us operate our website, process
            payments, deliver products, and perform other business functions.
          </li>
          <li>
            Legal Requirements: We may disclose your information if required by
            law, or in response to valid requests by public authorities (e.g., a
            court or government agency).
          </li>
          <li>
            Business Transfers: If ShopShake is involved in a merger,
            acquisition, or sale of assets, your information may be transferred
            as part of that transaction.
          </li>
        </ul>

        <h2 className="mt-5">Data Security</h2>
        <p>
          We implement reasonable security measures to protect your personal
          information from unauthorized access, disclosure, alteration, or
          destruction. However, no method of transmission over the internet or
          electronic storage is 100% secure, and we cannot guarantee absolute
          security.
        </p>

        <h2 className="mt-5">Your Rights and Choices</h2>
        <p>You have certain rights regarding your personal information:</p>
        <ul>
          <li>
            Access and Correction: You can access and update your account
            information by logging into your ShopShake account.
          </li>
          <li>
            Opt-Out: You can opt out of receiving promotional communications by
            following the unsubscribe instructions in the emails we send.
          </li>
          <li>
            Delete Account: You can request the deletion of your account and
            personal information by contacting our support team at{" "}
            <a href="mailto:support@shopshake.com">support@shopshake.com</a>.
          </li>
        </ul>

        <h2 className="mt-5">Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or the content of those
          websites. Please review the privacy policies of any third-party
          websites you visit.
        </p>

        <h2 className="mt-5">Children’s Privacy</h2>
        <p>
          ShopShake does not knowingly collect or solicit personal information
          from individuals under the age of 13. If we learn that we have
          collected personal information from a child under 13 without parental
          consent, we will delete that information as quickly as possible.
        </p>

        <h2 className="mt-5">Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated “Last Updated” date. We
          encourage you to review this policy periodically to stay informed
          about how we are protecting your information.
        </p>

        <h2 className="mt-5">Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:support@shopshake.com">support@shopshake.com</a>
          </li>
          <li>Address: ShopShake, Boston</li>
        </ul>

        <p className="mt-5">**Last Updated:** October 24, 2024</p>
      </div>
    </Layout>
  );
};

export default Policy;
