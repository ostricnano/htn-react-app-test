import htnLogo from "@assets/img/HTNdefault.png";
import SearchBar from "@components/search-bar/search-bar";
import profileImg from "@assets/img/profile-img.png";
import defaultProfileImg from "@assets/img/default-profile-img.png";

import { Link, NavLink } from "react-router-dom";
import "./styles.css";
import StandardButton from "@components/common/buttons/stantad-button";

const TopNavBar = () => {
  const isLoggedIn = true;
  const profileIcon = false;
  return (
    <div className="nav-bar">
      <div className="left-container">
        <Link to="/">
          <div className="logo-wrapper">
            <img className="logo" src={htnLogo} alt="HTN Logo" />
          </div>
        </Link>
        <SearchBar placeHolder="Search what you want to watch" />
      </div>
      <div className="right-container">
        <div className="tabs">
          {isLoggedIn && (
            <NavLink to="/my-picks">
              <li className="tab-item">My Picks</li>
            </NavLink>
          )}
          <Link to="/leagues">
            <li className="tab-item">Leagues</li>
          </Link>
          <Link to="events">
            <li className="tab-item">Events</li>
          </Link>
          <Link to="venues">
            <li className="tab-item">Venues</li>
          </Link>
        </div>
        {!isLoggedIn ? (
          <div className="button-container">
            <StandardButton label="Log In" type="secondary" />
            <StandardButton label="Sign Up" type="primary" />
          </div>
        ) : (
          <Link to="/account/profile">
            <div className="profile-img-wrapper">
              {profileIcon ? (
                <img
                  className="profile-img"
                  src={profileImg}
                  alt="Profile image"
                />
              ) : (
                <img
                  className="profile-img"
                  src={defaultProfileImg}
                  alt="Profile image"
                />
              )}
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopNavBar;
