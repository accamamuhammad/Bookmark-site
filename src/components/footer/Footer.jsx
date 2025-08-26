import FooterCSS from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={FooterCSS.logoLinks}>
        <ul>
          <li>features</li>
          <li>pricing</li>
          <li>contact</li>
        </ul>
        <div className={FooterCSS.socialLinks}>
          <img
            src="/public/images/icon-facebook.svg"
            alt="footer-facebook-icon"
          />
          <img
            src="/public/images/icon-twitter.svg"
            alt="footer-twitter-icon"
          />
        </div>
      </div>
      <div className={FooterCSS.BuiltBy}>
        <p>built by accama</p>
      </div>
    </footer>
  );
};
export default Footer;
