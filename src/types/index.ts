import {FC, LazyExoticComponent} from 'react'

export interface IRoute {
	path: string
	title: string
	Component: LazyExoticComponent<FC> | FC
}

export interface IMovie {
	id: string
	title: string
	overview: string
	language: string
	poster_url: string
	rating: string
	released_date: string
}

export interface MoviesByMoodRequest {
	liked_movies: number[],
	disliked_movies: number[],
	neither_movies: number[],
}

export type IReaction = -1 | 0 | 1

export interface IAboutItem {
	title: string
	points?: string[]
	description?: string
	big?: boolean
}
