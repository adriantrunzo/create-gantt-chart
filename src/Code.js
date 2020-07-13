import React from 'react'

import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function Upload (props) {
  return (
    <Card {...props}>
      <Card.Header><strong>3</strong> Generate code</Card.Header>
      <Card.Body>
        <Button variant='primary' disabled>Generate</Button>
        <hr />
        <Alert variant='secondary'>Upload data and create chart before generating the code.</Alert>
      </Card.Body>
    </Card>
  )
}
