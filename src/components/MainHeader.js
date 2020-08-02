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
      <div className="col-lg-5 mx-auto my-auto">
        <h1 className="MainHeader--Title">{title}</h1>
        <h2 className="MainHeader--Subtitle">{subtitle}</h2>
        <div>
          <Link
            to="/contact"
            className="Button Button--Solid"
            alt="Central Ave Marketing Contact Us"
          >
            Let's Talk
          </Link>

          <Link
            to="/contact"
            className="Button Button--Outline my-auto"
            alt="Central Ave Marketing Contact Us"
          >
            Watch Video <Play size="1rem" />
          </Link>
        </div>
      </div>

      <div className="col-lg-6 text-center my-auto">
        <div className="MainHeader--BG">
          {logo && (
            <Image src={logo} alt={title} className="MainHeader--Logo" />
          )}
        </div>
      </div>
    </div>
  )
}

MainHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default MainHeader
