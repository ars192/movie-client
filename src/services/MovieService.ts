import {$api} from '../api'
import {authState} from '../state'
import {IMovie, MoviesByMoodRequest} from '../types'

export class MovieService {
	static async getMovieOfTheDay(): Promise<IMovie> {
		return $api.get('movieOfTheDay')
	}

	static async getRandomMovie(): Promise<IMovie> {
		return $api.get('randomMovie')
	}

	static async getTopMovies(page: number): Promise<IMovie[]> {
		return (await $api.get(`topMovies/${page}`)) || []
	}

	static async getUndiscoveredMovie(): Promise<IMovie> {
		return $api.get('undiscoveredMovie')
	}

	static async getMoviesByMood(data: MoviesByMoodRequest): Promise<IMovie[]> {
		return $api.post('movieByMood', data, {
			headers: {
				Authorization: authState.userId,
			},
		})
	}

	static async resetPreferences() {
		return $api.post('flushMovieByMood', {}, {
			headers: {
				Authorization: authState.userId,
			},
		})
	}
}
