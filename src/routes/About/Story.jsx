import React from 'react'
import Navbar from '../../components/Navbar'
import HeroImage from '../../components/HeroImage';
import CoverImg from '../../assets/OP-Img1.jpg'
import StorySoFar from '../../components/StorySoFar';

function Story() {
  return (
    <div>
      <Navbar/>
      <HeroImage heroImg={CoverImg}
                 title="Story"
      />
      <StorySoFar/>
    </div>
  )
}

export default Story