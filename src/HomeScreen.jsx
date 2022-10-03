import React from 'react'
import Banner from './Banner'
import "./HomeScreen.css"
import Nav from './Nav'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
          {/** Nav */} 
          <Nav/>
 
          <Banner/>
          {/** Row (list) */}
    </div>
  )
}

export default HomeScreen