import React from "react";
import { Link } from "react-router-dom";
import { footerLogo } from "../../assets";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo-box">
          <img src={footerLogo} alt="logo" />
          <p>&copy; {new Date().getFullYear()} GitHub, Inc.</p>
        </div>
        <ul className="footer-links">
          <li>
            <Link to="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service">
              Terms
            </Link>
          </li>
          <li>
            <Link to="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">
              Privacy
            </Link>
          </li>
          <li>
            <Link to="https://github.com/security">Security</Link>
          </li>
          <li>
            <Link to="https://www.githubstatus.com/">Status</Link>
          </li>
          <li>
            <Link to="https://docs.github.com/en">Docs</Link>
          </li>
          <li>
            <Link to="https://support.github.com/?tags=dotcom-footer">
              Contact GitHub
            </Link>
          </li>
          <li>
            <Link to="https://github.com/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="https://docs.github.com/en">API</Link>
          </li>
          <li>
            <Link to="https://github.com/services/">Training</Link>
          </li>
          <li>
            <Link to="https://github.blog/">Blog</Link>
          </li>
          <li>
            <Link to="https://github.com/about">About</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
