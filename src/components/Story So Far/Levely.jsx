import React from 'react'
import Navbar from '../Navbar'
import { LevelyContext } from "./ContextStory";
import LevelyImg from "../../assets/levely_mv_pc.png";
import LevelyImg1 from "../../assets/levely_01.jpg";
import LevelyImg2 from "../../assets/levely_02.jpg";
import LevelyImg3 from "../../assets/levely_03.jpg";
import LevelyImg4 from "../../assets/levely_04.jpg";
import LevelyImg5 from "../../assets/levely_05.jpg";
import LevelyImg6 from "../../assets/levely_06.jpg";

function Levely() {
  return (
    <div>
        <Navbar/>
        <LevelyContext
          titleStory={`World Conference (Revery)`}
          img1={LevelyImg}

          subTitle1={`The World Conference Begins!!`}
          img2={LevelyImg1}
          img3={LevelyImg2}
          img4={LevelyImg3}
          img5={LevelyImg4}
          img6={LevelyImg5}
          img7={LevelyImg6}
          p1={`Luffy was the main culprit in the attempted assassination of Big Mom and became the 
            head of a bounty of 1.5 billion berries. His success is known all over the world, and some 
            people call Luffy the fifth "Emperor of the Sea" following the "Four Emperors".`}
          p2={`At the same time, in the sacred land of Mariejois, the kings of each country were 
            invited to hold a "World Conference (Revery)". Among the gathered members, there were many 
            people related to the Straw Hat Pirates, such as Vivi of the Kingdom of Alabasta, Shirahoshi 
            of the Kingdom of Ryugu, and Rebecca of the Kingdom of Dressrosa.`}
          p3={`Furthermore, Sabo, Luffy's older brother and No. 2 in the Revolutionary Army, secretly 
            infiltrated Mariejois with his companions. The purpose is to rescue Bartholomew Kuma, a 
            fellow member of the Revolutionary Army. Kuma lost his personality due to remodeling surgery 
            and was treated as a slave by the Celestial Dragons.`}
          p4={`The princesses of each country immediately get to know each other because they are 
            acquaintances of Luffy. However, an incident occurred here. Shirahoshi has been captured 
            by the Celestial Dragon, Hijiri Charlos. `}
          p5={`The moment King Neptune is about to raise his hand, a man punches Saint Charlos away 
            and saves Shirahoshi. That man is Saint Donquixote Myosgard, a heavenly dragon who drifted 
            ashore in the Kingdom of Ryugu 10 years ago and was saved by Otohime, Shirahoshi's mother. 
            Like other Celestial Dragons, he used to have an arrogant personality, but he was persuaded 
            by Otohime's words, and now he has changed his mind.`}
          p6={`On the other hand, at Pangea Castle in Mariejois, Shanks meets with the supreme power 
            of the World Government, the Five Elders. And finally the world conference started. While 
            the kings of each country are talking about the world, Gorosei has an audience with a 
            mysterious person called "Imu" at the "empty throne" in the castle. Imu sits down on the 
            throne, which no one should be allowed to sit on, and silently confronts the Five Elders. 
            Who exactly is the "light that should be extinguished from history"?`}
        />
    </div>
  )
}

export default Levely