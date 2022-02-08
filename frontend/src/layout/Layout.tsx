// components
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import React from 'react'

const Layout = (props: Record<string, unknown>) => {
  const children = props.children as React.ReactElement
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
