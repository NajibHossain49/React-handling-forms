import useInputState from "../../CustomHooks/useInputState";

const CustomHookForm = () => {

const [name , setName ] = useInputState("Default name Najib ");  // <= Custom Hook 



  const handleFormSubmit = (event) => {
    console.log('form Data, ', name);
    event.preventDefault();
  };
  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <form onSubmit={handleFormSubmit}>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              First Name
            </label>
            <input value={name} onChange={setName}
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
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomHookForm;
