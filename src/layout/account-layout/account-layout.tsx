import { Outlet } from "react-router-dom";
import AccountSidebar from "@layout/account-sidebar/account-sidebar";
import styles from './account-layout.module.css'
import Footer from "@/components/common/footer/footer";
import TopNavBar from "@/components/common/top-nav-bar/top-nav-bar";

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