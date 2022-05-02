import {ActionIcon, Card, Divider, Image, Title} from '@mantine/core'
import dayjs from 'dayjs'
import {FC} from 'react'
import {ThumbDown, ThumbUp} from 'tabler-icons-react'
import placeholderImage from '../../assets/images/placeholder.jpg'
import {POSTER_BASE_URL} from '../../constants'
import {IMovie, IReaction} from '../../types'
import s from './MovieCard.module.css'

interface Props {
	movie: IMovie
	reaction?: IReaction
	onLike?: (id: string) => void
	onDislike?: (id: string) => void
}

export const MovieCard: FC<Props> = ({movie, reaction, onLike, onDislike}) => {
	const {id, title, overview, released_date, poster_url, rating} = movie

	const onClickLike = () => {
		onLike && onLike(id)
	}

	const onClickDislike = () => {
		onDislike && onDislike(id)
	}

	return (
		<Card shadow='xl'>
			<Card.Section className={s.wrapper}>
				<Image src={`${POSTER_BASE_URL}${poster_url}`} height={500} withPlaceholder
					placeholder={
						<Image src={placeholderImage}/>
					}
				/>
				<div className={s.overlay}>
					<div className={s.overlayInner}>
						<div>
							<div className={s.header}>
								<div className={s.left}>
									<Title order={2}>{title}</Title>
									<Title order={4}>
										<span className={s.rating}>{rating}</span> / 10
									</Title>
									<Title order={4}>
										{dayjs(released_date.substring(0, 10)).format('MMMM D, YYYY')}
									</Title>
								</div>
								{onLike && onDislike && (
									<div className={s.right}>
										<ActionIcon color='blue' variant='hover' size='xl' onClick={onClickLike}>
											<ThumbUp size={30}
												fill={reaction === 1 ? 'var(--mantine-color-blue-0)' : 'none'}
											/>
										</ActionIcon>
										<ActionIcon color='red' variant='hover' size='xl' onClick={onClickDislike}>
											<ThumbDown size={30}
												fill={reaction === -1 ? 'var(--mantine-color-blue-0)' : 'none'}
											/>
										</ActionIcon>
									</div>
								)}
							</div>
							<Divider mx='-md' mt='xs'/>
						</div>
						<Title order={5}>
							{overview}
						</Title>
					</div>
				</div>
			</Card.Section>
		</Card>
	)
}
