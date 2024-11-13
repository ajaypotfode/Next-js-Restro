
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="footer" id="footer">
        <div className="share">
         <ul className="footer-icon">
          <li className="icon"><FaFacebookF /></li>
          <li className="icon"><FaInstagram/></li>
          <li className="icon"><FaTwitter/></li>
          <li className="icon"><FaLinkedin/></li>
         </ul>
        </div>
        <div className="credit">
          created by <span>coder@2023</span>
        </div>
      </section>
    </>
  );
};

export default Footer;
