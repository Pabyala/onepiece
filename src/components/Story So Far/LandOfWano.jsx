import React from 'react'
import Navbar from '../Navbar'
import { LandOfWanoContext } from "./ContextStory";
import LandOfWanoImg from "../../assets/land_of_wano_mv_pc.png";
import LandOfWanoImg1 from "../../assets/land_of_wano_01.png";
import LandOfWanoImg2 from "../../assets/land_of_wano_02.png";
import LandOfWanoImg3 from "../../assets/land_of_wano_03.png";
import LandOfWanoImg4 from "../../assets/land_of_wano_04.png";

function LandOfWano() {
  return (
    <div>
        <Navbar/>
        <LandOfWanoContext
          titleStory={`Wano Country`}
          img1={LandOfWanoImg}

          subTitle1={`Adventure in "Samurai Country"! Straw Hat Crew Reached Wano Country!!`}
          img2={LandOfWanoImg1}
          img3={LandOfWanoImg2}
          img4={LandOfWanoImg3}
          img5={LandOfWanoImg4}
          p1={`Escaped from Big Mom's fierce pursuit, Luffy and his friends arrive at Wano, a country 
            where samurai live. There, the “Hundred Beasts Pirates” led by “Four Emperors” Kaido 
            dominated.`}
          p2={`Lost from his friends, Luffy drifts to Kurigahama and meets Otama, a girl who was 
            being attacked by the Beast Pirates. After that, Luffy, who reunited with Zoro, boarded 
            the Hundred Beast Pirates "Shinuchi" Hold'em in order to retrieve the kidnapped Otama.`}
          p3={`Luffy's angry blow bursts into Hold'em, who takes Otama hostage, and the rescue is 
            successful. After that, Law joins them, and Luffy and his friends head for the ruins of 
            Oden Castle, where Kin'emon and the others are waiting.`}
          p4={`Luffy is reunited with Kin'emon, Momonosuke, and Nami and the others who got separated 
            when they landed. Kin'emon tells the delighted Luffy and the others that they've traveled 
            over time from the Wano Country 20 years ago.`}
          p5={`Kozuki Oden's exciting way of life and its heroic end are told from the mouth of 
            Kin'emon. After Oden was executed, Momonosuke and Kin'emon were sent 20 years into the 
            future by the power of Oden's wife, Toki. In order to avenge Kaido and inherit Oden's 
            will to open the Wano country.`}
          p6={`According to Kin'emon's plan, the day to rise up is decided to be "the night of the 
            fire festival" two weeks later. Invade Onigashima where Kaido lives and take the head of 
            the enemy general. The fighting strength is the Straw Hat Pirates, the Heart Pirates, the 
            Minks, and the samurai with the will to rebel. Thus, the fire of "raid" was cut and dropped.`}
        />
    </div>
  )
}

export default LandOfWano