import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Sorry, we couldn't find what you were looking for.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
