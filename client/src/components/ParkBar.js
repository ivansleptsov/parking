import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Context } from '../index'

const ParkBar = observer(() => {
  const { place } = useContext(Context)
  return (
    <ListGroup>
      {place.parks.map((park) => (
        <ListGroup.Item
          style={{ cursor: 'pointer' }}
          active={park.id === place.selectedPark.id}
          onClick={() => place.setSelectedPark(park)}
          key={park.id}
        >
          {park.address}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
})

export default ParkBar
