import { useState } from "react";

const StateFullForm = () => {
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Reset error state
    setError("");
    
    // Validation: Check if all fields are filled and password length
    if (!Email || !Name || !Password) {
      setError("All fields are required.");
    } else if (Password.length <= 6) {
      setError("Password must be more than 6 characters.");
    } else {
      console.log("Form submitted");
      console.log(Email, Password, Name);
      // Here you can also reset the form or perform further actions
    }
  };
  const handelEmailSubmit = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handelPasswordSubmit = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };
  const handelNameSubmit = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          {/* Handle-Form-Submit */}
          <form onSubmit={handleFormSubmit}>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              First Name
            </label>
            <input
              onChange={handelNameSubmit}
              type="text"
              id="firstName"
              name="firstName"
              className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500 mb-4"
            />
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              onChange={handelEmailSubmit} //  <= Handel-Email-Submit
              type="text"
              id="email"
              name="email"
              className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500 mb-4"
            />
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              onChange={handelPasswordSubmit} //  <= Handel-Password-Submit
              type="password"
              id="password"
              name="password"
              className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500 mb-4"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
            {Error && <p className="text-red-600 text-center">{Error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default StateFullForm;
