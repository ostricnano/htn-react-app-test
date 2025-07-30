import Footer from '@/components/common/footer/footer'
import TopNavBar from '@/components/common/top-nav-bar/top-nav-bar'
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