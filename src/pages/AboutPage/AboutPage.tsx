import {Grid} from '@mantine/core'
import {FC} from 'react'
import {AboutCard} from '../../components'
import {ABOUT_ITEMS} from '../../constants'

export const AboutPage: FC = () => {
	return (
		<Grid>
			{ABOUT_ITEMS.map((item, index) => item.big ? (
				<Grid.Col key={index}>
					<AboutCard item={item}/>
				</Grid.Col>
			) : (
				<Grid.Col key={index} xs={12} sm={6} md={4}>
					<AboutCard item={item}/>
				</Grid.Col>
			))}
		</Grid>
	)
}
