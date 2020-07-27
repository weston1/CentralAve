import React from 'react'
import { Link, graphql } from 'gatsby'
import { Search, ArrowRight, Feather } from 'react-feather'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Image from '../components/Image'
import Layout from '../components/Layout'
import FooterNote from '../components/FooterNote'

// Export Template for use in CMS preview
export const ServicesPageTemplate = ({
  title,
  subtitle,
  section1,
  img0,
  img1,
  featuredImage
}) => (
  <main className="ServicesPage">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="col-lg-6 mx-auto taCenter">
        <h3>
          A combination of tools to design and develop modern applications at
          ease.
        </h3>
      </div>

      <div className="container row mx-auto">
        <div className="col-lg-3 FeatureCard">
          <Search size="40px" />
          <h5>Hello World</h5>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <Link to="/blog/" className="my-auto">
            <h5>
              Resources <ArrowRight size="2rem" />
            </h5>
          </Link>
        </div>
        <div className="col-lg-3 FeatureCard">
          <Feather size="40px" />
          <h5>Hello World</h5>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <Link to="/blog/" className="my-auto">
            <h5>
              Resources <ArrowRight size="2rem" />
            </h5>
          </Link>
        </div>
        <div className="col-lg-3 FeatureCard">
          <Image src={img1} className="icon" />
          <h5>Hello World</h5>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum pariatur.
          </p>
          <Link to="/blog/" className="my-auto">
            <h5>
              Resources <ArrowRight size="2rem" />
            </h5>
          </Link>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container row mx-auto">
        <div className="col-lg-12">
          <hr />
        </div>
        <div className="col-lg-2 taCenter mx-auto">
          <h4>&lt;/&gt;</h4>
          <p>Detailed Documentation for client success</p>
        </div>
        <div className="col-lg-2 taCenter mx-auto">
          <h4>15+</h4>
          <p>Years combined experience</p>
        </div>
        <div className="col-lg-2 taCenter mx-auto">
          <h4>100+</h4>
          <p>Hours lorem ipsum lore </p>
        </div>
        <div className="col-lg-2 taCenter mx-auto">
          <h4>FREE</h4>
          <p>Consultation and website review for all clients</p>
        </div>
        <div className="col-lg-6 mx-auto pt-4">
          <Link
            to="/contact/"
            alt="Central Ave Marketing Digital Services Contact"
            className="Button"
          >
            Lets Talk
          </Link>
        </div>
      </div>
    </section>
    <FooterNote />
  </main>
)

const ServicesPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ServicesPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default ServicesPage

export const pageQuery = graphql`
  query ServicesPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        section1
        img0
        img1
        section2
        section3
      }
    }
  }
`
