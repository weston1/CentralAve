import React from 'react'
import { Link, graphql } from 'gatsby'
import {
  AtSign,
  Check,
  ChevronLeft,
  Monitor,
  Search,
  ArrowRight,
  Feather
} from 'react-feather'
import { Fade } from 'react-awesome-reveal'
import { motion } from 'framer-motion'

import SecondaryHeader from '../components/SecondaryHeader'
import Content from '../components/Content'
import BackgroundVideo from '../components/BackgroundVideo'
import FeatureArray from '../components/FeatureArray'

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
  featuredImage,
  video,
  videoPoster,
  videoTitle,
  featureArray
}) => (
  <main className="ServicesPage">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transform={{ duration: 1 }}
    >
      <SecondaryHeader large title={title} subtitle={subtitle} />

      <section className="section thick">
        <div className="container row">
          <div className="col-lg-5 my-auto mx-auto">
            <Content source={section1} />
            <Link
              to="/contact/"
              alt="Central Ave Web Services"
              className="Button Button--Outline"
            >
              Book a Consultation
            </Link>
          </div>

          <div className="Feat--Gradient col-lg-5 mx-auto order-sm-0 my-auto">
            <img
              src="https://marvelapp.com/static/democratise@2x-fcb93c33bc9e2798b7af1400a7a95090-92aa8.jpg"
              className="img-fluid FeatureCard"
              max-width="200px"
              alt="St Pete Web Development"
            />
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
                    Organically drive traffic to your website using search
                    engine optimization to help people in the Tampa Bay area
                    find your business online.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 FeatureIcon">
                <AtSign size="40px" className="my-4" />
                <div className="py-3">
                  <h5>Web Design</h5>
                  <p>
                    Create a modern website as unique as your business that
                    works well on any device and loads quickly.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 FeatureIcon">
                <Monitor size="40px" className="my-4" />
                <div className="py-3">
                  <h5>E-Commerce</h5>
                  <p>
                    Do you have an opportunity to bring the spirit of St. Pete
                    online? We can help you get your online store off the
                    ground.
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
                    Connect with customers and potential customers on social
                    media - giving them valuable updates &amp; information or
                    just showing them a fun look into a day in the&nbsp;life.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 FeatureIcon px-2">
                <ChevronLeft size="40px" className="my-4" />
                <div className="py-3">
                  <h5>Branding &amp; Strategy</h5>
                  <p>
                    Need help bringing out the heart of what makes your business
                    unique? We can help you identify your target customer,
                    unique positioning and how to bring that to life visually
                    with a brand identity and&nbsp;logo.
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
        <div className="icon--bubble">
          <div class="icon--bubble--img">
            <img
              src="https://images.prismic.io/clubhouse%2F99250ff7-44e0-4708-b107-5208dbe5b338_github.png?auto=format%2Ccompress&fit=max&q=50"
              className="img-fluid"
            />
          </div>
        </div>

        <Fade cascade={true}>
          <FeatureArray images={featureArray} />
        </Fade>
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
        video
        videoPoster
        videoTitle
        section1
        img0
        img1
        section2
        section3
      }
    }
  }
`
