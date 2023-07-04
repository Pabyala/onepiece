import React from 'react'
import Navbar from '../Navbar'
import { SabaodyArchipelagoContext } from "./ContextStory";
import SabaodyArchipelagoImg from "../../assets/sabaody_mv_pc.png";
import SabaodyArchipelagoImg1 from "../../assets/sabaody_01.png";
import SabaodyArchipelagoImg2 from "../../assets/sabaody_02.png";
import SabaodyArchipelagoImg3 from "../../assets/sabaody_03.png";
import SabaodyArchipelagoImg4 from "../../assets/sabaody_04.png";
import SabaodyArchipelagoImg5 from "../../assets/sabaody_05.png";
import SabaodyArchipelagoImg6 from "../../assets/sabaody_06.png";

function SobaodyArchipelago() {
  return (
    <div>
        <Navbar/>
        <SabaodyArchipelagoContext
          titleStory={`Sabaody Archipelago`}
          img1={SabaodyArchipelagoImg}
  
          subTitle1={`Pirate rookies gather in the Sabaody Archipelago!`}
          img2={SabaodyArchipelagoImg1}
          img3={SabaodyArchipelagoImg2}
          p1={`On their way to Fish-Man Island, the Straw Hats meet Camie the mermaid and Pappag the 
          starfish. Repel the kidnappers "Flying Fish Riders" who are targeting them, and rescue Hacchan, 
          Camie's friend and former Aaron gang.`}
          p2={`In order for the pirates to cross the Red Line, they must pass through the Fish-Man 
          Island at the bottom of the sea, which requires applying a special coating to the ship. 
          Knowing this, the group heads to the Sabaody Archipelago where Hatchan's acquaintance, a 
          coating craftsman, lives. In these islands, the inhabitants of the holy land of Mariejois, 
          the "Celestial Dragon People", also known as "world nobles", roam about, and they also trade 
          humans and mermaids.`}
          p3={`In addition, it is a place where pirates aiming for the "New World" gather, and 11 
          pirate rookies, including Luffy and Zoro, with bounties exceeding "100 million" gathered.`}
          p4={`Luffy and his friends immediately set out to find a craftsman, but when they took 
          their eyes off Camie, she was kidnapped and put up for auction at a human shop. Luffy and 
          his friends hurried to the auction site, but it was too late, Caimie was bought by Tenryujin, 
          and Hacchan, who tried to stop Luffy, was shot. Angered, Luffy breaks the unwritten rule 
          of "Don't mess with the Celestial Dragons" and beats up the Celestial Dragon Saint Charlos.`}

          subTitle2={``}
          img4={SabaodyArchipelagoImg3}
          img5={SabaodyArchipelagoImg4}
          img6={SabaodyArchipelagoImg5}
          img7={SabaodyArchipelagoImg6}
          p5={`Luffy's punching of the Celestial Dragon caused a big battle with the Marines involving 
          Eustace Kid and Trafalgar Law, who were rookies of over 100 million who were present at the 
          venue.`}
          p6={`There, Luffy and his friends meet an old man, Silvers Rayleigh, who was put up for 
          auction. In fact, this Rayleigh was the coating craftsman Luffy and the others were looking 
          for, and he was also the former vice-captain of the Roger Pirates, and the man who knew the 
          secret of the "Great Hidden Treasure".`}
          p7={`Luffy and the others are surprised to hear from him the truth behind the execution of 
          the Pirate King. However, Luffy stubbornly refuses to know the true identity of the One Piece.`}
          p8={`On the other hand, in order to settle the situation, the Navy sent Admiral Kizaru, 
          Navy Headquarters Chemical Corps Captain Sentomaru, and a human weapon "Pacifista" that 
          looks just like Bartholomew Kuma to the Sabaody Archipelago. Dispatch. With its overwhelming 
          power, it corners over 100 million rookies.`}
          p9={`While the island is in chaos, the "real" bear appears in front of Luffy and the others. 
          Rayleigh comes to the rescue, but Luffy and his friends are scattered all over the world by 
          Kuma's ability, and the Straw Hat Pirates suffer a complete collapse.`}
        />
    </div>
  )
}

export default SobaodyArchipelago