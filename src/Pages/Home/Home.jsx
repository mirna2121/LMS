import React from 'react'
import FirstSection from '../../Components/HomeComp/FirstSection'
import SecondSection from '../../Components/HomeComp/SecondSection'
import ThirdSection from '../../Components/HomeComp/ThirdSection'
import FourthSection from '../../Components/HomeComp/FourthSection'
import FifthSection from '../../Components/HomeComp/FifthSection/FifthSection'
import Ourmission from '../../Components/HomeComp/Ourmission'
import Footer from '../../Components/HomeComp/Footer/Footer'


export default function Home() {
  return (
    <div>
        <FirstSection/>
        <FourthSection/>
        <FifthSection/>
        <Ourmission/>
        <SecondSection/>
        <ThirdSection/>
        <Footer/>
    </div>
  )
}
