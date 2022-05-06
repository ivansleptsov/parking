import { makeAutoObservable } from 'mobx'

export default class PlaceStore {
  constructor() {
    this._parks = []
    this._places = []
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
