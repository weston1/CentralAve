import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Meta from './Meta'
import Nav from './Nav'
import Footer from './Footer'

import 'modern-normalize/modern-normalize.css'
import './globalStyles.css'

export default ({ children, meta, title }) => {
  return (
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          settingsYaml {
            siteTitle
            siteDescription
            googleTrackingId
            socialMediaCard {
              image
            }
          }
          allPosts: allMarkdownRemark(
            filter: { fields: { contentType: { eq: "postCategories" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const { siteTitle, socialMediaCard, googleTrackingId } =
            data.settingsYaml || {},
          subNav = {
            posts: data.allPosts.hasOwnProperty('edges')
              ? data.allPosts.edges.map((post) => {
                  return { ...post.node.fields, ...post.node.frontmatter }
                })
              : false
          }

        return (
          <Fragment>
            <Helmet
              defaultTitle={siteTitle}
              titleTemplate={`%s | ${siteTitle}`}
            >
              <html lang="en" />
              {title}
              <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Source+Sans+Pro:wght@300&display=swap"
                rel="stylesheet"
                rel="preload"
              />
              <link
                href="https://assets.calendly.com/assets/external/widget.css"
                rel="stylesheet"
              />
              {/* Add font link tags here */}
            </Helmet>

            <Meta
              googleTrackingId={googleTrackingId}
              absoluteImageUrl={
                socialMediaCard &&
                socialMediaCard.image &&
                socialMediaCard.image
              }
              {...meta}
              {...data.settingsYaml}
            />

            <Nav subNav={subNav} />

            <Fragment>{children}</Fragment>

            <Footer />
            <Fragment>
              <script
                async
                src="https://assets.calendly.com/assets/external/widget.js"
                type="text/javascript"
              ></script>
              <script
                async
                src="//code.tidio.co/pluoetqfte24pcialwix6p0guhudci23.js"
                type="text/javascript"
              ></script>
            </Fragment>
          </Fragment>
        )
      }}
    />
  )
}
