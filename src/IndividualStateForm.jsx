import React, { useState } from 'react';

const IndividualStateForm = () => {
  // State for the individual input fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [agree, setAgree] = useState(false);
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');

  // State for error messages
  const [errors, setErrors] = useState({});

  // Reset form after submit
  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setAge('');
    setAgree(false);
    setGender('');
    setCountry('');
    setErrors({}); // Clear errors as well
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object to store validation errors
    let formErrors = {};

    // Validate name
    if (!name.trim()) {
      formErrors.name = 'Name is required';
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
      formErrors.email = 'Email is invalid';
    }

    // Validate password
    if (!password.trim()) {
      formErrors.password = 'Password is required';
    } else if (password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters long';
    }

    // Validate age
    if (!age.trim()) {
      formErrors.age = 'Age is required';
    } else if (isNaN(age) || age <= 0) {
      formErrors.age = 'Age must be a positive number';
    }

    // Validate agree checkbox
    if (!agree) {
      formErrors.agree = 'You must agree to the terms and conditions';
    }

    // Validate gender
    if (!gender) {
      formErrors.gender = 'Gender is required';
    }

    // Validate country
    if (!country) {
      formErrors.country = 'Please select a country';
    }

    // If there are errors, set errors state and prevent form submission
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // If no errors, submit the form
      alert("Form submitted successfully!");
      console.log({ name, email, password, age, agree, gender, country });
      
      // Reset form and errors after successful submit
      resetForm();
    }
  };

  return (
    <div>
        <h1 className="block text-center text-xl font-semibold text-gray-700 py-3">
        Registration Form: Controlled Form with Individual State for Each Input Field
      </h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter your name"
          className={`mt-1 block w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your email"
          className={`mt-1 block w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter your password"
          className={`mt-1 block w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="age">Age</label>
        <input 
          type="number" 
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)} 
          placeholder="Enter your age"
          className={`mt-1 block w-full px-4 py-2 border ${errors.age ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.age && <p className="text-sm text-red-500">{errors.age}</p>}
      </div>

      <div className="mb-4 flex items-center">
        <input 
          type="checkbox" 
          id="agree" 
          checked={agree}
          onChange={() => setAgree(!agree)} 
          className="mr-2 h-5 w-5 text-blue-500"
        />
        <label className="text-sm text-gray-700" htmlFor="agree">I agree to the terms and conditions</label>
        {errors.agree && <p className="text-sm text-red-500">{errors.agree}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="gender">Gender</label>
        <div className="flex items-center">
          <label className="mr-4">
            <input 
              type="radio" 
              value="male" 
              checked={gender === 'male'}
              onChange={() => setGender('male')}
              className="mr-2"
            />
            Male
          </label>
          <label>
            <input 
              type="radio" 
              value="female" 
              checked={gender === 'female'}
              onChange={() => setGender('female')}
              className="mr-2"
            />
            Female
          </label>
        </div>
        {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="country">Country</label>
        <select 
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className={`mt-1 block w-full px-4 py-2 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          <option value="">Select a country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="India">India</option>
        </select>
        {errors.country && <p className="text-sm text-red-500">{errors.country}</p>}
      </div>

      <button 
        type="submit" 
        className="mt-4 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
    </div>
  );
};

export default IndividualStateForm;
