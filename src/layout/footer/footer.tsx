import htnLogo from "@assets/img/HTNdefault.png";
import youtube from "@assets/icons/Youtube-icon.png";
import instagram from "@assets/icons/Instagram-icon.png";
import linkedin from "@assets/icons/LinkedIn-icon.png";
import facebook from "@assets/icons/Facebook-icon.png";
import tiktok from "@assets/icons/TikTok-icon.png";
import x from "@assets/icons/X-icon.png";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-container">
        <div className="logo-wrapper">
          <img className="logo" src={htnLogo} />
        </div>
        <div className="footer-tabs">
          <li>Terms Of Use</li>
          <li>Privacy-Policy</li>
          <li>Help</li>
          <li>FAQ</li>
        </div>
        <p>© 2025 HomeTeam Live</p>
      </div>
      <div className="footer-social-media">
        <li className="social-media-item">
          <a>
            <img className="icon" src={x} />
          </a>
        </li>
        <li className="social-media-item">
          <a>
            <img className="icon" src={youtube} />
          </a>
        </li>
        <li className="social-media-item">
          <a>
            <img className="icon" src={instagram} />
          </a>
        </li>
        <li className="social-media-item">
          <a>
            <img className="icon" src={linkedin} />
          </a>
        </li>
        <li className="social-media-item">
          <a>
            <img className="icon" src={facebook} />
          </a>
        </li>
        <li className="social-media-item">
          <a>
            <img className="icon" src={tiktok} />
          </a>
        </li>
      </div>
    </div>
  );
};

export default Footer;
