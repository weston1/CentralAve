import React from 'react'
import PropTypes from 'prop-types'
import { Calendar } from 'react-feather'

import './FooterNote.css'
import FormMini from './FormMini'
import Calendly from './Calendly'

const FooterNote = ({ title }) => {
  return (
    <section className="section FooterNote">
      <div class="Footer--circles">
        <div class="Footer--circle"></div>
        <div class="Footer--circle js-rellax" data-rellax-speed="1"></div>
        <div class="Footer--circle js-rellax" data-rellax-speed="2"></div>
        <div class="Footer--circle js-rellax" data-rellax-speed=".3"></div>
        <div class="Footer--circle js-rellax" data-rellax-speed="2"></div>
        <div class="Footer--circle js-rellax" data-rellax-speed="1"></div>
      </div>
      <div className="FooterNote-Container mx-auto">
        <div className="row mx-auto">
          <div className="col-lg-7 col-md-6 col-10 taLeft my-auto">
            <h5>
              <Calendar />
            </h5>
            <h3>Let's grab coffee</h3>
            <p>
              We would love to hear more about your next venture, idea or future
              project. No strings attached.
            </p>
            <Calendly url="https://calendly.com/centralavemarketing" />
          </div>

          <div className="FooterNote--Img--Container"></div>
        </div>
      </div>
    </section>
  )
}

FooterNote.propTypes = {
  title: PropTypes.string
}

export default FooterNote
