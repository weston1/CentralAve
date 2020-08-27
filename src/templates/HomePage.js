import React from 'react'
import { graphql, Link } from 'gatsby'
import { Fade, Slide } from 'react-awesome-reveal'
import { motion } from 'framer-motion'
import { Search, Feather, ArrowRight } from 'react-feather'

import Layout from '../components/Layout'
import MainHeader from '../components/MainHeader'
import Content from '../components/Content'
import Image from '../components/Image'
import FooterNote from '../components/FooterNote'

export const HomePageTemplate = ({
  title,
  subtitle,
  featuredImage,
  logo,
  section1,
  section2,
  section3
}) => (
  <main className="Home">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transform={{ duration: 1 }}
    >
      <MainHeader
        large
        title={title}
        subtitle={subtitle}
        logo={logo}
        backgroundImage={featuredImage}
      />

      <section className="section thick">
        <div className="container row">
          <div className="col-lg-8 col-12 my-auto mx-auto text-center">
            <Fade>
              <div className="col-lg-4 col-4 mx-auto">
                <img
                  src="../images/logo.svg"
                  className="img-fluid"
                  alt="St Pete Web Development"
                />
              </div>

              <Content source={section1} />
            </Fade>
          </div>
        </div>
      </section>

      <section className="section thick">
        <div className="row">
          <div className="container col-lg-6 col-10 mx-auto order-sm-0 my-auto">
            <Slide direction="left">
              <img
                src="../images/macbook-long-scroll.jpg"
                className="img-fluid imgFeature"
                alt="St Pete Web Development"
              />
            </Slide>
          </div>
          <div className="container col-lg-5 col-10 my-auto mx-auto order-sm-2">
            <Fade>
              <Content source={section2} />
              <Link
                to="/contact/"
                alt="Central Ave Web Services"
                className="Button Button--Outline"
                aria-label="Free Consultation"
              >
                Free consultation
              </Link>
            </Fade>
          </div>
        </div>
      </section>

      <section className="section thick">
        <div className="row">
          <div className="container col-lg-5 col-10 my-auto mx-auto">
            <Fade>
              <Content source={section3} />
              <Link
                to="/services/"
                alt="Central Ave Web Services"
                className="Button Button--Outline"
                aria-label="Our Digital Services"
              >
                Our Digital Services
              </Link>
            </Fade>
          </div>
          <div className="container col-lg-6 col-10 mx-auto order-sm-0 my-auto">
            <Slide direction="right">
              <img
                src="../images/iphone-long.jpg"
                className="img-fluid imgFeature"
                alt="St Pete Web Development"
              />
            </Slide>
          </div>
        </div>
      </section>

      <FooterNote />
    </motion.div>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        logo
        section1
        section2
        section3
      }
    }
  }
`
