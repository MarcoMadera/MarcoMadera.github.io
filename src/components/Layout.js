import React from 'react';
import Navbar from './Navbar.js'
import Footer from './Footer.js'

function Layout(props) {
  
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <Footer />
    </React.Fragment>
    
  )
}

export default Layout;