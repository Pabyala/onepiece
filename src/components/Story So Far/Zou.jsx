import React from 'react'
import Navbar from '../Navbar'
import { ZouContext } from "./ContextStory";
import ZouImg from "../../assets/zou_mv_pc.png";
import ZouImg1 from "../../assets/zou_01.png";
import ZouImg2 from "../../assets/zou_02.png";
import ZouImg3 from "../../assets/zou_03.png";
import ZouImg4 from "../../assets/zou_04.png";

function Zou() {
  return (
    <div>
        <Navbar/>
        <ZouContext
          titleStory={`Elephant Edition`}
          img1={ZouImg}

          subTitle1={`Luffy lands on the moving phantom island "Elephant"!!`}
          img2={ZouImg1}
          p1={`Chasing after Nami and the others, Luffy and the others arrive at the "elephant". 
            The island was on the back of a giant elephant, Zunisha, who roamed the sea, and the 
            beast-like Minks made up the country. Luffy and his friends meet Carrot, Wanda of the 
            Mink tribe, and are guided by them to reunite with Nami and his friends. However, 
            Sanji, who should have been with Nami and the others, was nowhere to be seen. Luffy 
            and his friends are told what happened to Zou and Sanji from Nami.`}
          p2={`17 days ago, Zou was attacked by a subordinate of "Four Emperors" Kaido, 
            "Drought Jack", and demanded to hand over Wano's samurai "Raizo". The Minks deny the 
            existence of samurai, but Jack refuses to listen and resorts to force. `}
          p3={`Led by two kings, Inuarashi and Nekomamushi, the Minks put up a thorough fight, 
            but were destroyed by the poison gas weapon used by Jack. After Jack and the others 
            left the island, Nami and the others who visited the elephant saw the misery of the 
            Minks and rushed to rescue them. Thanks to that, the Minks survived, and Nami and the 
            others were treated as benefactors.`}
          p4={`And two days ago, Big Mom's affiliated pirate Bege came to Zou in pursuit of Nami 
            and the others. Bege gave Sanji an invitation to a tea party hosted by Big Mom. The 
            main event of the tea party was the wedding of Sanji and Big Mom's daughter Pudding. 
            The marriage was decided by Sanji's relatives, the Vinsmoke family. The Vinsmoke family 
            is a family that governs the Germa Kingdom, a seafaring nation with a powerful army 
            "Germa 66 (Double Six)", and Sanji was the third son of the king. Fearing that Big Mom 
            would reach out to the people around him, Sanji said, "I'll definitely be back," and 
            headed for Big Mom alone.`}
          

          subTitle2={`Shocking facts revealed one after another!! And a new alliance formed!!`}
          img3={ZouImg2}
          img4={ZouImg3}
          img5={ZouImg4}
          p5={`In order to bring back Sanji, Luffy decides to sneak into Big Mom's tea party 
          alone. The next morning, there is news that samurai have appeared all over the island. 
          What appeared was Kin'emon who landed late. Inuarashi and Nekomamushi inform Kin'emon 
          that he has come to look for Raizo. The Mink tribe, who were brothers with the Kozuki 
          clan of Wano, did not sell their comrades even if the country was destroyed.`}
          p6={`After that, it is revealed that Momonosuke is not actually Kin'emon's son, but 
          heir to the great daimyo of Wano Country, Kozuki Oden. And the "Lord History Text 
          (Poneglyph)" that the Minks have continued to protect. `}
          p7={`It was a signpost to Raftel, the final point of the Grand Line. There are four 
          "Lord History Texts" in the world, and if you connect the points written in each on a 
          map, the location of Raftel will emerge. And out of the four, two were in the hands of 
          "Four Emperors" Kaido and Big Mom respectively.It was a signpost to Raftel, the final 
          point of the Grand Line. There are four "Lord History Texts" in the world, and if you 
          connect the points written in each on a map, the location of Raftel will emerge. And 
          out of the four, two were in the hands of "Four Emperors" Kaido and Big Mom 
          respectively.`}
          p8={`Another amazing fact. Momonosuke's father, Kozuki Oden, once reached Raftel with 
          Pirate King Roger. However, that oden was executed by Wano's "General" and Kaido.`}
          p9={`The purpose of Kin'emon and others was to defeat the shogun and to inherit Oden's 
          will and "open the country" to Wano. Luffy forms an alliance with Kin'emon and the 
          Minks, at the request of Momonosuke, who asks for help. Aiming to overthrow Kaido.`}
          p10={`However, Jack and the others attacked there again and attacked the elephant. In 
          the confusion, Luffy and Momonosuke hear the elephant's voice. When Momonosuke responds 
          to Zoushu's request, "Order me to fight," Zoushu destroys Jack's fleet with a huge 
          swing of his nose.`}
          p11={`After that, the group split into four groups. Luffy, Nami, Chopper, and Brook 
          go to Whole Cake Island where a tea party is held with Mink Warrior Pedro. Zoro, Law, 
          and Kin'emon go to Wano Country ahead of time. Nekomamushi goes in search of Marco, 
          the former commander of the 1st division of the Whitebeard Pirates. Momonosuke stayed 
          with Inuarashi on Zou for a while. Luffy vowed to meet everyone again in Wano and left 
          for Whole Cake Island.`}
        />
    </div>
  )
}

export default Zou