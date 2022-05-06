import { $authHost, $host } from './index'

export const createPark = async (park) => {
  const { data } = await $authHost.post('api/park', park)
  return data
}

export const fetchParks = async () => {
  const { data } = await $authHost.get('api/park')
  return data
}

export const createPlace = async (place) => {
  const { data } = await $authHost.post('api/place', place)
  return data
}

export const fetchPlaces = async (parkId, page, limit = 5) => {
  const { data } = await $authHost.get('api/place', {
    params: {
      parkId,
      page,
      limit,
    },
  })
  return data
}

export const fetchOnePlace = async (id) => {
  const { data } = await $authHost.get('api/place/' + id)
  return data
}
