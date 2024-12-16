import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Caraousel from '../components/Caraousel'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Caraousel></Caraousel>
      </div>
      <div>
      <Card></Card>
      </div>
      
      <Footer></Footer>
    </div>
  )
}

export default Home
