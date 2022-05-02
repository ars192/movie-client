import {lazy} from 'react'
import {MovieOfTheDayPage} from './pages'
import {IRoute} from './types'

type Route = 'main' | 'ofTheDay' | 'byMood' | 'random' | 'top' | 'undiscovered' | 'e404'

export const routes: Record<Route, IRoute> = {
	main: {
		path: '/',
		title: 'About',
		Component: lazy(() => import('./pages').then(({AboutPage}) => ({default: AboutPage}))),
	},
	ofTheDay: {
		path: '/movie-of-the-day',
		title: 'Movie of the day',
		Component: lazy(() => import('./pages').then(({MovieOfTheDayPage}) => ({default: MovieOfTheDayPage}))),
	},
	byMood: {
		path: '/by-mood',
		title: 'Movies by mood',
		Component: lazy(() => import('./pages').then(({MoviesByMoodPage}) => ({default: MoviesByMoodPage}))),
	},
	random: {
		path: '/random',
		title: 'Random movie',
		Component: lazy(() => import('./pages').then(({RandomMoviePage}) => ({default: RandomMoviePage}))),
	},
	top: {
		path: '/top',
		title: 'Top movies',
		Component: lazy(() => import('./pages').then(({TopMoviesPage}) => ({default: TopMoviesPage}))),
	},
	undiscovered: {
		path: '/undiscovered',
		title: 'Undiscovered movies',
		Component: lazy(() => import('./pages').then(({UndiscoveredMoviePage}) => ({default: UndiscoveredMoviePage}))),
	},
	e404: {
		path: '/404',
		title: 'Error 404 - Not Found',
		Component: lazy(() => import('./pages').then(({E404}) => ({default: E404}))),
	},
}
