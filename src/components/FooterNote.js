import React from 'react'
import PropTypes from 'prop-types'

import './FooterNote.css'
import { Link } from 'gatsby'
import FormMini from '../components/FormMini'

const FooterNote = ({ title }) => {
  return (
    <section className="FooterNote">
      <div class="Footer--circles">
        <div class="Footer--circle"></div>
        <div class="Footer--circle js-rellax" data-rellax-speed="1"></div>
        <div class="Footer--circle js-rellax" data-rellax-speed="2"></div>
        <div class="Footer--circle js-rellax" data-rellax-speed=".3"></div>
        <div class="Footer--circle js-rellax" data-rellax-speed="2"></div>
        <div class="Footer--circle js-rellax" data-rellax-speed="1"></div>
      </div>
      <div className="FooterNote-Container mx-auto">
        <div className="container">
          <div className="row mx-auto">
            <div className="col-lg-6 col-md-6 col-12 taLeft my-auto">
              <h3>Let's grab coffee 🚀</h3>
              <p>
                We would love to hear more about your next venture, idea or
                future project.
              </p>
            </div>
            <FormMini className="col-lg-5 col-md-6 col-12" />
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
