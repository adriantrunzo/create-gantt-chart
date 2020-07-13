import React from 'react'
import { useForm } from 'react-hook-form'

import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

export default function Chart (props) {
  const { register } = useForm()

  return (
    <Card {...props}>
      <Card.Header><strong>2</strong> Create chart</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId='engine'>
            <Form.Label>Engine</Form.Label>
            <Form.Control ref={register} as='select' custom required>
              <option value='gantt'>d-block/gantt</option>
              <option value='google'>Google Charts</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Button type='submit' variant='primary'>Render</Button>
          </Form.Group>
        </Form>
        <hr />
        <Alert variant='secondary'>Upload data before creating a chart.</Alert>
      </Card.Body>
    </Card>
  )
}
