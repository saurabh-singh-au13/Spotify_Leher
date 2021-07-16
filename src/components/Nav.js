import React from 'react'
import SideNav from './SideNav'
import Logo from './Logo'
function Nav() {
  return (
    <>
      <div className="navBar">
        <div className="logo">
         <Logo /> 


        </div>
        <SideNav />
        

      </div>

    </>
  )
}

export default Nav
