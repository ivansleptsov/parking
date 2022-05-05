import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Pagination } from 'react-bootstrap'
import { Context } from '../index'

const Pages = observer(() => {
  const { place } = useContext(Context)
  const pageCount = Math.ceil(place.totalCount / place.limit)
  const pages = []

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }
  return (
    <Pagination className="mt-3">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={place.page === page}
          onClick={() => place.setPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  )
})

export default Pages
