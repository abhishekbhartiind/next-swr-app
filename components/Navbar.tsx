import React, { Fragment } from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <Fragment>
      <nav className="blue darken-4">
        <div className="nav-wrapper">
          <div className="container">
            <Link href="/">
              <a className="brand-logo">SWR | Next</a>
            </Link>
            <ul className="right">
              <li>
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </li>
              <li>
                <Link href="/sample">
                  <a>Samples</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar
