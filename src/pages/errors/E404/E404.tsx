import {Image} from '@mantine/core'
import {FC} from 'react'
import image from '../../../assets/images/404.jpg'

export const E404: FC = () => {
	return (
		<Image src={image} fit='cover'/>
	)
}
