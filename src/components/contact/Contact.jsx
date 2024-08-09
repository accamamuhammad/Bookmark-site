import { useState } from "react";
import ContactCSS from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({ email: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email Submitted", formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={ContactCSS.contactContainer}>
      <form onSubmit={handleSubmit}>
        <h4>35,000+ already joined</h4>
        <h1>Stay up-to-date with what we're doing</h1>
        <div>
          <input
            type="email"
            placeholder="Enter your email address"
            onChange={handleChange}
          />
          <button type="submit">Contact Us</button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
