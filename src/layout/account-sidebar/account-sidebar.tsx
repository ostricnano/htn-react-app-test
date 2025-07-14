import { NavLink } from "react-router-dom";
import profile from "@assets/icons/profile-account-icon.png";
import subscriptions from "@assets/icons/account-subscription-icon.png";
import billing from "@assets/icons/account-billing-icon.png";
import logOut from "@assets/icons/account-log-out-icon.png";

import styles from "./account-sidebar.module.css";

const AccountSidebar = () => {
  return (
    <nav className={styles.sideBar}>
      <li className={styles.sideBarItem}>
        <img className={styles.AccountIcon} src={profile} />
        <NavLink to="/account/profile">
          <p className={styles.itemText}>Profile</p>
        </NavLink>
      </li>
      <li className={styles.sideBarItem}>
        <img className={styles.AccountIcon} src={subscriptions} />
        <NavLink to="/account">
          <p className={styles.itemText}>Subscriptions</p>
        </NavLink>
      </li>
      <li className={styles.sideBarItem}>
        <img className={styles.AccountIcon} src={billing} />
        <NavLink to="/account">
          <p className={styles.itemText}>Billing</p>
        </NavLink>
      </li>
      <li className={styles.sideBarItem}>
        <img className={styles.AccountIcon} src={logOut} />
        <p className={styles.itemText}>Log out</p>
      </li>
    </nav>
  );
};

export default AccountSidebar;
