import {Grid} from '@mantine/core'
import {FC, useEffect, useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import {MovieCard, PagePreloader} from '../../components'
import {MovieService} from '../../services'
import {IMovie} from '../../types'

export const TopMoviesPage: FC = () => {
	const [movies, setMovies] = useState<IMovie[]>([])
	const [page, setPage] = useState(1)
	const [hasMore, setHasMore] = useState(true)

	const fetchMovies = async () => {
		const newMovies = await MovieService.getTopMovies(page)
		if (!newMovies || newMovies.length < 10) {
			setHasMore(false)
		}
		setMovies(prev => [...prev, ...(newMovies || [])])
		setPage(prev => prev + 1)
	}

	useEffect(() => {
		(async () => {
			await fetchMovies()
		})()
	}, [])

	if (movies.length === 0) {
		return <PagePreloader/>
	}

	return (
		<InfiniteScroll dataLength={movies.length} next={fetchMovies} hasMore={hasMore} loader={<PagePreloader/>}
			style={{overflow: 'hidden'}}
		>
			<Grid>
				{movies.map(movie => (
					<Grid.Col xs={12} sm={6} key={movie.id}>
						<MovieCard movie={movie}/>
					</Grid.Col>
				))}
			</Grid>
		</InfiniteScroll>
	)
}
