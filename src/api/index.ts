import axios from 'axios'
import {BASE_URL} from '../constants'

export const $api = axios.create({
	baseURL: BASE_URL,
})

$api.interceptors.response.use(
	response => response.data,
	error => Promise.reject(error),
)
