import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { createPlace, fetchParks, fetchPlaces } from '../../http/placeAPI'
import { Context } from '../../index'

const CreatePlace = observer(({ show, onHide }) => {
  const { place } = useContext(Context)
  const [number, setNumber] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  // const [userId, setUserId] = useState('')
  // const [activeStatus, setActiveStatus] = useState('null')

  useEffect(() => {
    fetchParks().then((data) => place.setParks(data))

    fetchPlaces().then((data) => place.setPlaces(data.rows))
  }, [])

  const addPlace = () => {
    try {
      const formData = new FormData()
      formData.append('number', number)
      formData.append('price', `${price}`)
      formData.append('parkId', place.selectedPark.id)
      formData.append('description', description)
      // formData.append('userId', userId)

      createPlace(formData).then((data) => onHide())
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новое парковочное место
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {place.selectedPark.address || 'Выберите паркинг'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {place.parks.map((park) => (
                <Dropdown.Item
                  onClick={() => place.setSelectedPark(park)}
                  key={park.id}
                >
                  {park.address}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control
            className="mt-3"
            placeholder="Введите номер места"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите стоимость аренды"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {/* <Form.Control className="mt-3" type="file" onChange={selectFile} /> */}
          <hr />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addPlace}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
})

export default CreatePlace
