import { observer } from 'mobx-react-lite'
import React from 'react'
import { Button, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { SEARCH_ROUTE } from '../utils/consts'

const Home = observer(() => {
  const navigate = useNavigate()
  return (
    <Nav className="ms-auto" style={{ color: 'black' }}>
      <Button variant={'outline-dark'} onClick={() => navigate(SEARCH_ROUTE)}>
        Поиск
      </Button>
    </Nav>
  )
})

export default Home
