import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Image from './Image'
import Content from './Content'
import './MainHeader.css'
import { Play } from 'react-feather'

const MainHeader = ({
  title,
  subtitle,
  logo,
  backgroundImage,
  large,
  left,
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
        <div class="main__circle js-rellax" data-rellax-speed="2"></div>
        <div class="main__circle js-rellax" data-rellax-speed="1"></div>
        <div class="main__circle js-rellax" data-rellax-speed="2"></div>
        <div class="main__circle js-rellax" data-rellax-speed=".3"></div>
        <div class="main__circle"></div>
        <div class="main__circle js-rellax" data-rellax-speed="1"></div>
      </div>
      <div className="col-lg-5 mx-auto my-auto">
        <h1 className="MainHeader--Title">{title}</h1>
        <h2 className="MainHeader--Subtitle">{subtitle}</h2>
        <div>
          <Link
            to="/contact/"
            className="Button Button--Solid"
            alt="Central Ave Marketing Contact Us"
          >
            Let's Talk
          </Link>

          <Link
            to="/services/"
            className="Button Button--Outline my-auto"
            alt="Central Ave Marketing Contact Us"
          >
            Explore Our Work <Play size="0.8rem" />
          </Link>
        </div>
      </div>

      <div className="col-lg-6 text-center my-auto py-4">
        {logo && <Image src={logo} alt={title} className="MainHeader--Logo" />}
      </div>
    </div>
  )
}

MainHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default MainHeader
