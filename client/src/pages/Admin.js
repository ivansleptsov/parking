import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateType from '../components/Modals/CreateType'
import CreateDevice from '../components/Modals/CreateDevice'
import CreateBrand from '../components/Modals/CreateBrand'

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [deviceVisible, setDeviseVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  return (
    <Container className="d-flex flex-column">
      <Button
        variant={'outline-dark'}
        className="mt-4 p-3"
        onClick={() => setTypeVisible(true)}
      >
        Добавить тип
      </Button>
      <Button
        variant={'outline-dark'}
        className="mt-4 p-3"
        onClick={() => setBrandVisible(true)}
      >
        Добавить бренд
      </Button>
      <Button
        variant={'outline-dark'}
        className="mt-4 p-3"
        onClick={() => setDeviseVisible(true)}
      >
        Добавить устройство
      </Button>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviseVisible(false)}
      />
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
    </Container>
  )
}

export default Admin
