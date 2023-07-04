import React from 'react'
import Navbar from '../../components/Navbar'
import HeroImage from '../../components/HeroImage';
import CoverImg from '../../assets/OP-Img1.jpg'
import OrganizationContext from '../../components/OrganizationContext';

function Organization() {
  return (
    <div>
      <Navbar/>
      <HeroImage heroImg={CoverImg}
                 title="Organization"
      />
      <OrganizationContext/>
    </div>
  )
}

export default Organization