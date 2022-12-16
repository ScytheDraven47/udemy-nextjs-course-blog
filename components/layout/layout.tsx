import { PropsWithChildren } from 'react'
import MainNavigation from './main-navigation'

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<MainNavigation />
			<main>{children}</main>
		</>
	)
}
export default Layout
