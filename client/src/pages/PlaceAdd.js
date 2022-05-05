import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'

import CreatePlace from '../components/Modals/CreatePlace'
import CreatePark from '../components/Modals/CreatePark'

const PlaceAdd = () => {
  const [parkVisible, setParkVisible] = useState(false)
  const [placeVisible, setPlaceVisible] = useState(false)

  return (
    <Container className="d-flex flex-column">
      <Button
        variant={'outline-dark'}
        className="mt-4 p-3"
        onClick={() => setParkVisible(true)}
      >
        Добавить паркинг
      </Button>
      <Button
        variant={'outline-dark'}
        className="mt-4 p-3"
        onClick={() => setPlaceVisible(true)}
      >
        Добавить место
      </Button>

      <CreatePlace show={placeVisible} onHide={() => setPlaceVisible(false)} />
      <CreatePark show={parkVisible} onHide={() => setParkVisible(false)} />
    </Container>
  )
}

export default PlaceAdd
