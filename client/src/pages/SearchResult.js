import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Context } from '..'
import ParkBar from '../components/ParkBar'

import PlaceList from '../components/PlaceList'
import { fetchParks, fetchPlaces } from '../http/placeAPI'
// import Pages from '../components/Pages'

const SearchResult = observer(() => {
  const { place } = useContext(Context)

  useEffect(() => {
    fetchParks().then((data) => place.setParks(data))

    fetchPlaces().then((data) => place.setPlaces(data.rows))
  }, [])

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
