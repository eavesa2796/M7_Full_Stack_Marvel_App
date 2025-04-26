// Import Bootstrap components for layout and styling
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

// Import navigation hook from React Router
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  // useNavigate gives us a function to programmatically navigate between routes
  const navigate = useNavigate();

  return (
    // Centered container with light text on dark background
    <Container className="text-center text-light mt-5">
      {/* Large 404 error code */}
      <h1 className="display-1 fw-bold">404</h1>

      {/* Friendly message below the error code */}
      <p className="lead">
        Uh-oh! Looks like this page is lost in the multiverse.
      </p>

      {/* Button that sends the user back to the home page when clicked */}
      <Button variant="primary" className="mt-3" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </Container>
  );
};

export default NotFound;
