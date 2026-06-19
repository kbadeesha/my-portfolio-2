import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand/About Section */}
        <div className="footer-section brand">
          <h2 className="footer-logo">
            Brand<span>Name</span>
          </h2>
          <p className="footer-desc">
            Building modern web experiences with passion. Connect with us to
            stay updated on our latest projects and insights.
          </p>
        </div>

        {/* Links Sections */}
        <div className="footer-section links">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section links">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#help">Help Center</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms of Use</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="copyright">
          &copy; {new Date().getFullYear()} BrandName. All rights reserved.
        </p>
        <div className="footer-socials">
          <a href="#twitter" aria-label="Twitter">
            Twitter
          </a>
          <a href="#github" aria-label="GitHub">
            GitHub
          </a>
          <a href="#linkedin" aria-label="LinkedIn">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
