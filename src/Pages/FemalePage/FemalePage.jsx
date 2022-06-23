import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import BanerFemale from '../../Containers/FemalePage/BanerFemale/BanerFemale'
import CardFemale from '../../Containers/FemalePage/CardFemale/CardFemale'
import Slide from '../../Containers/HomePage/Slide/Slide'

const FemalePage = () => {
  return (
   <div>
      <Header/>
      <BanerFemale/>
      <Slide/>
      <CardFemale/>
      <Footer/>
   </div>
  )
}

export default FemalePage