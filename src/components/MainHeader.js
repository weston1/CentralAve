import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Fade } from 'react-awesome-reveal'

import Image from './Image'
import './MainHeader.css'

const MainHeader = ({
  title,
  subtitle,
  logo,
  backgroundImage,
  large,
  className = ''
}) => {
  if (large) className += ' MainHeader-left'
  return (
    <div className={`MainHeader row relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="left"
          src={backgroundImage}
          alt={title}
          size="fit"
        />
      )}

      <div class="main__circles">
        <div class="main__circle"></div>
        <div class="main__circle js-rellax" data-rellax-speed="1"></div>
        <div class="main__circle js-rellax" data-rellax-speed="2"></div>
        <div class="main__circle js-rellax" data-rellax-speed=".3"></div>
        <div class="main__circle js-rellax" data-rellax-speed="2"></div>
        <div class="main__circle js-rellax" data-rellax-speed="1"></div>
      </div>
      <div className="col-lg-5 col-md-6 col-11 mx-auto my-auto">
        <h1 className="MainHeader--Title">{title}</h1>
        <h2 className="MainHeader--Subtitle">{subtitle}</h2>
        <div className="row">
          <Fade cascade={true}>
            <Link
              to="/contact/"
              className="Button Button--Solid"
              alt="Central Ave Marketing Contact Us"
              aria-label="Let's Talk"
            >
              Let's Talk
            </Link>
            <Link
              to="/services/"
              className="Button Button--Outline"
              alt="Central Ave Marketing Contact Us"
              aria-label="Our Services"
            >
              Our Services
            </Link>
          </Fade>
        </div>
      </div>

      <div className="col-lg-6">
        <Fade delay={600} triggerOnce="true">
          {logo && <Image src={logo} alt={title} className="MainHeader--Img" />}
        </Fade>
      </div>
    </div>
  )
}

MainHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default MainHeader
