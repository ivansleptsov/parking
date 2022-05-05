import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import star2 from '../assets/star2.png'
import { useParams } from 'react-router-dom'
import { fetchOnePlace } from '../http/placeAPI'
const PlacePage = () => {
  // const [place, setPlace] = useState({ info: [] })
  // const { id } = useParams()
  const place = {
    id: 21,
    number: '21',
    address: '203 korpus 21',
    rating: 5,
    price: '100',
  }

  // useEffect(() => {
  //   fetchOnePlace(id).then((data) => setPlace(data))
  //   // eslint-disable-next-line
  // }, [])

  return (
    <Container className="mt-3">
      <Row>
        {/* <Col xs={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + place.img}
          />
        </Col> */}
        <Col xs={6}>
          <Row>
            <h2 className="d-flex align-items-center justify-content-center">
              Номер парковки №{place.number}
            </h2>
            <h2 className="d-flex align-items-center justify-content-center">
              Адрес: {place.address}
            </h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ fontSize: 64 }} // не работает бэкграунд
            >
              <Image width={64} height={64} src={star2} />
              {place.rating}
            </div>
          </Row>
        </Col>
        <Col xs={6}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontsize: 32,
              border: '5px solid lightgray',
            }}
          >
            <h3>от {place.price} руб. за ночь</h3>
            <Button variant="outline-dark">Забронировать</Button>
          </Card>
        </Col>
      </Row>
      {/* <Row className="d-flex flex-column m-3">
        <h1> Характеристики</h1>
        {device.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? 'lightgray' : 'transparent',
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row> */}
    </Container>
  )
}

export default PlacePage
