import React from 'react'
import './DevilFruitContextStyle.css'
import devilfruitImg1 from '../assets/devilfruit_01.jpg'
import devilfruitImg2 from '../assets/devilfruit_02.jpg'
import devilfruitImg3 from '../assets/devilfruit_03.jpg'
import devilfruitImg4 from '../assets/devilfruit_04.jpg'
import devilfruitImg5 from '../assets/devilfruit_05.jpg'
import devilfruitImg6 from '../assets/devilfruit_06.jpg'
function DevilFruitContext() {
  return (
    <div className='devilFruitContext'>
        <div className='devilFruitContext-con devilFruit'>
            <h1 className='devilfruit-title'>What is devil fruit</h1>
            <div className="devilfruit-card-text">
                <h3 className='devilfruit-subTitle'>"The incarnation of the sea devil" that grants extraordinary powers!!</h3>
                <p className='devilfruit-p'>If you take a bite, you will acquire a mysterious ability. How it grows 
                    and how it is harvested is shrouded in mystery, but those who eat it gain 
                    supernatural powers and are called 'powered people'. Ability users are 
                    feared by the general public as people with extraordinary abilities. On 
                    the other hand, due to its terrifying effect, one of its fruits is traded 
                    at a price of not less than 100 million berry.</p>
                <p className='devilfruit-p'>The power obtained from a devil fruit varies depending on the fruit eaten, 
                    and no fruit with the same ability appears at the same time. Also, multiple 
                    ability users cannot be born from a single fruit.</p>
                <p className='devilfruit-p'>And the most terrifying of all is the effect that can be called a side effect, 
                    attacking ability users in exchange for powerful power. Making a pact with 
                    the Sea Devil poses a great risk to psychics.</p>
            </div>
            <div className="devilfruit-card-img">
                <img className='devilfruit-img' src={devilfruitImg1} alt="" />
            </div>
        </div>
        <div className='devilFruitContext-con'>
            <h1 className='devilfruit-title'>Devil fruit risk</h1>
            <div className="devilfruit-card-text">
                <h3 className='devilfruit-subTitle'>Sea devil's law that binds psychics</h3>
                <p className='devilfruit-p'>The incarnation of the sea devil, whoever eats the devil fruit, is hated by the sea from that moment on. Without exception, power users lose their strength when they enter the sea, and they can't even move. Moreover, not only in the sea, but also in rivers, lakes, and even baths, similar symptoms occur in "places where water is stagnant".</p>
                <p className='devilfruit-p'>The other is that you can't eat more than one type of devil fruit. It is said that the moment a person eats the second fruit, their body will shatter into pieces due to the devil's curse.</p>
                <p className='devilfruit-p'>Because of its danger, there are even cases where Celestial Dragons playfully feed it to their slaves.</p>
            </div>
            <div className="devilfruit-card-img">
                <img className='devilfruit-img' src={devilfruitImg2} alt="" />
            </div>
        </div>
        <div className='devilFruitContext-con'>
            <h1 className='devilfruit-title'>Devil fruit research</h1>
            <div className="devilfruit-card-text">
                <h3 className='devilfruit-subTitle'>Widespread Use of Devil Fruits by the Military</h3>
                <p className='devilfruit-p'>The effect of devil fruit is not limited to humans, it gives power to all who consume it, whether it is an animal or an inanimate object. Dr. Vegapunk, a naval scientist who noticed this, has developed a number of technologies that apply the power of devil fruits through his own research.</p>
                <p className='devilfruit-p'>One is the technology to make inorganic matter eat fruit. The details are unknown, but the existence of guns, swords, and other items that have changed their appearance after eating animal-type Devil Fruits has been confirmed. The other is a technology that applies the ability of Navy Admiral Kizaru's "shiny fruit" to weapons. This is accomplished in the form of a laser mounted on the Pacifista.</p>
                <p className='devilfruit-p'>And Vegapunk is also conducting research on "artificial devil fruits"...</p>
            </div>
            <div className="devilfruit-card-img">
                <img className='devilfruit-img' src={devilfruitImg3} alt="" />
            </div>
        </div>
        <div className='devilFruitContext-con classification'>
            <h1 className='devilfruit-title'>Classification of Devil Fruits</h1>
            <p className='devilfruit-p classification'>Devil fruits are classified into three main categories according to their effects.</p>
            <div className='devilfruit-classification'>
                <div className='classification-card-text'>
                    <h3 className='devilfruit-subTitle'>Superhuman system (Kei Paramecia)</h3>
                    <p className='devilfruit-p classification'>A species that demonstrates a wide variety of abilities, such as stretching its body like rubber, turning its whole body into a blade, becoming invisible, and causing earthquakes with shock waves. Many people with abilities demonstrate their abilities while keeping their prototypes. It is this superhuman system that possesses various abilities that do not fit into either the animal system or the natural system, and among the three species, the number that has been confirmed is the largest.</p>
                </div>
                <div className='classification-card-img'>
                    <img className='classification-img' src={devilfruitImg4} alt="" />
                </div>
            </div>
            <div className='devilfruit-classification'>
                <div className='classification-card-text'>
                    <h3 className='devilfruit-subTitle'>Animals (zoon Kei)</h3>
                    <p className='devilfruit-p classification'>A seed that allows you to transform into an animal. Ability users can transform into "human form", "beast form", and "beast man form" in between. Among the three species, it is the only one that changes the physical abilities of the person with the ability. Some of them are rare, such as "Ancient Species" and "Mythical Beast Species", and currently only five species have been confirmed to have the ability to fly.</p>
                </div>
                <div className='classification-card-img'>
                    <img className='classification-img' src={devilfruitImg5} alt="" />
                </div>
            </div>
            <div className='devilfruit-classification'>
                <div className='classification-card-text'>
                    <h3 className='devilfruit-subTitle'>Natural type (Logia Kei)</h3>
                    <p className='devilfruit-p classification'>A rare species that can change the body of a psychic into a natural object or a natural phenomenon itself, allowing it to be manipulated at will. Because it transforms the body itself, it boasts tremendous defensive power against physical attacks and has a wide attack range just like a natural phenomenon, so it is said to be the strongest among the three types. The only effective means of countering this species, apart from their individual weaknesses, is ``armor-colored Haki''.</p>
                </div>
                <div className='classification-card-img'>
                    <img className='classification-img' src={devilfruitImg6} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}


export default DevilFruitContext