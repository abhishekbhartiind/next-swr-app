import React, { Fragment } from 'react'
import Navbar from './Navbar'

interface LayoutProps {
  children: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  )
}

export default Layout
