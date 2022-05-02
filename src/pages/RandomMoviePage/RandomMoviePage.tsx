import {Affix, Button} from '@mantine/core'
import {FC, useEffect, useState} from 'react'
import {MovieCard, PagePreloader} from '../../components'
import {MovieService} from '../../services'
import {IMovie} from '../../types'

export const RandomMoviePage: FC = () => {
	const [movie, setMovie] = useState<IMovie | null>(null)

	useEffect(() => {
		(async () => {
			const movie = await MovieService.getRandomMovie()
			setMovie(movie)
		})()
	}, [])

	const onRefresh = async () => {
		setMovie(null)
		const movie = await MovieService.getRandomMovie()
		setMovie(movie)
	}

	if (!movie) {
		return <PagePreloader/>
	}

	return (
		<>
			<MovieCard movie={movie}/>
			<Affix position={{bottom: 20, right: 20}}>
				<Button color='blue' onClick={onRefresh}>
					Refresh
				</Button>
			</Affix>
		</>
	)
}
