import React from 'react'
import Navbar from '../components/Navbar';
import HeroImage from '../components/HeroImage';
import CoverImg from '../assets/OP-Img1.jpg'
import QuizContext from '../components/QuizContext';

function Quiz() {
  return (
    <div>
      <Navbar/>
      <HeroImage heroImg={CoverImg}
                 title="Quiz"
      />
      <QuizContext/>
    </div>
  )
}

export default Quiz;