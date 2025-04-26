// Import React hooks and Bootstrap components
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

// Import custom API config and character card component
import api from "../api/axiosConfig";
import CharacterCard from "../components/CharacterCard";

const ViewCharacters = () => {
  // State to hold character data
  const [characters, setCharacters] = useState([]);

  // State to manage loading status
  const [loading, setLoading] = useState(true);

  // Function to fetch character data from backend API
  const fetchCharacters = async () => {
    try {
      const response = await api.get("/characters"); // GET request to /characters
      setCharacters(response.data); // Store the character data in state
    } catch (error) {
      console.error("Error fetching characters:", error); // Log any errors
    } finally {
      setLoading(false); // Stop loading whether successful or not
    }
  };

  // Run fetchCharacters once when the component first mounts
  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Marvel Characters</h2>

      {/* Show spinner while data is loading */}
      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="danger" />
          <p className="mt-3 text-light">Loading characters...</p>
        </div>
      ) : (
        // Display characters in a responsive Bootstrap grid
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {characters.map((char) => (
            <Col key={char.id}>
              {/* Render a CharacterCard for each character */}
              <CharacterCard character={char} onDelete={fetchCharacters} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ViewCharacters;
