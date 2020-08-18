import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import { Fade, Bounce } from 'react-awesome-reveal'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  className = ''
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <div className={`PageHeader relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={title}
          size="cover"
        />
      )}
      <div className="container relative">
        <h1 className="PageHeader--Title">{title}</h1>
        {subtitle && (
          <Content className="PageHeader--Subtitle" src={subtitle} />
        )}
        <Transition timeout={4000} in={true} appear>
          {status => (
            <ul className={`box box-${status}`}>
              <li> Animation </li>
              <li> Transition </li>
              <li> CSSTransition </li>
              <li> SwitchTransition </li>
              <li> TransitionGroup </li>
            </ul>
          )}
        </Transition>

        <Fade>
          <p>Hello I will just Fade</p>
          <Bounce>
            <p> I will Fade and Bounce</p>
          </Bounce>
        </Fade>
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
