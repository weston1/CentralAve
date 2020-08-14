import React from 'react'

import './Form.css'

export default ({
  name = 'Mini Form',
  subject = 'Central Ave', // optional subject of the notification email
  action = ''
}) => (
  <form
    name={name}
    subject={subject}
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    className="Form mx-auto"
  >
    {/* You still need to add the hidden input with the form name to your JSX form */}
    <input type="hidden" name="form-name" value="contact" />
    <div className=" ">
      <label className="Form--Label">
        <input
          className="Form--Input Form--InputText"
          type="text"
          placeholder="Firstname"
          name="firstname"
          required
        />
        <span>Name</span>
      </label>
    </div>
    <div className=" ">
      <label className="Form--Label">
        <input
          className="Form--Input Form--InputText"
          type="email"
          placeholder="Email"
          name="emailAddress"
          required
        />
        <span>Email</span>
      </label>
    </div>
    <div className="">
      <label className="Form--Label">
        <textarea
          className="Form--Input Form--InputText"
          placeholder="Message"
          name="message"
          rows="5"
          required
        />
        <span>Message</span>
      </label>
    </div>
    <p>
      <button type="submit" className="Button Button--Solid Form--SubmitButton">
        Send it!
      </button>
    </p>
  </form>
)
