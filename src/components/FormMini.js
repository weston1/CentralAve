import React from 'react'

import './Form.css'

export default ({
  name = 'Mini Form',
  subject = 'Central Ave', // optional subject of the notification email
  action = ''
}) => (
  <form
    className="Form mx-auto"
    name={name}
    action={action}
    data-netlify="true"
    data-netlify-honeypot="_gotcha"
  >
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
    <label aria-label="Message Input" className="Form--Label">
      <textarea
        aria-label="Message Input"
        className="Form--Input Form--InputText"
        placeholder="Message"
        rows="5"
        required
      />
      <span>Message</span>
    </label>
    <input type="text" name="_gotcha" style={{ display: 'none' }} />
    {!!subject && <input type="hidden" name="subject" value={subject} />}
    <input type="hidden" name="form-name" value={name} />
    <input
      aria-label="Submit Button"
      className="Button Button--Nav Form--SubmitButton"
      type="submit"
      value="Send it!"
    />
  </form>
)
