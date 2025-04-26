// Import necessary hooks and components
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import api from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

const EditCharacter = () => {
  // State for search input
  const [searchTerm, setSearchTerm] = useState("");

  // State to hold the character to edit (if found)
  const [character, setCharacter] = useState(null);

  // State for success/error messages
  const [message, setMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("success");

  // Hook to navigate programmatically
  const navigate = useNavigate();

  // Search for character by name or alias
  const handleSearch = async () => {
    try {
      const response = await api.get("/characters"); // Get all characters
      const found = response.data.find(
        (char) =>
          char.name.toLowerCase() === searchTerm.toLowerCase() ||
          char.alias.toLowerCase() === searchTerm.toLowerCase()
      );

      if (found) {
        setCharacter(found); // Populate form with character data
        setMessage(""); // Clear any previous message
      } else {
        setCharacter(null); // Clear the form if not found
        setMessage("Character not found");
        setAlertVariant("warning");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error fetching characters");
      setAlertVariant("danger");
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission for updating character
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/characters/${character.id}`, character); // Send updated data to backend
      setMessage("Character updated successfully!");
      setAlertVariant("success");

      // Redirect to /characters after 1 second
      setTimeout(() => navigate("/characters"), 1000);
    } catch (err) {
      console.error(err);
      setMessage("Failed to update character");
      setAlertVariant("danger");
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: "600px" }}>
      <h2>Edit a Character</h2>

      {/* Search form */}
      <Form className="mb-3" onSubmit={(e) => e.preventDefault()}>
        <Form.Group>
          <Form.Label>Search by Name or Alias</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name or alias"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" className="mt-2" onClick={handleSearch}>
          Search
        </Button>
      </Form>

      {/* Show alert messages if any */}
      {message && <Alert variant={alertVariant}>{message}</Alert>}

      {/* Display form if a character is found */}
      {character && (
        <Form onSubmit={handleUpdate}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={character.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Alias</Form.Label>
            <Form.Control
              type="text"
              name="alias"
              value={character.alias}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Alignment</Form.Label>
            <Form.Select
              name="alignment"
              value={character.alignment}
              onChange={handleChange}
              required
            >
              <option value="hero">Hero</option>
              <option value="villain">Villain</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Powers</Form.Label>
            <Form.Control
              as="textarea"
              name="powers"
              value={character.powers}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="url"
              name="image_url"
              value={character.image_url}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Submit updated character */}
          <Button variant="success" type="submit">
            Update Character
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default EditCharacter;
