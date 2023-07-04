import React from 'react'
import Navbar from '../Navbar'
import { ImpelDownContext } from "./ContextStory";
import ImpelDownImg from "../../assets/impel_down_mv_pc.png";
import ImpelDownImg1 from "../../assets/impel_down_01.png";
import ImpelDownImg3 from "../../assets/impel_down_03.png";
import ImpelDownImg4 from "../../assets/impel_down_04.png";
import ImpelDownImg5 from "../../assets/impel_down_05.png";
import ImpelDownImg6 from "../../assets/impel_down_06.png";

function ImpelDown() {
  return (
    <div>
        <Navbar/>
        <ImpelDownContext
          titleStory={`Great Prison Impel Down`}
          img1={ImpelDownImg}

          subTitle1={`Jailbreak Impossible!? Undersea Prison Impel Down!!`}
          img2={ImpelDownImg1}
          img3={ImpelDownImg3}
          img4={ImpelDownImg4}
          p1={`Once you enter, you can never come back alive. When Luffy hears that his brother Ace has 
            been imprisoned in Impel Down, the world's largest prison known for its impossibility to escape, 
            Luffy enters Impel Down alone with the help of Hancock, the Seven Warlords of the Sea. However, 
            an unimaginable "hell" awaits them there...`}
          p2={`Crimson, wild beasts, hunger, burning—obstacles that grow more severe as you go down the 
            floor. The terrifying Hell Keepers approaching. Along the way, Luffy overcomes difficulties with 
            the help of Buggy, Mr. 3, and Bon Clay, who once fought the Straw Hat Pirates. Aim for the lower 
            layer where Ace is trapped.`}
          p3={`However, in the LV4 Fiery Hell, the prison chief Magellan, the prison's greatest threat, 
            assaults. Luffy is attacked by poison and collapses in front of the overwhelming power of 
            "Dokudoku Fruit".`}
          p4={`Bon Clay saves Luffy, who was in a desperate situation after his whole body was poisoned. 
            With his help, Luffy is released from the LV5 prison, but the two of them lose consciousness 
            with wounds all over their bodies in the frigid hell. What appeared in front of the two of them 
            was a strange-looking person, Inazuma.`}
          p5={`Luffy and Bon Clay, who were seriously injured, are transported to Phantom Impel Down 
            LV 5.5, New Kamalan, and receive treatment. Number 5.5 is a paradise for prisoners whose 
            existence even the guards don't know about.`}
          p6={`Luffy, who was still affected by the deadly poison, received treatment with the power of 
            Emporio Ivankov, the master of Newcomerland, and after 20 hours of agony, he narrowly escaped 
            death. In fact, this Ivankov was a leader of the "Revolutionary Army" and a brother of Luffy's 
            father, Dragon.`}
          

          subTitle2={`Chase the ace! Formation of a miraculous mixed team!!`}
          img5={ImpelDownImg5}
          img6={ImpelDownImg6}
          p7={`Luffy heads to the lowest level, LV6, with Ivankov and others to rescue the imprisoned Ace. 
          However, it was already late, and by the time Luffy arrived, Ace had been taken to a warship to 
          be transferred to Marineford, where the execution site is located. But Luffy doesn't give up. `}
          p8={`Crocodile, who was imprisoned as a violent criminal at LV6, speaks to Luffy, who has 
          decided to go to Marineford's Navy HQ. "If you get out of here, release me." In order to rescue 
          Ace, despite their reluctance, Luffy and his friends join Crocodile and Jinbei, a former 
          Shichibukai who was also imprisoned, and try to escape from Impel Down.`}
          p9={`In addition to Luffy, there are two former Shichibukai. And the newcomer warriors led by 
          Ivankov. The most powerful team ever, even guards and ferocious prison beasts can't be stopped. 
          Eventually even Magellan gets past him and he succeeds in jailbreak.`}
          p10={`After robbing the navy warship, Luffy and the others said a tearful farewell to Bon Clay, 
          who remained in Impel Down to open the "Gate of Justice", and headed for Marineford.`}
        
        />
    </div>
  )
}

export default ImpelDown