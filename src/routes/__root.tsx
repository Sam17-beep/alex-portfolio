import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileGate from '../components/MobileGate'

export const Route = createRootRoute({
  component: () => (
    <MobileGate>
      <Header />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </MobileGate>
  ),
})
