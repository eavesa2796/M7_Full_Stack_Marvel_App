import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CharacterForm = ({
  formData,
  onChange,
  onSubmit,
  submitText = "Submit",
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          placeholder="Enter character name"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Alias</Form.Label>
        <Form.Control
          type="text"
          name="alias"
          value={formData.alias}
          onChange={onChange}
          placeholder="Enter alias"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Alignment</Form.Label>
        <Form.Select
          name="alignment"
          value={formData.alignment}
          onChange={onChange}
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
          value={formData.powers}
          onChange={onChange}
          rows={3}
          placeholder="Describe powers"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="url"
          name="image_url"
          value={formData.image_url}
          onChange={onChange}
          placeholder="Paste image link"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {submitText}
      </Button>
    </Form>
  );
};

export default CharacterForm;
