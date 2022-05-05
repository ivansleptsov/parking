import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import star from '../assets/star.png'
import { useNavigate } from 'react-router-dom'
import { PLACE_ROUTE } from '../utils/consts'

const PlaceItem = ({ place }) => {
  const navigate = useNavigate()
  return (
    <Row
      ms={3}
      className={'mt-3'}
      onClick={() => navigate(PLACE_ROUTE + '/' + place.id)}
    >
      <Card style={{ cursor: 'pointer' }} border={'light'}>
        <div className="mt-1 d-flex justify-content-between align-items-center">
          <div>Парковочное место № {place.number}</div>
          <div className="d-flex align-items-center">
            <Image width={18} height={18} src={star} />
            <div> {place.rating} </div>
          </div>
        </div>
        <div> {place.description} </div>
      </Card>
    </Row>
  )
}

export default PlaceItem
