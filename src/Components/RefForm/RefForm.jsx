import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null); // <= useRef hook with Props
  const emailRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

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
              ref={nameRef} // <= useRef hook with Props
              type="text"
              id="firstName"
              name="firstName"
              required
              className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500 mb-4"
            />
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              ref={emailRef} // <= useRef hook with Props
              type="text"
              id="email"
              name="email"
              required
              className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500 mb-4"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RefForm;
