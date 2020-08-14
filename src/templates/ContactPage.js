import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content'
import Layout from '../components/Layout'
import './ContactPage.css'
import '../components/Form.css'
import FormSimple from '../components/FormSimple'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({ section1, body }) => (
  <main className="Contact">
    <section className="Contact--Section1 row">
      <div className="col-lg-6 p-5 mx-auto text-center">
        <Content source={section1} />

        <div class="pattern-dots gray-light m-10">
          <div className="Contact--Card">
            <div className="container">
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* You still need to add the hidden input with the form name to your JSX form */}
                <input type="hidden" name="form-name" value="contact" />
                <div className="py-3">
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
                <div className="py-3">
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
                <div className="py-3">
                  <label className="Form--Label has-arrow">
                    <select
                      className="Form--Input Form--Select"
                      name="type"
                      defaultValue="Type of Enquiry"
                      required
                    >
                      <option disabled hidden>
                        Type of Enquiry
                      </option>
                      <option>Project</option>
                      <option>Question?</option>
                      <option>Say Hello</option>
                    </select>
                  </label>
                </div>
                <div className="py-3">
                  <label className="Form--Label">
                    <textarea
                      className="Form--Input Form--Textarea Form--InputText"
                      placeholder="Message"
                      name="message"
                      rows="5"
                      required
                    />
                    <span>Message</span>
                  </label>
                </div>
                <p>
                  <button
                    type="submit"
                    className="Button Button--Solid Form--SubmitButton"
                  >
                    Send
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
)

const ContactPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        section1
      }
    }
  }
`
