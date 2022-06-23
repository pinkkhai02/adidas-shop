import React from 'react' //rafce
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Banner from '../../Containers/HomePage/Banner/Banner'
import BestOFadidas from '../../Containers/HomePage/BestOFadidas/BestOFadidas'
import Card from '../../Containers/HomePage/Card/Card'
import NewArrival from '../../Containers/HomePage/NewArrival/NewArrival'
import Slide from '../../Containers/HomePage/Slide/Slide'
import StillInterested from '../../Containers/HomePage/Still-Interested/Still-Interested'
import { WhoAreShopping } from '../../Containers/HomePage/WhoAreShopping/WhoAreShopping'



const PageHome = () => {
  return (
    <div>
     <Header/>
     <Banner/>
     <StillInterested/>
     <Slide/>
     <NewArrival/>
     <Card/>
     <WhoAreShopping/>
     <BestOFadidas/>
     <Footer/>
    </div>
  )
}

export default PageHome