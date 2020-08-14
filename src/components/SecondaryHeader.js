import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './SecondaryHeader.css'
import { Play } from 'react-feather'

const SecondaryHeader = ({
  title,
  subtitle,
  logo,
  backgroundImage,
  large,
  left,
  className = '',
}) => {
  if (large) className += ' SecondaryHeader-left'
  return (
    <div className={`SecondaryHeader row relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="left"
          src={backgroundImage}
          alt={title}
          size="fit"
        />
      )}
      <div className="col-lg-5 mx-auto my-auto text-center">
        <h1 className="SecondaryHeader--Title">{title}</h1>
        <h2 className="SecondaryHeader--Subtitle">{subtitle}</h2>
      </div>
    </div>
  )
}

SecondaryHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default SecondaryHeader
