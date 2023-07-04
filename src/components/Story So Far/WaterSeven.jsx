import React from "react";
import Navbar from "../Navbar";
import { WaterSevenContext } from "./ContextStory";
import WaterSevenImg from "../../assets/water_seven_mv_pc.png";
import WaterSevenImg1 from "../../assets/water_seven_01.png";
import WaterSevenImg2 from "../../assets/water_seven_02.png";
import WaterSevenImg3 from "../../assets/water_seven_03.jpg";
import WaterSevenImg5 from "../../assets/water_seven_05.png";
import WaterSevenImg6 from "../../assets/water_seven_06.png";

function WaterSeven() {
  return (
    <div>
      <Navbar />
      <WaterSevenContext
        titleStory={`Water Seven Edition`}
        img1={WaterSevenImg}

        subTitle1={`Luffy VS Usopp A big duel over "friends"!!`}
        img2={WaterSevenImg1}
        img3={WaterSevenImg2}
        p1={`Luffy and his friends came to Water Seven, the city of water where the world's 
          best shipwrights gather, in order to repair the Merry and make friends with 
          skilled shipwrights. He immediately visits the shipbuilding company Galley-La 
          Company and asks for the ship to be repaired, but it is assessed that the 
          damage is severe and cannot be repaired.`}
        p2={`Furthermore, Usopp's 200 million berries, which he was supposed to use to 
          repair the ship, were stolen by the dismantling Franky family... Feeling 
          responsible, Usopp enters the family's hideout alone, but is defeated.`}
        p3={`Luffy and his friends, who were furious when they learned about it, 
          destroyed the family together with the hideout. However, Frankie, the head 
          of the family, was away with the money, and was unable to retrieve the 200 
          million berries.`}
        p4={`Frankie, the head of the family, was away with the money, and was unable 
          to retrieve the 200 million berries. He "leaves the Merry and transfers to a 
          new ship." Having made that decision, Luffy returns to the ship and tells his 
          friends about it. However, Usopp is unconvinced and declares that he will leave 
          the gang after a big fight. Challenge Luffy to a duel on the Merry. Usopp 
          challenged Luffy with a clever plan, but he was unable to win.`}

        subTitle2={`The true identity of the Iceberg assassin is Robin!?`}
        p5={`One night after the duel, an attempted assassination of Iceberg, the mayor 
          of Water Seven and the president of the Galley-La Company, occurs. The possibility 
          that one of the culprits is Robin emerges, and Luffy and others are also 
          suspected of being accomplices. Meanwhile, Franky appears in front of Luffy 
          and Nami and attacks his subordinates' enemies. With his strong cyborg body 
          and tricky attacks, Franky is evenly matched with Luffy. Luffy and his friends 
          manage to escape the scene and head to the Iceberg mansion to find out the 
          truth, but Iceberg asserts that he has seen Robin.`}
        p6={`Around that time, Sanji and Chopper encounter Robin in town, but Robin 
          tells them, "I won't be coming back to you guys anymore..." and leaves the place. 
          Sensing something in his words and actions, Sanji pursues Robin alone.`}

        subTitle3={`A new enemy "Cipher Pole No. 9"!!`}
        img4={WaterSevenImg3}
        // img5={WaterSevenImg4}
        p7={`After hearing Robin's words from Chopper, Luffy and his friends go to Iceberg 
          again to directly confirm Robin's true intentions. However, there, he encounters 
          Rob Lucci, Kaku, Kalifa of the Galley-La Company, and Bruno, who is supposed to 
          be the owner of the bar, attacking Iceberg. Furthermore, the figure of Robin is 
          also on the spot.`}
        p8={`Lucci's true identity is Cipher Pol No. 9, commonly known as "CP9", an 
          intelligence agency directly under the World Government that is even allowed 
          to kill citizens. In order to obtain the blueprints of the "Ancient Weapon 
          Pluton" that Iceberg is said to have hidden away, they have been on an infiltration 
          mission for five years under false guise. Robin also works with them as the only 
          person in the world who can revive the ancient weapon. Robin dispels Luffy's 
          restraint and disappears with CP9.`}
        p9={`After capturing Franky, the true owner of the Ancient Weapon Map, and Usopp, 
          who unfortunately was there, CP9 departs for Enies Lobby, the island of justice, 
          by sea train. However, Sanji, who was chasing Robin alone, also secretly boarded 
          the train.`}

        subTitle4={`Robin's true wish revealed`}
        img5={WaterSevenImg5}
        img6={WaterSevenImg6}
        p10={`Nami learns Robin's true "wish" from Iceberg. Her wish was to protect Luffy 
          from "Buster Call". A Buster Call is an indiscriminate attack carried out by the 
          navy with national war-class military power, and once targeted there is nothing 
          left. If you go with CP9 to Ennis Lobby, you won't be able to return alive. 
          Knowing this, Robin was working with CP9 to protect his companions. Hearing this, 
          Luffy and his friends board the runaway sea train Rocketman with the shipwrights 
          of the Galley-La Company, including Pauly, and the Franky family, who are 
          passionate about rescuing the master carpenter, and head for Enies Lobby in 
          order to retrieve Robin.`}
        p11={`On the other hand, Sanji, who is acting separately, is also inspired by 
          hearing Robin's thoughts. Together with Franky, who has been released, and Usopp, 
          who disguises himself as the Sogeking, he sets out to recapture Robin. Sanji and 
          his friends once managed to get Robin back, but Robin, worried about his friends, 
          stubbornly refuses to go with them. Finally, the sea train arrives at Enies Lobby.`}
      
      
      />
    </div>
  );
}

export default WaterSeven;
