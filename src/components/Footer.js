import React from 'react'
import './Footer.css'
import { Link } from 'gatsby'

import { Mail, Facebook, Twitter } from 'react-feather'

export default () => (
  <div>
    <footer className="footer">
      <div className="container row mx-auto">
        <div className="col-lg-3 col-md-4 col-6 mx-auto text-center">
          <Link to="/" alt="Central Ave Marketing">
            <img
              src="../images/CentralAve-LogoFull.svg"
              alt="Central Ave Marketing"
            />
          </Link>
        </div>
        <div className="col-lg-2 col-md-4 col-6 mx-auto text-center">
          <ul>
            <li>
              <h5>Pages</h5>
            </li>
            <li>
              <Link to="/services/">Services</Link>
            </li>
            <li>
              <Link to="/services/">Featured Projects</Link>
            </li>
            <li>
              <Link to="/contact/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-4 col-6 mx-auto text-center">
          <ul>
            <li>
              <h5>Serviecs</h5>
            </li>
            <li>
              <Link to="/contact/">Web Design</Link>
            </li>
            <li>
              <Link to="/services/">Development</Link>
            </li>
            <li>
              <Link to="/services/">SEO</Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-2 col-md-4 col-6 mx-auto text-center">
          <ul>
            <li>
              <h5>Contact</h5>
            </li>
            <li>
              <Link to="/contact/">
                20th St. &amp; Central Ave. St&nbsp;Pete
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="credit">
        <div className="py-3">
          <span className="text-center">
            © {new Date().getFullYear()}&nbsp;
            <Link to="/" alt="Central Ave Marketing">
              Central Ave Marketing
            </Link>
            .
          </span>
        </div>

        <div className="container col-lg-6 text-center">
          <a
            href="https://twitter.com/centralavem"
            alt="Central Ave Marketing Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size="3rem" className="footer-li p-2" />
          </a>
          <a
            href="https://facebook.com/centralavemarketing"
            alt="Central Ave Marketing Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size="3rem" className="footer-li p-2" />
          </a>
          <a
            href=""
            alt="Contact Central Ave Marketing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size="3rem" className="footer-li p-2" />
          </a>
        </div>
      </div>
    </footer>
  </div>
)
