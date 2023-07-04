import React from 'react'
import Navbar from '../components/Navbar'
import Context from '../components/Context'
import HeroImage from '../components/HeroImage'
import CoverImg from '../assets/OP-Img1.jpg'
import firstImage from '../assets/strawhatpirates.jpg'
import img1 from '../assets/ShanksLuffy1.jpg'
import img2 from '../assets/ShanksLuffy2.jpg'
import img3 from '../assets/AlabastaArc1.jpg'
import img4 from '../assets/AlabastaArc2.jpg'
import img5 from '../assets/AceLuffy1.jpg'
import img6 from '../assets/AceLuffy2.jpg'
import img7 from '../assets/fishman_island_04.png'
import img8 from '../assets/Dressrosa.jpg'
function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <HeroImage heroImg={CoverImg}
                 title="Straw Hat Pirates"
      />
      <Context 
            strawHatPirate="Straw Hat Pirates"
            
            strawHatPirateContext1={`Fusha Village is located at the edge of the East Sea (East Blue). 
            A village boy, Monkey D. Luffy, has become a rubber man whose body stretches like rubber 
            after eating a devil fruit!`}
            strawHatPirateContext2={`He meets the great pirate Shanks, and Luffy dreams of becoming a 
            pirate himself. Shanks promised to meet Luffy again at sea, left his straw hat in his care, 
            and set sail.`}
            strawHatPirateContext3={`10 years later. Luffy, who has grown up, sets out to the ocean 
            alone with an unwavering dream. "I will become the Pirate King!!!"`}
            img1={img1}
            img2={img2}

            strawHatPirateContext4={`Luffy gathers his trusted friends and forms the Straw Hat Crew! 
            He finally rushes into the "great route".`}
            strawHatPirateContext5={`The adventure of the "great route" was true to rumors, the weather 
            and creatures were out of order, and above all, the enemies that stood in the way were mighty. 
            However, the crew overcomes the difficulties with their strong beliefs and bonds.`}
            strawHatPirateContext6={`In the desert country Alabasta, defeat Crocodile, one of the 
            Shichibukai, and go on a big adventure on the legendary Sky Island! Turn the world 
            government over there, and destroy the base of justice, the Enies Lobby! The Straw Hat Pirates 
            make a name for themselves while causing incidents one after another.`}
            img3={img3}
            img4={img4}

            strawHatPirateContext7={`However, when the route is about to reach halfway, the gang is 
            pursued by the navy, and the friends are scattered.`}
            strawHatPirateContext8={`Luffy, left alone, learns that his brother-in-law and Whitebeard 
            Pirates executive Ace has been captured by the Navy, and decides to break into the Navy 
            Headquarters Marineford!`}
            strawHatPirateContext9={`In Marineford, a war between the navy and Whitebeard broke out 
            over Ace's execution. Luffy managed to get past the impregnable defense, but he was unable 
            to do so and let Ace die.`}
            strawHatPirateContext10={`Realizing his own weakness, Luffy stops and begins training to 
            save his strength.`}
            img5={img5}
            img6={img6}

            strawHatPirateContext11={`Two years later, the friends, who have grown beyond recognition, 
            set sail from the Sabaody Archipelago aiming for the second half of the sea, the "New World"!`}
            strawHatPirateContext12={`After passing through Fish-Man Island, they arrived at the "New World".`}
            strawHatPirateContext13={`After passing through "Dressrosa", the country of love and 
            passion, we arrive at "Mokomo Principality", a country of the Mink tribe that flourishes 
            on the back of a giant elephant that lives for 1,000 years.`}
            strawHatPirateContext14={`And they have a clue to the final island, "Raftel"...`}
            img7={img7}
            img8={img8}

            firstTitle="One piece"
            firstTitleContent1={`The One Piece is the name the world gave to all the treasure 
            gained by the Pirate King Gol D. Roger. At least a portion of it once belonged 
            to Joy Boy during the Void Century. The treasure is said to be of unimaginable value, 
            and is currently located on the final island of the Grand Line: Laugh Tale.`}
            firstTitleContent2={`The One Piece is the driving goal of Monkey D. Luffy and his crew, 
            as well as that of multiple other pirates, who all seek to claim the treasure in order 
            to become the next Pirate King, following Roger's dying words at his execution.`}
            firstTitleContentImg={firstImage}

            secondTitle="The Great Treasure"
            secondTitleContent1={`At some point during the Void Century, a man named Joy Boy came across 
            an island located at the end of the Grand Line. Here, he left behind a treasure of 
            unimaginable value. Stories of this treasure on the final island piqued the interest 
            of Gol D. Roger, and he took the World Government forbidding exploration of the island as 
            evidence of it being real.`}
            secondTitleContent2={`Only the members of the Roger Pirates crew that journeyed to the island learned 
            what exactly the treasure consists of. Upon arriving on the island and seeing Joy Boy's treasure, 
            the Roger Pirates simply began to laugh. Roger described it as a "tale full of laughs", which gave him 
            the idea to name the final island "Laugh Tale". Sometime after the Roger Pirates' 
            discovery, the world at large would begin to refer to Roger's treasures as the "One Piece"`}
            secondTitleContent3={`Before Roger was executed, he announced to the world that this great treasure 
            could be claimed by anyone who could reach it, thereby starting the Great Age of Pirates.`}
            secondTitleContent4={`The closest the Straw Hat Pirates have ever come to finding out the 
            nature of the One Piece was during the Sabaody Archipelago Arc, when Usopp tried to ask Silvers 
            Rayleigh about it. However, Luffy stopped him on the grounds that learning about it from someone 
            else would defeat the purpose of their adventures and that becoming the Pirate King would have 
            little merit if he already knew anything about the One Piece.`}
            secondTitleContent5={`After decades of speculations and doubts, the treasure's existence was 
            confirmed by Whitebeard with his last breath. He mentioned that "a grand battle will engulf the 
            entire world" and "the world will be shaken to its core" when the One Piece is found.`}
            secondTitleContent6={`During the Wano Country Arc, Big Mom had an internal monologue expressing 
            the idea that "some of" the One Piece might be located in Wano Country rather than Laugh Tale. 
            This has yet to be elaborated on further.`}

            thirdTitle="Trivia"
            thirdTitleContent1={`Eiichiro Oda himself confirmed in an interview with Momoko Sakura that the 
            One Piece is not something like "the journey itself was the real treasure" and that it is, in fact, 
            a physical reward.`}
            thirdTitleContent2={`Whitebeard stated in his final words that the world will be "shaken to its core" 
            when the One Piece is found. Donquixote Doflamingo made a similar statement about the national 
            treasure of Mary Geoise.`}
      />
    </div>
  )
}

export default Home