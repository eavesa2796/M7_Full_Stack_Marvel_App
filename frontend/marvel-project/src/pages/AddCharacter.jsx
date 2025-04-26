import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";

const AddCharacter = () => {
  const [formData, setFormData] = useState({
    name: "",
    alias: "",
    alignment: "hero",
    powers: "",
    image_url: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/characters", formData);
      setAlertMessage("Character added successfully!");
      setAlertType("success");
      setShowAlert(true);
      setTimeout(() => navigate("/characters"), 1000);
    } catch (err) {
      console.error(err);
      setAlertMessage("Failed to add character.");
      setAlertType("danger");
      setShowAlert(true);
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: "600px" }}>
      <h2>Add a New Character</h2>

      {showAlert && <Alert variant={alertType}>{alertMessage}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Character Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Alias</Form.Label>
          <Form.Control
            type="text"
            name="alias"
            value={formData.alias}
            onChange={handleChange}
            placeholder="Enter alias"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Alignment</Form.Label>
          <Form.Select
            name="alignment"
            value={formData.alignment}
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
            rows={3}
            name="powers"
            value={formData.powers}
            onChange={handleChange}
            placeholder="Enter powers"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            placeholder="Paste image link"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Character
        </Button>
      </Form>
    </Container>
  );
};

export default AddCharacter;
