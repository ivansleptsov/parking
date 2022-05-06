import { $authHost, $host } from './index'
// import jwt_decode from 'jwt-decode'

// export const createType = async (type) => {
//   const { data } = await $authHost.post('api/type', type)
//   return data
// }

// export const fetchTypes = async () => {
//   const { data } = await $host.get('api/type')
//   return data
// }

export const createPark = async (park) => {
  const { data } = await $authHost.post('api/park', park)
  return data
}

export const fetchParks = async () => {
  const { data } = await $host.get('api/park')
  return data
}

export const createPlace = async (place) => {
  const { data } = await $authHost.post('api/place', place)
  return data
}

export const fetchPlaces = async (parkId, page, limit = 5) => {
  const { data } = await $host.get('api/place', {
    params: {
      parkId,
      page,
      limit,
    },
  })
  return data
}

export const fetchOnePlace = async (id) => {
  const { data } = await $host.get('api/place/' + id)
  return data
}
