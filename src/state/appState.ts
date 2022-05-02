import {makeAutoObservable} from 'mobx'

export class AppState {
	isNavbarOpen: boolean

	constructor() {
		makeAutoObservable(this)
		this.isNavbarOpen = false
	}

	closeNavbar() {
		this.isNavbarOpen = false
	}

	toggleNavbar() {
		this.isNavbarOpen = !this.isNavbarOpen
	}
}
