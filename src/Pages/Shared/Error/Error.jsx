import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <img src="" alt="" />
            <div
      className="flex items-center justify-center bg-cover h-screen bg-center bg-opacity-50"
      style={{
        backgroundImage: `url('/img/opps.jpg')`,
      }}
    >
      <div className="max-w-md px-6 py-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p className="text-gray-600 mb-6">
          Were sorry, but the page you requested could not be found.
        </p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Go Back
        </Link>
      </div>
    </div>
        </div>
    );
};

export default Error;