// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const UncontrolledFormWithTarget = () => {
  // State to hold validation errors
  const [errors, setErrors] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get the form object
    const form = event.target;

    // Fetching values directly from the form object
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const age = form.age.value.trim();
    const phone = form.phone.value.trim();
    const gender = form.gender.value;
    const address = form.address.value.trim();
    const dob = form.dob.value;

    // Initialize an error object
    let formErrors = {};

    // Validation logic
    if (firstName.length < 3) {
      formErrors.firstName = "First Name must be at least 3 characters";
    }

    if (lastName.length < 3) {
      formErrors.lastName = "Last Name must be at least 3 characters";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      formErrors.email = "Please enter a valid email";
    }

    if (isNaN(age) || age <= 0) {
      formErrors.age = "Age must be a positive number";
    }

    const phonePattern = /^[0-9]{10}$/; // Simple phone number validation
    if (!phonePattern.test(phone)) {
      formErrors.phone = "Please enter a valid phone number (10 digits)";
    }

    if (!gender) {
      formErrors.gender = "Please select a gender";
    }

    if (address.length < 5) {
      formErrors.address = "Address must be at least 5 characters";
    }

    if (!dob) {
      formErrors.dob = "Please select a date of birth";
    }

    // If there are any errors, update the state
    setErrors(formErrors);

    // If no errors, submit the form (for demo purposes, we'll just log the data)
    if (Object.values(formErrors).every((error) => error === "")) {
      alert("Form submitted successfully!");
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Email:", email);
      console.log("Age:", age);
      console.log("Phone:", phone);
      console.log("Gender:", gender);
      console.log("Address:", address);
      console.log("Date of Birth:", dob);
      form.reset();
    }
  };

  return (
    <div>
      <h1 className="block text-center text-xl font-semibold text-gray-700 py-3">
        Registration Form: Uncontrolled Form Handling with event.target
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-2xl border"
      >
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-semibold text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            placeholder="Enter your first name"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-sm font-semibold text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            placeholder="Enter your last name"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-sm font-semibold text-gray-700"
          >
            Age
          </label>
          <input
            type="number"
            name="age"
            id="age"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            placeholder="Enter your age"
          />
          {errors.age && (
            <p className="text-red-500 text-xs mt-1">{errors.age}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            placeholder="Enter your phone number (10 digits)"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="gender"
            className="block text-sm font-semibold text-gray-700"
          >
            Gender
          </label>
          <select
            name="gender"
            id="gender"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-semibold text-gray-700"
          >
            Address
          </label>
          <textarea
            name="address"
            id="address"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            placeholder="Enter your address"
          />
          {errors.address && (
            <p className="text-red-500 text-xs mt-1">{errors.address}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="dob"
            className="block text-sm font-semibold text-gray-700"
          >
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            id="dob"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
          />
          {errors.dob && (
            <p className="text-red-500 text-xs mt-1">{errors.dob}</p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UncontrolledFormWithTarget;
