import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { createPark } from '../../http/placeAPI'

const CreatePark = ({ show, onHide }) => {
  const [value, setValue] = useState('')
  const addPark = () => {
    createPark({ name: value }).then((data) => {
      setValue('')
      onHide()
    })
  }
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый паркинг
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Введите адрес паркинга"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addPark}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreatePark
