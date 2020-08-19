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
        <div class="Footer--circle js-rellax"></div>
        <div class="Footer--circle js-rellax"></div>
        <div class="Footer--circle js-rellax"></div>
        <div class="Footer--circle js-rellax"></div>
        <div class="Footer--circle js-rellax"></div>
      </div>
      <div className="FooterNote-Container mx-auto">
        <div className="row mx-auto">
          <div className="col-lg-5 FooterNote--Img--Container d-block d-md-none d-lg-none">
            <div className="FooterNote--Img"></div>
          </div>
          <div className="col-lg-6 col-md-6 col-10 taLeft my-auto mx-auto">
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

          <div className="col-lg-5 FooterNote--Img--Container d-none d-md-block d-lg-block">
            <div className="FooterNote--Img"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

FooterNote.propTypes = {
  title: PropTypes.string
}

export default FooterNote
