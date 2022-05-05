import { makeAutoObservable } from 'mobx'

export default class PlaceStore {
  constructor() {
    this._parks = [
      { id: 10, address: '203 korpus 10' },
      { id: 11, address: '203 korpus 11' },
      { id: 12, address: '203 korpus 12' },
      { id: 13, address: '203 korpus 13' },
    ]
    this._places = [
      { id: 10, number: '10', rating: '5' },
      { id: 11, number: '11', rating: '5' },
      { id: 12, number: '12', rating: '5' },
      { id: 13, number: '13', rating: '5' },
    ]
    this._selectedPark = {}
    this._page = 1
    this._totalCount = 0
    this._limit = 3
    makeAutoObservable(this)
  }
  setPlaces(places) {
    this._places = places
  }

  setParks(parks) {
    this._parks = parks
  }

  setSelectedPark(park) {
    this.setPage(1)
    this._selectedPark = park
  }

  setPage(page) {
    this._page = page
  }

  setTotalCount(count) {
    this._totalCount = count
  }

  get parks() {
    return this._parks
  }

  get places() {
    return this._places
  }

  get selectedPark() {
    return this._selectedPark
  }

  get page() {
    return this._page
  }

  get totalCount() {
    return this._totalCount
  }

  get limit() {
    return this._limit
  }
}
