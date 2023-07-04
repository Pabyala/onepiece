import React from 'react'
import Navbar from '../Navbar'
import { PunkHazardContext } from "./ContextStory";
import PunkHazardImg from "../../assets/punk_hazard_mv_pc.png";
import PunkHazardImg1 from "../../assets/punk_hazard_01.png";
import PunkHazardImg2 from "../../assets/punk_hazard_02.png";
import PunkHazardImg3 from "../../assets/punk_hazard_03.jpg";

function PunkHazard() {
  return (
    <div>
        <Navbar/>
        <PunkHazardContext
          titleStory={`Punk Hazard`}
          img1={PunkHazardImg}

          subTitle1={`An island closed in flames and snow, a danger zone Punk Hazard!!`}
          img2={PunkHazardImg1}
          img3={PunkHazardImg2}
          img4={PunkHazardImg3}
          p1={`The Straw Hat Pirates left Fish-Man Island and finally arrived at the New World. The first 
            destination is Punk Hazard, a strange island where scorching land and snowy fields coexist. 
            Once the site of the World Government's laboratories, it is now ruled by Caesar Clown, a crazed 
            scientist with a bounty.`}
          p2={`Luffy, who landed on the island, encounters a mysterious samurai who speaks with disjointed 
            bodies. On the other hand, Nami and the others, who were kidnapped by Caesar's subordinates 
            while remaining on the ship, meet children who were being used as experiments in the laboratory 
            and are asked for help. At the same time, the Navy led by Smoker, who chased Luffy and the others,
            also arrived at the island. `}
          p3={`They embark on an on-site investigation of the research institute, but before that, Law, 
            who has become the "Royal Seven Warlords of the Sea", stands in his way.`}
          p4={`Luffy accepts the proposal of "Alliance" from Law, who reunited with him, and forms the 
            "Pirate Alliance". Law was planning to kidnap Caesar in order to destroy a corner of the "Four 
            Emperors".`}
          p5={`Caesar teamed up with Donquixote Doflamingo, one of the Seven Warlords of the Sea, and was 
            involved in the production of the artificial devil fruit, SMILE. Kaido used it to organize a 
            powerful army of ability users.Law's aim was to cut off the supply of SMILE and reduce Kaido's 
            fighting strength.`}
          p6={`Luffy was once defeated and captured by Caesar's powerful "Gas Gas Fruit" ability, but he 
            escaped with Law's ability. He counterattacks with Smoker, who was also a prisoner, and the 
            mysterious samurai who regained his body, Kin'emon the Foxfire.`}
          p7={`Caesar, who was driven into a corner, took in the poison gas weapon "Shinokuni" and tried 
            to kill Luffy along with his subordinates, but they were sunk by Luffy's angry blow. They 
            succeeded in destroying the SMILE raw material manufacturing factory, and the children were 
            safely protected by the navy. Kin'emon is also reunited with his son, Momonosuke, whom he has 
            been looking for.`}
          
          subTitle2={`The next destination is Dressrosa, where Doflamingo is waiting!`}
          p8={`Thus, Luffy and his friends, who are in full-scale confrontation with Doflamingo, head for 
            Dressrosa, Doflamingo's home base, where the factory is located, in order to destroy the SMILE 
            manufacturing factory. Along the way, Law makes a deal with Doflamingo. It was to quit "Royal 
            Seven Warlords of the Sea" on the condition of handing over Caesar.`}
        />
    </div>
  )
}

export default PunkHazard