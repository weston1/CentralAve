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
              <h6>Pages</h6>
            </li>
            <li>
              <Link to="/services/" aria-label="Services">
                Services
              </Link>
            </li>
            <li>
              <Link to="/services/" aria-label="Featured Projects">
                Featured Projects
              </Link>
            </li>
            <li>
              <Link to="/contact/" aria-label="Contact Us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-4 col-6 mx-auto text-center">
          <ul>
            <li>
              <h6>Serviecs</h6>
            </li>
            <li>
              <Link to="/contact/" aria-label="Web Design">
                Web Design
              </Link>
            </li>
            <li>
              <Link to="/services/" aria-label="Development">
                Development
              </Link>
            </li>
            <li>
              <Link to="/services/" aria-label="SEO">
                SEO
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-2 col-md-4 col-6 mx-auto text-center">
          <ul>
            <li>
              <h6>Contact</h6>
            </li>
            <li>
              <Link
                to="/contact/"
                aria-label="20th St. and Central Ave. St Pete"
              >
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
            <Link
              to="/"
              alt="Central Ave Marketing"
              aria-label="Central Ave Marketing"
            >
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

          <Link to="/contact/" alt="Contact Central Ave Marketing">
            <Mail size="3rem" className="footer-li p-2" />
          </Link>
        </div>
      </div>
    </footer>
  </div>
)
