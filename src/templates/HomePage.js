import React from 'react'
import { graphql, Link } from 'gatsby'
import {
  Check,
  ChevronLeft,
  Search,
  AtSign,
  Monitor,
  Feather,
  ArrowRight
} from 'react-feather'

import MainHeader from '../components/MainHeader'
import Content from '../components/Content'
import Image from '../components/Image'
import Layout from '../components/Layout'
import FeatureArray from '../components/FeatureArray'
import FooterNote from '../components/FooterNote'

// Export Template for use in CMS preview
export const HomePageTemplate = ({
  title,
  subtitle,
  featuredImage,
  logo,
  section1,
  section2,
  section3,
  featureArray,
  body
}) => (
  <main className="Home">
    <MainHeader
      large
      title={title}
      subtitle={subtitle}
      logo={logo}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container row">
        <div className="col-lg-8 col-12 my-auto mx-auto text-center">
          <Content source={section1} />
        </div>
      </div>
    </section>

    <section className="section">
      <div className="row">
        <div className="container col-lg-4 col-6 mx-auto order-sm-0 my-auto">
          <img
            src="https://images.unsplash.com/photo-1593829427707-929b84de3774?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"
            className="img-fluid imgFeature"
            max-width="200px"
            alt="St Pete Web Development"
          />
          <div className="pattern-dots py-5 my-2"></div>
        </div>
        <div className="container col-lg-5 col-6 my-auto mx-auto order-sm-2">
          <Content source={section2} />
          <Link
            to="/services"
            alt="Central Ave Web Services"
            className="Button Button--Outline"
          >
            Our Digital Services
          </Link>
        </div>
      </div>
    </section>

    <section className="section thick">
      <div className="container row">
        <div className="col-lg-11 mx-auto">
          <div className="container row">
            <div className="col-lg-4 FeatureIcon">
              <Search size="40px" className="my-4" />
              <div className="py-3">
                <h5>SEO</h5>
                <p>
                  Organically drive traffic to your website using search engine
                  optimization to help people in the Tampa Bay area find your
                  business online.
                </p>
              </div>
            </div>
            <div className="col-lg-3 FeatureIcon">
              <AtSign size="40px" className="my-4" />
              <div className="py-3">
                <h5>Web Design</h5>
                <p>
                  Create a modern website as unique as your business that works
                  well on any device and loads quickly.
                </p>
              </div>
            </div>
            <div className="col-lg-3 FeatureIcon">
              <Monitor size="40px" className="my-4" />
              <div className="py-3">
                <h5>E-Commerce</h5>
                <p>
                  Do you have an opportunity to bring the spirit of St. Pete
                  online? We can help you get your online store off the ground.
                </p>
              </div>
            </div>
            <div className="col-lg-3 FeatureIcon px-2">
              <AtSign size="40px" className="my-4" />
              <div className="py-3">
                <h5>Email &amp; SMS Marketing</h5>
                <p>
                  Build a pipeline of customers and stay in-touch with them
                  about exciting updates to your business.
                </p>
              </div>
            </div>
            <div className="col-lg-3 FeatureIcon px-2">
              <Check size="40px" className="my-4" />
              <div className="py-3">
                <h5>Content &amp; Blog Writing</h5>
                <p>
                  Your business has a unique perspective and story to tell, we
                  can help you create and amplify your message.
                </p>
              </div>
            </div>
            <div className="col-lg-3 FeatureIcon px-2">
              <ChevronLeft size="40px" className="my-4" />
              <div className="py-3">
                <h5>Social Media Marketing</h5>
                <p>
                  Connect with customers and potential customers on social media
                  - giving them valuable updates &amp; information or just
                  showing them a fun look into a day in the&nbsp;life.
                </p>
              </div>
            </div>
            <div className="col-lg-3 FeatureIcon px-2">
              <ChevronLeft size="40px" className="my-4" />
              <div className="py-3">
                <h5>Branding &amp; Strategy</h5>
                <p>
                  Need help bringing out the heart of what makes your business
                  unique? We can help you identify your target customer, unique
                  positioning and how to bring that to life visually with a
                  brand identity and&nbsp;logo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="col-lg-6 mx-auto taCenter">
        <h3>
          A combination of tools to design and develop modern applications at
          ease.
        </h3>
      </div>

      <div className="container row mx-auto">
        <div className="col-lg-3 col-11 mx-auto FeatureCard">
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
        <div className="col-lg-3 col-11 mx-auto FeatureCard">
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
        <div className="col-lg-3 col-11 mx-auto FeatureCard">
          <Image src={logo} className="icon" />
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

    <section className="section thick">
      <FooterNote />
    </section>
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
      ...featureArray
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
