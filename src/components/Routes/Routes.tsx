import {observer} from 'mobx-react-lite'
import {FC, Suspense} from 'react'
import {Navigate, Route, Routes as ReactRouterRoutes} from 'react-router-dom'
import {PagePreloader} from '..'
import {Page} from '../../pages'
import {routes} from '../../routes'

export const Routes: FC = observer(() => {
	return (
		<Suspense fallback={<PagePreloader/>}>
			<ReactRouterRoutes>
				{Object.values(routes).map(({path, title, Component}) => (
					<Route key={path} path={path} element={<Page title={title} Component={Component}/>}/>
				))}
				<Route path='*' element={<Navigate replace to='/404'/>}/>
			</ReactRouterRoutes>
		</Suspense>
	)
})
