import React from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import _get from 'lodash/get'

import Layout from '../components/Layout'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query NotFoundPageQuery {
        globalSettings: settingsYaml {
          siteTitle
        }
      }
    `}
    render={data => (
      <Layout>
        <Helmet>
          <title>404</title>
        </Helmet>
        <section className="section thick">
          <div className="container skinny taCenter my-auto">
            <h1>404</h1>
            <h4>
              Outlook hazy.. please try again.
              <br />
              <Link className="button" to="/">
                {_get(data, 'globalSettings.siteTitle')} Homepage
              </Link>
            </h4>
          </div>
        </section>
      </Layout>
    )}
  />
)
