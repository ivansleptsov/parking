import { makeAutoObservable } from 'mobx'

export default class PlaceStore {
  constructor() {
    this._parks = []
    this._places = []
    // this._selectedType = {}
    // this._selectedBrand = {}
    this._page = 1
    this._totalCount = 0
    this._limit = 3
    makeAutoObservable(this)
  }
  setTypes(places) {
    this._places = places
  }

  setDevices(parks) {
    this._parks = parks
  }

  // setSelectedType(type) {
  //   this.setPage(1)
  //   this._selectedType = type
  // }

  // setSelectedBrand(brand) {
  //   this.setPage(1)
  //   this._selectedBrand = brand
  // }

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
  // get selectedType() {
  //   return this._selectedType
  // }
  // get selectedBrand() {
  //   return this._selectedBrand
  // }

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
