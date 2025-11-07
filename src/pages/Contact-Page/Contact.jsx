import React from "react";
import "./Contact.css";
import Header from "../../Components/Header/Header";
import Crumbs from "../../Components/Crumbs/Crumbs";
import "./Contact.css";
import Footer from "../../Components/Footer/Footer";
import Search from "../../Components/Search-input/Search";
import call from "../../assets/call.png";
import { useState } from "react";

const Contact = () => {


  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // Validate form
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // Fullname validation
    if (!formData.fullname.trim()) {
      newErrors.fullname = "Fullname is required";
      isValid = false;
    } else if (formData.fullname.trim().length < 2) {
      newErrors.fullname = "Fullname must be at least 2 characters";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);

        // Reset form
        setFormData({
          fullname: "",
          email: "",
          message: "",
        });

        // Hide success message after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      }, 1000);
    }
  };

  return (
    <div>
      <div className="Contact-page">
        <Header />

        <div className="contactmain">
          <Crumbs text="Contact Us" />

          <div
            className="contact-card"
          >
            <div className="tel">
              <div className="touch">
                <h1>Get in touch</h1>
                <h4>contact@e-comm.ng</h4>
                <h3>+234 4556 6665 34</h3>
                <p>20 Prince Hakerem Lekki Phase 1, Lagos.</p>
              </div>
              <div className="circle"></div>
              <img src={call} alt="" />
            </div>
            <div className="formcol">
              <form onSubmit={handleSubmit} className="contact-form">

                {/* Success Message */}

                {submitSuccess && (
                  <div className="success-message">
                    Message sent successfully! ✓
                  </div>
                )}

                {/* Fullname */}

                <div className="form-group">
                  <label htmlFor="fullname">Fullname</label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="James Doe"
                    className={errors.fullname ? "error" : ""}
                  />
                  {errors.fullname && (
                    <span className="error-message">{errors.fullname}</span>
                  )}
                </div>

                {/* Email */}

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jamesdoe@gmail.com"
                    className={errors.email ? "error" : ""}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>

                {/* Message */}
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message"
                    className={errors.message ? "error" : ""}
                  />
                  {errors.message && (
                    <span className="error-message">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-btn"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          <Search noMargin />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
