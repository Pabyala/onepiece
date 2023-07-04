import React from 'react'
import Navbar from '../../components/Navbar'
import HeroImage from '../../components/HeroImage';
import CoverImg from '../../assets/OP-Img1.jpg'
import DevilFruitContext from '../../components/DevilFruitContext';

function DevilFruit() {
  return (
    <div>
      <Navbar/>
      <HeroImage heroImg={CoverImg}
                 title="What is Devil Fruit?"
      />
      <DevilFruitContext/>
    </div>
  )
}

export default DevilFruit