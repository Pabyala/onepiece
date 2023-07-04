import React from 'react'
import Navbar from '../Navbar'
import { ThrillerBarkContext } from "./ContextStory";
import ThrillerBarkImg from "../../assets/thriller_bark_mv_pc.png";
import ThrillerBarkImg1 from "../../assets/thriller_bark_01.jpg";
import ThrillerBarkImg2 from "../../assets/thriller_bark_02.png";
import ThrillerBarkImg3 from "../../assets/thriller_bark_03.png";
import ThrillerBarkImg4 from "../../assets/thriller_bark_04.png";
import ThrillerBarkImg5 from "../../assets/thriller_bark_05.png";

function ThrillerBark() {
  return (
    <div>
        <Navbar/>
        <ThrillerBarkContext
          titleStory={`Thriller Bark`}
          img1={ThrillerBarkImg}
  
          subTitle1={`Introducing Brook, the cheerful skeleton gentleman!`}
          img2={ThrillerBarkImg1}
          p1={`While sailing to their next destination, Fish-Man Island, the Straw Hat Pirates encounter 
            a "ghost ship" in a foggy sea area. Aboard the ship is a mysterious skeleton named Brook. His 
            true identity is that of a pirate who once made a name for himself as "Brook the Humming", 
            who died several decades ago and was later revived by the power of the "Yomi-Yomi Fruit" as 
            a "Resurrected Human".`}
          p2={`Luffy, who liked him at first sight, invited him to join his team, and Brook readily 
            agreed. But Brooke had one problem. Someone had stolen his "shadow" from him. When Luffy and 
            his friends were listening to Brook's story, the Sunny suddenly appeared and was surrounded by 
            Thriller Bark, the "Ghost Island".`}

          subTitle2={`Straw Hat Crew VS Moria's Zombie Corps!!`}
          img3={ThrillerBarkImg2}
          img4={ThrillerBarkImg3}
          p3={`Luffy and the others prepare to land in order to follow Brook, who has boarded the Thriller 
            Bark alone in order to regain his shadow. Meanwhile, Nami, Usopp, and Chopper suddenly disappear. 
            Strange-looking zombies were waiting for Luffy and the others who landed on the island to look 
            for Nami and the others.`}
          p4={`Luffy and his friends, who easily defeated the zombies, learned from the old man they met 
            that the owner of this Thriller Bark was Gecko Moria, one of the Seven Warlords of the Sea. I'm 
            asked. Moria had used the ability of 'Kagekage no Mi' to put the stolen shadows into zombies, 
            making them her own soldiers.`}
          p5={`Luffy entrusts Oars to his friends and pursues Moria alone, but he is deceived and lured 
            into the forest. There, Luffy receives a secret plan to overthrow Moria from Laura, a female 
            pirate whose shadow was also stolen by Moria. It was to take in other people's shadows and 
            power them up.`}
          p6={`At that time, Zoro and his friends were forced into a tough fight against Oars. Although 
            Nami successfully joins them, the power of Oars, who has been manipulated by Moria and powered
            up, is tremendous. Even Robin loses his shadow. Friends falling one after another. Luffy rushes 
            to this desperate pinch. Luffy, who took in 100 shadows and turned into "Nightmare Luffy", 
            overwhelmed Oars with that power.`}
          p7={`He finally defeats this with a harmonious cooperation with his comrades. Seeing her 
            situation at a disadvantage, Moria takes in her 1,000 shadows to counter Luffy. As dawn 
            approaches, Luffy and Moria engage in a fierce battle. Just when it seemed time had run 
            out, Moria was defeated by Luffy, and all the shadows returned to their owners.`}
          
          subTitle3={`The shadow of the new Shichibukai is creeping up on the crew!!`}
          img5={ThrillerBarkImg4}
          img6={ThrillerBarkImg5}
          p8={`However, before they could catch their breath, Bartholomew Kuma, the "Royal Seven Warlords 
            of the Sea", appeared before the Straw Hat Pirates. The World Government has given Kuma a 
            special mission to "kill everyone on the island, including the Straw Hat Pirates." After the 
            fierce battle with Moria, Kuma demands Luffy's head in exchange for everyone's lives in front 
            of Luffy who has not yet woken up.`}
          p9={`However, not only the members of the gang, but everyone present refused to do so. As his 
            friends collapsed in front of Kuma's unconventional strength, Zoro, keenly aware that they 
            couldn't win with their current strength, asked Kuma to let his friends escape in exchange for 
            his own life. plead to`}
          p10={`On the other hand, Kuma demands that "Zoro will bear all the pain that Luffy suffered in 
            this battle" as a condition to let the gang go. Zoro risked his life to accomplish this, and 
            the bear disappeared from the island.`}
          p11={`At the post-battle feast, Brooke finds out that his comrade Whale Laboon, whom he left 
            50 years ago, is still waiting for their return. Brook vows to reunite with Laboon and joins 
            the Straw Hat Pirates.`}
          p12={`On the day he left Thriller Bark, something happened to Ace's Bibble Card that Luffy had. 
            It meant that Ace's life was about to disappear.`}
          p13={`And the gang reaches the "red soil continent (red line)". With this, there was only half 
            a lap left to leave the “Grand Line”.`}
        />
    </div>
  )
}

export default ThrillerBark