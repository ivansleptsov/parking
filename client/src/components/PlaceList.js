import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { Context } from '../index'
import PlaceItem from './PlaceItem'

const PlaceList = observer(() => {
  const { place } = useContext(Context)

  return (
    <Row className="d-flex">
      {place.places.map((place) => (
        <PlaceItem key={place.id} place={place} />
      ))}
    </Row>
  )
})

export default PlaceList
