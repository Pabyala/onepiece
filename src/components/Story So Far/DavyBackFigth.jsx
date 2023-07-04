import React from 'react'
import Navbar from '../Navbar'
import {DavyBackFightContext} from './ContextStory'
import DavyBackFightImg from '../../assets/davy_back_fight_mv_pc.png'
import DavyBackFightImg1 from '../../assets/davy_back_fight_01.jpg'
import DavyBackFightImg2 from '../../assets/davy_back_fight_02.png'
import DavyBackFightImg3 from '../../assets/davy_back_fight_03.png'
import DavyBackFightImg4 from '../../assets/davy_back_fight_04.png'

function DavyBackFigth() {
  return (
    <div>
        <Navbar/>
        <DavyBackFightContext
          titleStory={`Davy Back Fight`}
          img1={DavyBackFightImg}
          
          subTitle1={`The Davy Back Fight, a battle that bets on friends, begins!!`}
          img2={DavyBackFightImg1}
          img3={DavyBackFightImg2}
          img4={DavyBackFightImg3}
          p1={`The Straw Hat Pirates, who returned from Sky Island, landed in Longling 
            Longland, where 'everything that exists is long in some way'. On the island, 
            Luffy and his friends are challenged to a "Davy Back Fight" by the captain of 
            the Foxy Pirates, "Foxy the Silver Fox".`}
          p2={`It was a terrifying game where if you lost, you would lose your "friends" 
            and "pride". The match will be held in three rounds, with Usopp, Nami, and 
            Robin participating in the first round "Donut Race", Zoro, Sanji, and Chopper 
            participating in the second round "Groky Ring", and Luffy participating in the 
            final round "Combat"..`}
          p3={`In the donut race, just when Usopp and the others thought they had won, 
            Foxy's Noronoro Beam hit them and they were defeated. Chopper is stolen from 
            the gang.`}
          p4={`Without Chopper, who was scheduled to participate, Zoro and Sanji were 
            forced to take on the Groggy Ring. I was able to retrieve the chopper safely.`}
          p5={`Then came the final battle. Foxy toying with Luffy with his specialty 
            Noronoro Beam. Luffy desperately clings to him, but he is forced into a tough 
            fight due to a trap set in the ship, which is the stage. It was thought that 
            Foxy had the upper hand in the battle, but Foxy's sluggish beam was repelled 
            by a fragment of the mirror that Luffy had hidden, and the situation was 
            reversed at once.`}
          p6={`Luffy won by knockout, and the Davy Back Fight ended with the victory of 
            the Straw Hat Pirates.`}

          subTitle2={`An unexpected "guest" is in front of the victorious crew!!`}
          img5={DavyBackFightImg4}
          p7={`After finishing the game, a man suddenly appears in front of Luffy and his friends who are about to depart for the next voyage. The man's name is Admiral Aokiji from the Navy Headquarters. In front of the crew, Aokiji asserts that Robin is dangerous.`}
          p8={`Luffy and his friends challenge Aokiji to a fight to protect their friends, but the difference in their abilities is large, and Luffy and Robin are frozen by the ability of "Hiehie no Mi". However, Aokiji said, "Let's talk about the crocodile subjugation," and left the place without stabbing her.`}

        />
    </div>
  )
}

export default DavyBackFigth