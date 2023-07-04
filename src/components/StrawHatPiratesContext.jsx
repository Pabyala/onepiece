import React from 'react'
import { Link } from 'react-router-dom';
import "./StrawHatPiratesContextStyle.css"
import firstImage from '../assets/strawhatpirates.jpg'
import PiratesData from './PiratesData'

function StrawHatPiratesContext() {
    const selectedGroup = "Straw Hat Pirates";
    const selectedData = PiratesData.find(group => group.group === selectedGroup);

    if (!selectedData) {
        return null; // Return null or any other fallback component if the group is not found
    }

    const handleClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      };

  return (
    <div className="strawHatPirates">
        <div className="image-holder">
            <img className='imageFront' src={firstImage} alt="" />
        </div>

        <div className="strawHat-det">
            <div className="strawHat-det-list">
                <dl className="strawHat-det-list-item first">
                    <dt className='strawHat-det-list-item-head'>
                        <span className='title-head'>Total bounty</span>
                    </dt>
                    <dt className='strawHat-det-list-item-body'>
                        <span className='title-body'>3,161 billion 100 berries</span>
                    </dt>
                </dl>
                <dl className="strawHat-det-list-item">
                    <dt className='strawHat-det-list-item-head'>
                        <span className='title-head'>Birthday</span>
                    </dt>
                    <dt className='strawHat-det-list-item-body'>
                        <span className='title-body'>June 13th (Straw Hat Pirates Day)</span>
                    </dt>
                </dl>
            </div>
        </div>

        <div className="el-paragraph">
            <p className='p-tag'>A pirate group formed by the main character, Monkey D. Luffy, in the East Sea. <br />
                After two years of training, the Straw Hat Crew regrouped in the Sabaody Archipelago. Travel through the New World to reach the final island, Raftel!
            </p>
        </div>

        <div className="el-heading">
            <h2 className='groupName'>Straw Hat Pirates</h2>
            <ul className='el-card-list'>
                {selectedData.member.map(item =>{
                    return(
                        <li className="el-card-item" key={item.name}>
                            <div className="el-list-card-con">
                                <div className="el-card-img-con">
                                    <div className="el-card-img">
                                        <img className='smallImg' src={item.small_image} alt="" />
                                    </div>
                                </div>
                                <div className="el-card-text">
                                    <div className='el-card-text-inner'>
                                        <h3 className='groupMemberName'>{item.name}</h3>
                                        <div className="el-list-info">
                                            {item.bounty !== '' && (
                                                <div className='el-list-head-body'>
                                                    <div className='head_text-con'>
                                                        <span className='card-title'>Bounty:</span>
                                                        <span className='card-subTitle'>{item.bounty}</span>
                                                    </div>
                                                </div>
                                            )}
                                            {item.devel_fruit !== '' && (
                                                <div className='el-list-head-body'>
                                                    <div className='head_text-con'>
                                                        <span className='card-title'>Devil Fruit: </span>
                                                        <span className='card-subTitle'>{item.devel_fruit}</span>
                                                    </div>
                                                </div>
                                            )}
                                            {item.organization !== '' && (
                                                <div className='el-list-head-body'>
                                                    <div className='head_text-con'>
                                                        <span className='card-title'>Organizaion: </span>
                                                        <span className='card-subTitle'>{item.organization}</span>
                                                    </div>
                                                </div>
                                            )}
                                            {item.birthday !== '' && (
                                                <div className='el-list-head-body'>
                                                    <div className='head_text-con'>
                                                        <span className='card-title'>Birthday: </span>
                                                        <span className='card-subTitle'>{item.birthday}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='viewBtnCharact-con'>
                                <Link className="viewBtnCharact" 
                                      to={`/character/${encodeURIComponent(item.url)}`}
                                      onClick={handleClick}
                                >
                                    View
                                </Link>
                            </div>
                            
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default StrawHatPiratesContext;


