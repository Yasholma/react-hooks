import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="h-screen -mt-20 flex">
    <div className="m-auto text-center">
      <h1 className="text-4xl">Page Not Found</h1>
      <Link to="/" className="text-blue-700">
        Go To Home
      </Link>
    </div>
  </div>
);

export default NotFound;
