import React from 'react'

import Container from 'react-bootstrap/Container'
import Upload from './Upload'
import Chart from './Chart'
import Code from './Code'

export default function App () {
  return (
    <Container fluid className='my-3'>
      <h1 className='mb-3'>Create Gantt Chart</h1>
      <Upload className='mb-3' />
      <Chart className='mb-3' />
      <Code />
    </Container>
  )
}
