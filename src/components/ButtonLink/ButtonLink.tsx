import {Button, useMantineTheme} from '@mantine/core'
import {SharedButtonProps} from '@mantine/core/lib/components/Button/Button'
import {useMediaQuery} from '@mantine/hooks'
import {FC} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {appState} from '../../state'

interface Props extends SharedButtonProps {
	path: string | string[]
	withoutColor?: boolean
}

export const ButtonLink: FC<Props> = ({children, path, withoutColor, ...rest}) => {
	const navigate = useNavigate()
	const {pathname} = useLocation()
	const theme = useMantineTheme()
	const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`)

	const onClick = () => {
		if (!Array.isArray(path)) {
			navigate(path)
			if (appState.isNavbarOpen) {
				appState.closeNavbar()
			}
		}
	}

	const startsWith = () => {
		if (path === '/') {
			return false
		}
		if (path === '/auth') {
			return true
		}
		if (Array.isArray(path)) {
			return path.some(p => pathname.startsWith(p))
		}
		return pathname.startsWith(path)
	}

	const color = withoutColor ? 'dark' : startsWith() ? 'blue' : theme.colorScheme === 'dark' ? 'gray' : 'dark'

	return (
		<Button
			variant='subtle'
			onClick={onClick}
			color={color}
			size={isTablet ? 'xl' : 'sm'}
			{...rest}
		>
			{children}
		</Button>
	)
}
