import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import star2 from '../assets/star2.png'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from '../http/deviceAPI'
const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] })
  const { id } = useParams()

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data))
    // eslint-disable-next-line
  }, [])

  return (
    <Container className="mt-3">
      <Row>
        <Col xs={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + device.img}
          />
        </Col>
        <Col xs={4}>
          <Row>
            <h2 className="d-flex align-items-center justify-content-center">
              {device.name}
            </h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ fontSize: 64 }} // не работает бэкграунд
            >
              <Image width={64} height={64} src={star2} />
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col xs={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontsize: 32,
              border: '5px solid lightgray',
            }}
          >
            <h3>от {device.price} руб.</h3>
            <Button variant="outline-dark">Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
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
      </Row>
    </Container>
  )
}

export default DevicePage
