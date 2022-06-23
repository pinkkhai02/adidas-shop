import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import FormLogin from '../../Containers/Login/FormLogin/FormLogin'

const accountLogin = () => {
  return (
    <div>
      <Header/>
      <FormLogin/>
      <Footer/>
    </div>
  )
}

export default accountLogin