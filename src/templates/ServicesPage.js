import React from 'react'
import { Link, graphql } from 'gatsby'
import {
  AtSign,
  Check,
  ChevronLeft,
  Monitor,
  Search,
  ArrowRight,
  Feather,
  Mail,
  PieChart,
  Smartphone,
} from 'react-feather'
import { Fade } from 'react-awesome-reveal'
import { motion } from 'framer-motion'

import SecondaryHeader from '../components/SecondaryHeader'
import Content from '../components/Content'
import ServiceFeatures from '../components/ServiceFeatures'

import Layout from '../components/Layout'
import FooterNote from '../components/FooterNote'

// Export Template for use in CMS preview
export const ServicesPageTemplate = ({
  title,
  subtitle,
  section1,
  img0,
  img1,
  featuredImage,
  featureArray,
}) => (
  <main className="ServicesPage">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transform={{ duration: 1 }}
    >
      <SecondaryHeader large title={title} subtitle={subtitle} />
      <section className="section thick bg-chill"></section>
      <section className="section thick">
        <div className="container row">
          <div className="col-12 mx-auto text-center">
            <h3>Central Ave Services</h3>
          </div>
          <div className="col-lg-4 col-11 mx-auto">
            <div className="FeatureCard">
              <Search size="40px" />
              <h4>SEO</h4>

              <p>
                Organically drive traffic to your website using search engine
                optimization to help people in the Tampa Bay area find your
                business online.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-11 mx-auto">
            <div className="FeatureCard">
              <ChevronLeft size="40px" />
              <h4>Web Design</h4>
              <p>
                Create a modern website as unique as your business that works
                well on any device and loads quickly.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-11 mx-auto ">
            <div className="FeatureCard">
              <Monitor size="40px" /> <h4>E-Commerce</h4>
              <p>
                Do you have an opportunity to bring the spirit of St. Pete
                online? We can help you get your online store off the ground.
              </p>
              <Link to="/blog/" className="my-auto">
                <h5>
                  Resources <ArrowRight size="2rem" />
                </h5>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-11 mx-auto">
            <div className="FeatureCard">
              <Mail size="40px" />
              <h4>Email &amp; SMS</h4>
              <p>
                Build a pipeline of customers and stay in-touch with them about
                exciting updates to your business.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-11 mx-auto ">
            <div className="FeatureCard">
              <Feather size="40px" />
              <h4>Content &amp; Blog Writing</h4>
              <p>
                Your business has a unique perspective and story to tell, we can
                help you create and amplify your message.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-11 mx-auto ">
            <div className="FeatureCard">
              <Smartphone size="40px" />
              <h4>Social Media Marketing</h4>
              <p>
                Connect with customers and potential customers on social media -
                giving them valuable updates &amp; information or just showing
                them a fun look into a day in the life.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-11 mx-auto">
            <div className="FeatureCard">
              <PieChart size="40px" />
              <h4>Branding &amp; Strategy</h4>
              <p>
                Connect with customers and potential customers on social media -
                giving them valuable updates &amp; information or just showing
                them a fun look into a day in the life.
              </p>
            </div>
          </div>
          <div className="col-lg-8 col-11 mx-auto d-none d-md-block d-lg-block">
            <div className="FeatureCard-ImgBlock"></div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container row">
          <div className="col-lg-5 col-md-5 col-11 mx-auto my-auto">
            <img
              src="../images/iphones.jpg"
              className="img-fluid imgFeature"
              alt="St Pete Web Development"
            />
          </div>
          <div className="col-lg-5 col-11 my-auto mx-auto">
            <Content source={section1} />
            <Link
              to="/contact/"
              alt="Central Ave Web Services"
              className="Button Button--Outline"
              aria-label="Book a Consultation"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <FooterNote />
    </motion.div>
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
      ...featureArray
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
