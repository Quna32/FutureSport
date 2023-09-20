import React from 'react';

function Footer() {
  return (
<div>
    <footer className="bottom-container">
      <div className="footer-container">
        <div className="footer-column">
          {/* Connect with us links */}
          <h3>Connect with us</h3>
          <a className="footer-link" href="https://www.facebook.com/">Facebook</a>
          <a className="footer-link" href="https://twitter.com/">Twitter</a>
          <a className="footer-link" href="https://www.instagram.com/">Instagram</a>
          <a className="footer-link" href="">Careers</a>
        </div>
        <div className="footer-column">
          {/* Support links */}
          <h3>Support</h3>
          <a className="footer-link" href="">FAQs</a>
          <a className="footer-link" href="">Contact Us</a>
        </div>
        <div className="footer-column">
          {/* Account links */}
          <h3>Account</h3>
          <a className="footer-link" href="">Forgot Password</a>
          <a className="footer-link" href="">Privacy Policy</a>
          <a className="footer-link" href="">Terms and Conditions</a>
        </div>
      </div>
      <p className="copyright">© FutureSports 2023</p>
    </footer>
    </div>

  );
}

export default Footer;
