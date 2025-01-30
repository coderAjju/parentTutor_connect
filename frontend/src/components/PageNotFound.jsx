import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-red-500">404</h1>
        <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
        <p className="text-gray-400 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/page-not-found-404-error-6647009-5533873.png"
          alt="404 Illustration"
          className="w-80 mx-auto mt-6"
        />
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
