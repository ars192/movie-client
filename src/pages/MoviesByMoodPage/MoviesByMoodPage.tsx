import {Affix, Button, Grid} from '@mantine/core'
import {FC, useEffect, useState} from 'react'
import {MovieCard, PagePreloader} from '../../components'
import {MovieService} from '../../services'
import {IMovie, IReaction} from '../../types'

export const MoviesByMoodPage: FC = () => {
	const [movies, setMovies] = useState<IMovie[]>([])
	const [likedMovies, setLikedMovies] = useState<string[]>([])
	const [dislikedMovies, setDislikedMovies] = useState<string[]>([])

	const onLike = (movieId: string) => {
		setDislikedMovies(prev => prev.filter(id => id !== movieId))
		setLikedMovies(prev => {
			if (prev.includes(movieId)) {
				return prev.filter(id => id !== movieId)
			}
			return [...prev, movieId]
		})
	}

	const onDislike = (movieId: string) => {
		setLikedMovies(prev => prev.filter(id => id !== movieId))
		setDislikedMovies(prev => {
			if (prev.includes(movieId)) {
				return prev.filter(id => id !== movieId)
			}
			return [...prev, movieId]
		})
	}

	const getReaction = (id: string): IReaction => {
		if (likedMovies.includes(id)) {
			return 1
		} else if (dislikedMovies.includes(id)) {
			return -1
		}
		return 0
	}

	const onReset = async () => {
		await MovieService.resetPreferences()
		const movies = await getMovies(true)
		setMovies(movies)
	}

	const onSubmit = async () => {
		const movies = await getMovies()
		setMovies(movies)
	}

	const getMovies = async (empty = false) => {
		return await MovieService.getMoviesByMood({
			liked_movies: empty ? [] : likedMovies.map(id => Number(id)),
			disliked_movies: empty ? [] : dislikedMovies.map(id => Number(id)),
			neither_movies: [],
		})
	}

	useEffect(() => {
		(async () => {
			const movies = await getMovies()
			setMovies(movies)
		})()
	}, [])

	if (movies.length === 0) {
		return <PagePreloader/>
	}

	return (
		<>
			<Grid>
				{movies.map(movie => (
					<Grid.Col xs={12} sm={6} key={movie.id}>
						<MovieCard movie={movie} onLike={onLike} onDislike={onDislike}
							reaction={getReaction(movie.id)}
						/>
					</Grid.Col>
				))}
			</Grid>
			<Affix position={{bottom: 20, right: 20}}>
				<Button color='blue' onClick={onSubmit}>
					Update
				</Button>
			</Affix>
			<Affix position={{bottom: 20, left: 20}}>
				<Button color='red' onClick={onReset}>
					Reset
				</Button>
			</Affix>
		</>
	)
}
