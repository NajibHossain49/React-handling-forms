import React, { useReducer } from 'react';

// Reducer function to handle form state updates
const reducer = (state, action) => {
  return { ...state, [action.name]: action.value };
};

const UseReducerForm = () => {
  const [formState, dispatch] = useReducer(reducer, {
    name: '',
    email: '',
    password: '',
    gender: '',
    country: '',
    bio: '',
    termsAccepted: false,
    errors: {
      name: '',
      email: '',
      password: '',
      gender: '',
      country: '',
      bio: '',
      termsAccepted: '',
    },
  });

  // Handle input changes and dispatch updates
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch({
      name,
      value: type === 'checkbox' ? checked : value,
    });
  };

  // Validate form fields before submitting
  const validateForm = () => {
    const errors = { ...formState.errors };
    let isValid = true;

    // Name validation
    if (!formState.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    } else {
      errors.name = '';
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zAZ]{2,}$/;
    if (!formState.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formState.email)) {
      errors.email = 'Invalid email format';
      isValid = false;
    } else {
      errors.email = '';
    }

    // Password validation
    if (!formState.password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (formState.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    } else {
      errors.password = '';
    }

    // Gender validation
    if (!formState.gender) {
      errors.gender = 'Please select a gender';
      isValid = false;
    } else {
      errors.gender = '';
    }

    // Country validation
    if (!formState.country) {
      errors.country = 'Please select a country';
      isValid = false;
    } else {
      errors.country = '';
    }

    // Bio validation (optional)
    if (!formState.bio.trim()) {
      errors.bio = 'Bio is required';
      isValid = false;
    } else {
      errors.bio = '';
    }

    // Terms validation
    if (!formState.termsAccepted) {
      errors.termsAccepted = 'You must accept the terms and conditions';
      isValid = false;
    } else {
      errors.termsAccepted = '';
    }

    dispatch({ name: 'errors', value: errors });
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formState);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              formState.errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {formState.errors.name && (
            <p className="mt-1 text-xs text-red-500">{formState.errors.name}</p>
          )}
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              formState.errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {formState.errors.email && (
            <p className="mt-1 text-xs text-red-500">{formState.errors.email}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              formState.errors.password ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {formState.errors.password && (
            <p className="mt-1 text-xs text-red-500">{formState.errors.password}</p>
          )}
        </div>

        {/* Gender Radio Buttons */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formState.gender === 'male'}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-600">Male</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formState.gender === 'female'}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-600">Female</span>
            </label>
          </div>
          {formState.errors.gender && (
            <p className="mt-1 text-xs text-red-500">{formState.errors.gender}</p>
          )}
        </div>

        {/* Country Select Dropdown */}
        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <select
            name="country"
            value={formState.country}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              formState.errors.country ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select a country</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="in">India</option>
            <option value="uk">United Kingdom</option>
          </select>
          {formState.errors.country && (
            <p className="mt-1 text-xs text-red-500">{formState.errors.country}</p>
          )}
        </div>

        {/* Bio Textarea */}
        <div className="mb-4">
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
            Bio
          </label>
          <textarea
            name="bio"
            value={formState.bio}
            onChange={handleChange}
            placeholder="Tell us a little about yourself"
            className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              formState.errors.bio ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {formState.errors.bio && (
            <p className="mt-1 text-xs text-red-500">{formState.errors.bio}</p>
          )}
        </div>

        {/* Terms Checkbox */}
        <div className="mb-4 flex items-center">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formState.termsAccepted}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-600">
              I accept the terms and conditions
            </span>
          </label>
          {formState.errors.termsAccepted && (
            <p className="mt-1 text-xs text-red-500">{formState.errors.termsAccepted}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UseReducerForm;
