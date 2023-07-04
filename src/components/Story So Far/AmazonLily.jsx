import React from 'react'
import Navbar from '../Navbar'
import { AmazonLilyContext } from "./ContextStory";
import AmazonLilyImg from "../../assets/amazon_lily_mv_pc.png";
import AmazonLilyImg2 from "../../assets/amazon_lily_02.png";
import AmazonLilyImg3 from "../../assets/amazon_lily_03.png";
import AmazonLilyImg5 from "../../assets/amazon_lily_05.png";

function AmazonLily() {
  return (
    <div>
        <Navbar/>
        <AmazonLilyContext
          titleStory={`Women's Island Amazon Lily Edition`}
          img1={AmazonLilyImg}

          subTitle1={`Luffy meets the "Pirate Empress" in the Women's Empire!!`}
          img2={AmazonLilyImg2}
          img3={AmazonLilyImg3}
          p1={`The Straw Hat Pirates were sent around the world by Bartholomew Kuma during the battle on 
            the Sabaody Archipelago. Luffy was sent to Amazon Lily on Women's Island.`}
          p2={`This country, where men are forbidden, was ruled by the pirate empress Boa Hancock, one of 
            the Seven Warlords of the Sea. end up`}
          p3={`In the arena where he was executed, Luffy fought against Hancock's two younger sisters, 
            Sandersonia and Marigold, and won. Furthermore, by protecting the crests on their backs from 
            being exposed to the public, they escaped execution.`}
          p4={`Hancock learns that Luffy is the man who caused the big incident of "beating the Celestial 
            Dragon", and confesses to Luffy that he was once a slave of the Celestial Dragon. The crest on 
            Hancock's back was the mark of a slave at that time.`}
          p5={`Hancock takes a liking to Luffy, who challenged the Celestial Dragons, who no one should 
            be able to oppose, without any fear, and allows him to rent out his ship.`}
          p6={`However, on the eve of her departure, Luffy is informed that her brother Ace's public 
            execution is imminent. Luffy decides to put off reuniting with her friends and go alone to 
            rescue Ace. With the cooperation of Hancock, who is attracted to her Luffy and falls in love 
            with her, Luffy heads to Impel Down, the land where Ace is confined.`}

          subTitle2={`Meanwhile, the Straw Hats other than Luffy are...`}
          img4={AmazonLilyImg5}
          p7={`While Luffy was aiming for Impel Down, the rest of the Straw Hat Pirates were also having a 
            hard time after being sent to Kuma.`}
          p8={`Robin is a prisoner in Tequila Wolf, a worker's country in the "East Blue". Nami lives in 
            Weatheria, a small sky island that specializes in weather science. And Franky, Sanji, Usopp, 
            and Zoro were each sent to various places along the Grand Line. Franky goes to Baldimore, a 
            future country called "Karakuri Island" in Fuyushima. Sanji is chased by Okamas in the Kamabakka 
            Kingdom, and Usopp meets a man named Herculesson on a wild island in the Boin Islands. Brook was 
            mistaken for a devil in the impoverished country of Harahettania, and Zoro was being nursed by 
            Perona, a subordinate of Gecko Moria, in the ruins of the Kingdom of Shikkeal on Kurigana Island.`}
        />
    </div>
  )
}

export default AmazonLily