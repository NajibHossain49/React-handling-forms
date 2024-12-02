const ReuseableForm = ({ FormTitle, handleFormSubmit , submitBtnText = "Submit" , children}) => {
  
const handleLocalSubmit = (event) => {
  event.preventDefault();
  const formData = {
    name: event.target.firstName.value,
    email: event.target.email.value,
  }
  // handleFormSubmit
  handleFormSubmit(formData);
};

  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <div className="text-center font-bold pb-6">
            {/* children Props */}
            {children} 
          </div>
          <form onSubmit={handleLocalSubmit}>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              First Name
            </label>
            <input
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
              {/* submitBtnText Props */}
              {submitBtnText}   
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReuseableForm;
