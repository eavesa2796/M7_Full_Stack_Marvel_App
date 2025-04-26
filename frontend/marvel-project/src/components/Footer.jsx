import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-light py-4 mt-5">
      <Container>
        <p className="mb-1">Made with ❤️ by Anthony</p>
        <small>
          &copy; {new Date().getFullYear()} Marvel Character Manager
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
