import Footer from '@layout/footer/footer'
import TopNavBar from '@layout/top-nav/top-nav'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <TopNavBar />
        <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout