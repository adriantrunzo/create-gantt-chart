import React from 'react'
import { useForm } from 'react-hook-form'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

export default function Upload (props) {
  const { register } = useForm()

  return (
    <Card {...props}>
      <Card.Header><strong>1</strong> Upload data</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId='file'>
            <Form.File ref={register} label='Choose CSV file' accept='.csv' required />
          </Form.Group>
          <Form.Group>
            <Button type='submit' variant='primary'>Upload</Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  )
}
