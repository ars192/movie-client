import {FC, useEffect, useState} from 'react'
import {MovieCard, PagePreloader} from '../../components'
import {MovieService} from '../../services'
import {IMovie} from '../../types'

export const UndiscoveredMoviePage: FC = () => {
	const [movie, setMovie] = useState<IMovie | null>(null)

	useEffect(() => {
		(async () => {
			const movie = await MovieService.getUndiscoveredMovie()
			setMovie(movie)
		})()
	}, [])

	if (!movie) {
		return <PagePreloader/>
	}

	return (
		<MovieCard movie={movie}/>
	)
}
