import React, { useState } from "react";

const SingleStateObject = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    message: "",
    age: "",
    gender: "",
    terms: false,
    country: "USA",
    profilePicture: null,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Name Validation (Required)
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email Validation (Required and Email Format)
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    // Phone Validation (Optional but valid phone number format)
    if (!formData.phone && !/^\+?(\d.*){3,}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }

    // Date of Birth Validation (Required and Age validation)
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    } else if (
      new Date(formData.dateOfBirth).getFullYear() >
      new Date().getFullYear() - 18
    ) {
      newErrors.dateOfBirth = "You must be at least 18 years old";
    }

    // Message Validation (Required)
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    // Age Validation (Only numbers and positive integers)
    if (!formData.age || isNaN(formData.age)) {
      newErrors.age = "Age is required";
    }

    // Gender Validation (Required)
    if (!formData.gender) {
      newErrors.gender = "Please select a gender";
    }

    // Terms and Conditions Validation
    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms and conditions";
    }

    // Profile Picture Validation (File input)
    if (
      formData.profilePicture &&
      !formData.profilePicture.name.match(/\.(jpg|jpeg|png|gif)$/)
    ) {
      newErrors.profilePicture =
        "Profile picture must be an image file (jpg, jpeg, png, gif)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      // [name]: value,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      console.log("Form Submitted:", formData);
      // Reset the formData state to the initial structure
      setFormData({
        name: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        message: "",
        age: "",
        gender: "",
        terms: false,
        country: "USA",
        profilePicture: null,
      });
    }
  };

  return (
    <div>
      <h1 className="block text-center text-xl font-semibold text-gray-700 py-3">
        Registration Form: Controlled Form with Single State Object (formData)
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 space-y-4 bg-white shadow-2xl rounded-lg border border-gray-300"
      >
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
              errors.phone ? "border-red-500" : ""
            }`}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* Date of Birth Field */}
        <div>
          <label
            htmlFor="dateOfBirth"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
              errors.dateOfBirth ? "border-red-500" : ""
            }`}
          />
          {errors.dateOfBirth && (
            <p className="text-sm text-red-500">{errors.dateOfBirth}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
              errors.message ? "border-red-500" : ""
            }`}
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        {/* Age Field */}
        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
              errors.age ? "border-red-500" : ""
            }`}
          />
          {errors.age && <p className="text-sm text-red-500">{errors.age}</p>}
        </div>

        {/* Gender Field */}
        <div>
          <span className="block text-sm font-medium text-gray-700">
            Gender
          </span>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm">Female</span>
            </label>
          </div>
          {errors.gender && (
            <p className="text-sm text-red-500">{errors.gender}</p>
          )}
        </div>

        {/* Terms and Conditions */}
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="ml-2 text-sm">
              I agree to the terms and conditions
            </span>
          </label>
          {errors.terms && (
            <p className="text-sm text-red-500">{errors.terms}</p>
          )}
        </div>

        {/* Profile Picture File Upload */}
        <div>
          <label
            htmlFor="profilePicture"
            className="block text-sm font-medium text-gray-700"
          >
            Profile Picture
          </label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            onChange={handleChange}
            className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.profilePicture && (
            <p className="text-sm text-red-500">{errors.profilePicture}</p>
          )}
        </div>

        {/* Country Select Field */}
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingleStateObject;
