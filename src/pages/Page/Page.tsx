import {useDocumentTitle} from '@mantine/hooks'
import {FC} from 'react'

interface Props {
	title: string
	Component: FC
}

export const Page: FC<Props> = ({title, Component}) => {
	useDocumentTitle(`${title} | Arys`)

	return <Component/>
}
