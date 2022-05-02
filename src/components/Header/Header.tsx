import {Burger, Group, Header as MantineHeader, Image, useMantineTheme} from '@mantine/core'
import {useMediaQuery} from '@mantine/hooks'
import {observer} from 'mobx-react-lite'
import {FC} from 'react'
import {ButtonLink, DarkModeButton} from '..'
import logoImage from '../../assets/images/glasses.svg'
import {routes} from '../../routes'
import {appState} from '../../state'
import s from './Header.module.css'

interface Props {
	toggleColorScheme: () => void
}

export const Header: FC<Props> = observer(({toggleColorScheme}) => {
	const theme = useMantineTheme()
	const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`)

	const onBurgerClick = () => {
		appState.toggleNavbar()
	}

	return (
		<MantineHeader
			height={70}
			py='md'
			px={isTablet ? 'xs' : 'md'}
		>
			<Group position='apart'>
				{isTablet ? (
					<Burger
						opened={appState.isNavbarOpen}
						onClick={onBurgerClick}
						size={26}
						color='gray'
					/>
				) : (
					<ButtonLink
						path={routes.main.path}
						px={0}
						className={s.logoWrapper}
						withoutColor
					>
						<Image src={logoImage} height={70}/>
					</ButtonLink>
				)}
				{!isTablet && (
					<div>
						<ButtonLink path={routes.ofTheDay.path}>
							Movie of the day
						</ButtonLink>
						<ButtonLink path={routes.byMood.path}>
							By mood
						</ButtonLink>
						<ButtonLink path={routes.random.path}>
							Random
						</ButtonLink>
						<ButtonLink path={routes.top.path}>
							Top
						</ButtonLink>
						<ButtonLink path={routes.undiscovered.path}>
							Undiscovered
						</ButtonLink>
					</div>
				)}
				<DarkModeButton toggle={toggleColorScheme}/>
			</Group>
		</MantineHeader>
	)
})
