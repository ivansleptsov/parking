import { observer } from 'mobx-react-lite'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ParkBar from '../components/ParkBar'

import PlaceList from '../components/PlaceList'
// import Pages from '../components/Pages'

const SearchResult = observer(() => {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <ParkBar />
        </Col>
        <Col md={9}>
          <PlaceList />

          {/* <Pages /> */}
        </Col>
      </Row>
    </Container>
  )
})

export default SearchResult
