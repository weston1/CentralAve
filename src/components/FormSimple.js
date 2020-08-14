import React from 'react'

import './Form.css'

export default ({
  name = 'Simple Form',
  subject = 'Central Ave', // optional subject of the notification email
  action = '',
}) => (
  <form
    className="Form mx-auto"
    name={name}
    action={action}
    data-netlify="true"
    data-netlify-honeypot="_gotcha"
  >
    <label aria-label="Name Input" className="Form--Label">
      <input
        aria-label="Name Input"
        className="Form--Input Form--Input-w Form--InputText"
        type="text"
        placeholder="Name"
        name="firstname"
        required
      />
      <span>Name</span>
    </label>
    <label aria-label="Email Input" className="Form--Label">
      <input
        aria-label="Email Input"
        className="Form--Input Form--InputText"
        type="email"
        placeholder="Email"
        name="emailAddress"
        required
      />
      <span>Email</span>
    </label>
    <label aria-label="Enquiry Input" className="Form--Label has-arrow">
      <select
        aria-label="Enquiry Input"
        className="Form--Input Form--Select"
        name="type"
        defaultValue="Type of Enquiry"
        required
      >
        <option disabled hidden>
          Type of Enquiry
        </option>
        <option>Project Inquiry</option>
        <option>Question?</option>
        <option>Say hello</option>
      </select>
    </label>
    <label aria-label="Message Input" className="Form--Label">
      <textarea
        aria-label="Message Input"
        className="Form--Input Form--InputText"
        placeholder="Message"
        rows="3"
        required
      />
      <span>Message</span>
    </label>

    <input type="text" name="_gotcha" style={{ display: 'none' }} />
    {!!subject && <input type="hidden" name="subject" value={subject} />}
    <input type="hidden" name="form-name" value={name} />
    <input
      aria-label="Submit Button"
      className="Button Button--Solid Form--SubmitButton"
      type="submit"
      value="Let's Talk"
    />
  </form>
)
