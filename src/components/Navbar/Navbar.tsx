import {Group, Navbar as MantineNavbar, ScrollArea, useMantineTheme} from '@mantine/core'
import {useMediaQuery} from '@mantine/hooks'
import clsx from 'clsx'
import {observer} from 'mobx-react-lite'
import {FC, useEffect} from 'react'
import {routes} from '../../routes'
import {appState} from '../../state'
import {ButtonLink} from '../ButtonLink'
import s from './Navbar.module.css'

export const Navbar: FC = observer(() => {
	const theme = useMantineTheme()
	const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`)

	useEffect(() => {
		return () => {
			if (isTablet) {
				appState.closeNavbar()
			}
		}
	}, [isTablet])

	return (appState.isNavbarOpen || isTablet) ? (
		<MantineNavbar hidden={!appState.isNavbarOpen} p='md' className={clsx(isTablet && s.tabletNavbar)}
			hiddenBreakpoint='sm' width={{sm: 200, lg: 300}}
		>
			<MantineNavbar.Section grow component={ScrollArea}>
				<Group direction='column'>
					<ButtonLink path={routes.ofTheDay.path} fullWidth>
						Movie of the day
					</ButtonLink>
					<ButtonLink path={routes.byMood.path} fullWidth>
						By mood
					</ButtonLink>
					<ButtonLink path={routes.random.path} fullWidth>
						Random
					</ButtonLink>
					<ButtonLink path={routes.top.path} fullWidth>
						Top
					</ButtonLink>
					<ButtonLink path={routes.undiscovered.path} fullWidth>
						Undiscovered
					</ButtonLink>
				</Group>
			</MantineNavbar.Section>
		</MantineNavbar>
	) : null
})
