import React from 'react'
import './Footer.css'
import { Link } from 'gatsby'

import { Instagram, Globe, Mail, Twitter } from 'react-feather'

export default () => (
  <div>
    <footer className="footer">
      <div className="container row mx-auto">
        <div className="col-lg-3 mx-auto text-center">
          <ul>
            <li>
              <h5>Pages</h5>
            </li>
            <li>
              <Link to="/services/">Services</Link>
            </li>
            <li>
              <Link to="/services/">Work</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 mx-auto text-center">
          <ul>
            <li>
              <h5>Serviecs</h5>
            </li>
            <li>
              <Link to="/services/">SEO</Link>
            </li>
            <li>
              <Link to="/services/">Development</Link>
            </li>
            <li>
              <Link to="/contact/">Consultation</Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 mx-auto text-center">
          <ul>
            <li>
              <h5>Contact</h5>
            </li>
            <li>
              <Link to="###">hello@centralave.com</Link>
            </li>
            <li>
              <Link to="/blog/">20th St. &amp; Central Ave. St Pete</Link>
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
            href="https://instagram.com/centralavemarketing"
            alt="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size="3rem" className="footer-li p-2" />
          </a>
          <a
            href="https://facebook.com/centralavemarketing"
            alt="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size="3rem" className="footer-li p-2" />
          </a>
          <a
            href="https://coastal-division.com"
            alt="Coastal Division LLC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe size="3rem" className="footer-li p-2" />
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
