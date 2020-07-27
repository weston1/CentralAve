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
      <div className="col-lg-6 p-5 order-last">
        <div class="pattern-dots gray-light m-10">
          <div className="Contact--Card">
            <div className="container">
              <FormSimple />
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6 m-auto">
        <div className="container">
          <Content source={section1} />
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
