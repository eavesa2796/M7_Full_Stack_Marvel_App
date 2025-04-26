// Import necessary React and Bootstrap components
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

// Reusable modal component to view character details
const ViewCharacterModal = ({ show, handleClose, character }) => {
  // If no character is passed, don't render anything
  if (!character) return null;

  return (
    // Bootstrap modal component
    <Modal show={show} onHide={handleClose} centered>
      {/* Modal header with close button */}
      <Modal.Header closeButton closeVariant="white">
        {/* Character's name displayed as the title */}
        <Modal.Title>{character.name}</Modal.Title>
      </Modal.Header>

      {/* Modal body displaying character details */}
      <Modal.Body>
        {/* Character image */}
        <Image
          src={character.image_url}
          alt={character.name}
          fluid
          className="mb-3 rounded"
        />

        {/* Character information fields */}
        <p>
          <strong>Alias:</strong> {character.alias}
        </p>
        <p>
          <strong>Alignment:</strong> {character.alignment}
        </p>
        <p>
          <strong>Powers:</strong>
        </p>
        <p>{character.powers}</p>
      </Modal.Body>

      {/* Modal footer with a close button */}
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// Export the modal component for use in other files
export default ViewCharacterModal;
