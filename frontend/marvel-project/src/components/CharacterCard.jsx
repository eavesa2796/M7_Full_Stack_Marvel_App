import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";
import ViewCharacterModal from "../components/ViewCharacterModal";

const CharacterCard = ({ character, onDelete }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    if (window.confirm(`Delete ${character.name}?`)) {
      try {
        await api.delete(`/characters/${character.id}`);
        onDelete(); // Refresh the list
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  };

  return (
    <>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={character.image_url}
          alt={character.name}
          // style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text>
            <strong>Alias:</strong> {character.alias}
          </Card.Text>
          <Card.Text>
            <strong>Alignment:</strong> {character.alignment}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <ButtonGroup className="w-100">
            <Button variant="primary" onClick={() => setShowModal(true)}>
              View
            </Button>
            <Button
              variant="primary"
              onClick={() => navigate("/characters/add")}
            >
              Add
            </Button>
            <Button
              variant="primary"
              onClick={() => navigate(`/characters/edit?id=${character.id}`)}
            >
              Edit
            </Button>
            <Button variant="primary" onClick={handleDelete}>
              Delete
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>

      <ViewCharacterModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        character={character}
      />
    </>
  );
};

export default CharacterCard;
