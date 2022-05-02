import {Card, Divider, List, Text, Title} from '@mantine/core'
import {FC} from 'react'
import {IAboutItem} from '../../types'

interface Props {
	item: IAboutItem
}

export const AboutCard: FC<Props> = ({item}) => {
	const {title, points, description} = item

	return (
		<Card shadow='xl'>
			<Card.Section p='md'>
				<Title order={3}>
					{title}
				</Title>
			</Card.Section>
			<Divider mx='-md'/>
			<Card.Section p='md'>
				{points && (
					<List>
						{points.map((text, index) => (
							<List.Item key={index}>
								{text}
							</List.Item>
						))}
					</List>
				)}
				{description && description.split('\n').map((text, index) => (
					<Text key={index} mb='xs'>
						{text}
					</Text>
				))}
			</Card.Section>
		</Card>
	)
}
