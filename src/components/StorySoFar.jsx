import React from 'react'
import "./StorySoFarStyle.css"
import {StoryList} from './StoryData'
import { Link } from 'react-router-dom'
function StorySoFar() {

    const handleClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    
    return (
        <div className="story">
            <div className="ongoing-story">
                <h1>Ongoing Story</h1>
                {StoryList.slice(-1).map((data) => {
                    return(
                        <div className="ongoing-story-con" key={data.id}>
                            <div className="ongoing-story-wrap">
                                <div className="image-wrap">
                                    <img src={data.coverImage} alt="" />
                                </div>
                                <div className="story-detials-wrap">
                                    <h3>{data.storyTitle}</h3>
                                    <div className="original-wrap">
                                        <span>Original:</span>
                                        <p>{data.original}</p>
                                    </div>
                                    <div className="animation-wrap">
                                        <span>Animation:</span>
                                        <p>{data.animation}</p>
                                    </div>
                                    <Link to={data.url} className='viewBtn' onClick={handleClick}>View</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <h1>Story list</h1>
                <div className="ongoing-story-list">
                    <ul className='story-list-card'>
                        {StoryList.map((data) => {
                            return(
                                <li className='story-list-item' key={data.id}>
                                    <div className="image-list-wrap">
                                        <img src={data.coverImage} alt="" />
                                    </div>
                                    <div className="story-list-detials">
                                        <h3>{data.storyTitle}</h3>
                                        <div className="story-list-wrap">
                                            <span>Original</span>
                                            <p>{data.original}</p>
                                        </div>
                                        <div className="story-list-animation">
                                            <span>Animation</span>
                                            <p>{data.animation}</p>
                                        </div>
                                        <Link to={data.url} className='listBtn' onClick={handleClick}>View</Link>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default StorySoFar;