import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"
const BusinessRegistrationForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    contactNumber: "",
    email: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formValues.firstName) newErrors.firstName = "First name is required";
    if (!formValues.lastName) newErrors.lastName = "Last name is required";
    if (!formValues.businessName)
      newErrors.businessName = "Business name is required";
    if (
      !formValues.contactNumber ||
      !/^\d{10}$/.test(formValues.contactNumber)
    )
      newErrors.contactNumber = "Valid contact number is required (10 digits)";
    if (!formValues.email || !/\S+@\S+\.\S+/.test(formValues.email))
      newErrors.email = "Valid email is required";
    if (!formValues.address) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Navigate to login page
      navigate("/login");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Register Your Business</h2>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span>{errors.firstName}</span>}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span>{errors.lastName}</span>}
        </div>
        <div>
          <label>Business Name:</label>
          <input
            type="text"
            name="businessName"
            value={formValues.businessName}
            onChange={handleChange}
          />
          {errors.businessName && <span>{errors.businessName}</span>}
        </div>
        <div>
          <label>Contact Number:</label>
          <input
            type="tel"
            name="contactNumber"
            value={formValues.contactNumber}
            onChange={handleChange}
          />
          {errors.contactNumber && <span>{errors.contactNumber}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Address:</label>
          <textarea
            name="address"
            value={formValues.address}
            onChange={handleChange}
          />
          {errors.address && <span>{errors.address}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BusinessRegistrationForm;
