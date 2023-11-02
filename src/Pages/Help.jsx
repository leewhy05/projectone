import React from "react";
import "../Styles/Help.css";

const Help = () => {
  return (
    <div className="container fw-bold mt-5 gen">
      <h1 className="title">Help Center</h1>
      <p className="p">
        Welcome to our eCommerce store's help center. We're here to assist you
        with any questions or issues you may have. Please take a look at the
        frequently asked questions (FAQs) below, and if you can't find the
        information you need, feel free to contact our customer support team.
      </p>

      <h2 className="h2">Frequently Asked Questions (FAQs)</h2>

      <h3 className="h3">1. How do I place an order?</h3>
      <p className="p">
        To place an order, follow these steps:
        <ol>
          <li>Visit our product catalog.</li>
          <li>Click on the product you want to purchase.</li>
          <li>Click the "Add to Cart" button.</li>
          <li>
            Go to your shopping cart, review your items, and click "Checkout."
          </li>
          <li>
            Follow the prompts to complete your order and provide shipping
            information.
          </li>
        </ol>
      </p>

      <h3 className="h3">2. How can I track my order?</h3>
      <p className="p">
        You can track your order by logging into your account and visiting the
        "Order Status" page. Here, you'll find the status and tracking
        information for your recent orders.
      </p>

      <h3 className="h3">3. What is your return policy?</h3>
      <p className="p">
        Our return policy allows you to return products within 30 days of
        purchase if they are in their original condition. Please visit our{" "}
        <a href="/return-policy">Return Policy</a> page for detailed information
        on the return process.
      </p>

      <h3 className="h3">4. How can I contact customer support?</h3>
      <p className="p">
        If you need assistance, you can contact our customer support team via:
        <ul>
          <li>Email: support@yourstore.com</li>
          <li>Phone: 1-800-123-4567</li>
          <li>
            Live Chat: Click the chat icon in the bottom right corner of the
            website.
          </li>
        </ul>
      </p>

      <h3 className="h3">5. Do you offer international shipping?</h3>
      <p className="p">
        Yes, we offer international shipping to select countries. During the
        checkout process, you can specify your shipping address and see if
        international shipping is available for your location. Please note that
        international shipping may have additional fees.
      </p>

      <p className="p">
        If you have more questions or need further assistance, please don't
        hesitate to reach out to our customer support team. We're here to help
        you!
      </p>
    </div>
  );
};

export default Help;
