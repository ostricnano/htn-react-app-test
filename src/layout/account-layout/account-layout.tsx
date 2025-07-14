import { Outlet } from "react-router-dom";
import Footer from "@layout/footer/footer";
import TopNavBar from "@layout/top-nav/top-nav";
import AccountSidebar from "@layout/account-sidebar/account-sidebar";
import styles from './account-layout.module.css'

const AccountLayout = () => {
  return (
    <>
      <TopNavBar />
      <div className={styles.layoutContainer}>
        <AccountSidebar />
          <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AccountLayout;