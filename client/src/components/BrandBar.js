import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Row } from 'react-bootstrap'
import { Context } from '../index'

const BrandBar = observer(() => {
  const { device } = useContext(Context)
  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Card
          style={{ width: 100, height: 40, cursor: 'pointer' }}
          key={brand.id}
          className="p-1 align-items-center justify-content-center"
          onClick={() => device.setSelectedBrand(brand)}
          bg={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
          text={brand.id === device.selectedBrand.id ? 'white' : 'black'}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  )
})

export default BrandBar
