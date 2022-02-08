import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Meta from '../components/Meta'

const Contact = () => {
  const pageTitle = 'Contact'
  return (
    <div>
      <Meta title={pageTitle} />
      <Form>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicCheckbox"
        >
          <Form.Check
            type="checkbox"
            label="Check me out"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Disabled select menu</Form.Label>
          <Form.Select>
            <option>A</option>
            <option>B</option>
          </Form.Select>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Contact
