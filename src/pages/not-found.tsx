import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Page not found, click on the link below</h1>
      <Link to="/login">Login</Link>
    </>
  );
};

export default NotFound;
