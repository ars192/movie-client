import {makeAutoObservable} from 'mobx'
import {v4 as uuid} from 'uuid'
import {LOCAL_STORAGE_KEYS} from '../constants'

export class AuthState {
	userId: string

	constructor() {
		makeAutoObservable(this)
		let userId = localStorage.getItem(LOCAL_STORAGE_KEYS.userId)
		if (!userId) {
			userId = uuid()
		}
		this.userId = userId
		localStorage.setItem(LOCAL_STORAGE_KEYS.userId, userId)
	}
}
