import React from 'react'
import "./ContextStyle.css"

function Context(props) {
  return (
        <div className="context">
            <div className="context-info">
                <h1>{props.strawHatPirate}</h1>
                <div className="image">
                    <img src={props.firstTitleContentImg} alt="img" />
                </div>
                <div className="strawHat-container">
                    <div className="strawHat-context">
                        <div className="strawHat-p">
                            <p className='paragraph'>{props.strawHatPirateContext1}</p>
                            <p className='paragraph'>{props.strawHatPirateContext2}</p>
                            <p className='paragraph'>{props.strawHatPirateContext3}</p>
                        </div>
                        <div className="strawHat-image">
                            <img src={props.img1} alt="img1" />
                            <img src={props.img2} alt="img1" />
                        </div>
                    </div>
                    <div className="strawHat-context">
                        <div className="strawHat-p">
                            <p className='paragraph'>{props.strawHatPirateContext4}</p>
                            <p className='paragraph'>{props.strawHatPirateContext5}</p>
                            <p className='paragraph'>{props.strawHatPirateContext6}</p>
                        </div>
                        <div className="strawHat-image">
                            <img src={props.img3} alt="img1" />
                            <img src={props.img4} alt="img1" />
                        </div>
                    </div>
                    <div className="strawHat-context">
                        <div className="strawHat-p">
                            <p className='paragraph'>{props.strawHatPirateContext7}</p>
                            <p className='paragraph'>{props.strawHatPirateContext8}</p>
                            <p className='paragraph'>{props.strawHatPirateContext9}</p>
                            <p className='paragraph'>{props.strawHatPirateContext10}</p>
                        </div>
                        <div className="strawHat-image">
                            <img src={props.img5} alt="img1" />
                            <img src={props.img6} alt="img1" />
                        </div>
                    </div>
                    <div className="strawHat-context">
                        <div className="strawHat-p">
                            <p className='paragraph'>{props.strawHatPirateContext11}</p>
                            <p className='paragraph'>{props.strawHatPirateContext12}</p>
                            <p className='paragraph'>{props.strawHatPirateContext13}</p>
                            <p className='paragraph'>{props.strawHatPirateContext14}</p>
                        </div>
                        <div className="strawHat-image">
                            <img src={props.img7} alt="img1" />
                            <img src={props.img8} alt="img1" />
                        </div>
                    </div>
                        
                </div>
            </div>
            <div className="context-info">
                <h1>{props.firstTitle}</h1>
                <div className="fisrtDiv">
                        <p className='paragraph'>{props.firstTitleContent1}</p>
                        <p className='paragraph'>{props.firstTitleContent2}</p>
                </div>
            </div>
            <div className="context-info">
                <h1>{props.secondTitle}</h1>
                <div className="secondDiv">
                        <p className='paragraph'>{props.secondTitleContent1}</p>
                        <p className='paragraph'>{props.secondTitleContent2}</p>
                        <p className='paragraph'>{props.secondTitleContent3}</p>
                        <p className='paragraph'>{props.secondTitleContent4}</p>
                        <p className='paragraph'>{props.secondTitleContent5}</p>
                        <p className='paragraph'>{props.secondTitleContent6}</p>
                </div>
            </div>
            <div className="context-info">
                <h1>{props.thirdTitle}</h1>
                <div className="thirdDiv">
                    <ul className='trivia'>
                        <li>{props.thirdTitleContent1}</li>
                        <li>{props.thirdTitleContent2}</li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Context;