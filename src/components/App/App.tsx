import {AppShell, ColorScheme, ColorSchemeProvider, Container, MantineProvider, Paper} from '@mantine/core'
import {useColorScheme, useHotkeys, useLocalStorage} from '@mantine/hooks'
import clsx from 'clsx'
import {observer} from 'mobx-react-lite'
import {FC} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Header, Navbar, Routes} from '..'
import {LOCAL_STORAGE_KEYS} from '../../constants'
import s from './App.module.css'

export const App: FC = observer(() => {
	const preferredColorScheme = useColorScheme()
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: LOCAL_STORAGE_KEYS.colorScheme,
		defaultValue: preferredColorScheme,
		getInitialValueInEffect: true,
	})

	const toggleColorScheme = () => {
		setColorScheme(prev => prev === 'dark' ? 'light' : 'dark')
	}

	useHotkeys([['mod+J', () => toggleColorScheme()]])

	return (
		<BrowserRouter>
			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider
					theme={{colorScheme}}
					withCSSVariables
					withNormalizeCSS
				>
					<Paper radius={0} className={clsx(s.wrapper, colorScheme === 'light' && s.lightBackground)}>
						<AppShell
							fixed
							navbarOffsetBreakpoint='sm'
							header={<Header toggleColorScheme={toggleColorScheme}/>}
							navbar={<Navbar/>}
						>
							<Container className={s.container} px={0}>
								<Routes/>
							</Container>
						</AppShell>
					</Paper>
				</MantineProvider>
			</ColorSchemeProvider>
		</BrowserRouter>
	)
})

// todo:
// 1. добавить 404 страницу
