import React, { Component } from 'react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import Logo from './Logo'

import './Nav.css'

export class Navigation extends Component {
  state = {
    active: false,
    activeSubNav: false,
    currentPath: false
  }

  componentDidMount = () =>
    this.setState({ currentPath: this.props.location.pathname })

  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    })

  render() {
    const { active } = this.state,
      { subNav } = this.props,
      NavLink = ({ to, className, children, ...props }) => (
        <Link
          to={to}
          className={`NavLink ${
            to === this.state.currentPath ? 'active' : ''
          } ${className}`}
          onClick={this.handleLinkClick}
          {...props}
        >
          {children}
        </Link>
      )

    return (
      <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
        <div className="Nav--Container container">
          <Link to="/" onClick={this.handleLinkClick}>
            <Logo />
          </Link>
          <div className="Nav--Links">
            <NavLink className="Nav--li Nav--Mobile" to="/">
              <Logo className="Nav--Mobile" width="100px" />
            </NavLink>
            <NavLink className="Nav--li" to="/services">
              services
            </NavLink>
            <NavLink className="Nav--li" to="/contact">
              consultation
            </NavLink>
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'cartridges' ? 'active' : ''
              }`}
            >
              <span
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('craft') ||
                  this.props.location.pathname.includes('reserve') ||
                  this.props.location.pathname.includes('ish') ||
                  this.props.location.pathname.includes('micro')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('cartridges')}
              >
                Explore
              </span>
              <div className="Nav--GroupLinks">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <h4>Page</h4>
                      <NavLink to="/craft/" className="Nav--GroupLink">
                        Blog
                      </NavLink>
                      <NavLink to="/blog/" className="Nav--GroupLink">
                        Something 2
                      </NavLink>
                    </div>
                    <div className="col-lg-4">
                      <h4>Company</h4>
                      <NavLink to="/ish/" className="Nav--GroupLink">
                        About Us
                        <small>Learn About Our Team</small>
                      </NavLink>
                      <NavLink to="/micro/" className="Nav--GroupLink">
                        What We Are Working On
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
          >
            {active ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    )
  }
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
