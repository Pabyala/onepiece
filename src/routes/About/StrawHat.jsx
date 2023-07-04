import React from 'react'
import Navbar from '../../components/Navbar'
import HeroImage from '../../components/HeroImage';
import StrawHatPiratesContext from '../../components/StrawHatPiratesContext';
import CoverImg from '../../assets/OP-Img1.jpg'

function StrawHat() {
  return (
    <div>
      <Navbar/>
      <HeroImage heroImg={CoverImg}
                 title="Straw Hat"
      />
      <StrawHatPiratesContext/>
    </div>
  )
}

export default StrawHat