import React, { useState } from 'react'
// import "./OrganizationContextStyle.css"
// import "./StrawHatPiratesContextStyle.css"
import PiratesData from './PiratesData'
// import { IoMdArrowDropdown } from "react-icons/io"
// import { IoMdArrowDropup } from "react-icons/io"
import { MdArrowDropDown } from "react-icons/md"
import { MdArrowDropUp } from "react-icons/md"
import { Link } from 'react-router-dom'
function OrganizationContext() {

    const handleClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    };

    const [selectedGroup, setSelectedGroup] = useState("Straw Hat Pirates") //for group/organization
    const [isActive, setIsActive] = useState(false) //dropdown of group/organization

    //get the group of pirate base on the selectedGroup
    const selectedData = PiratesData.find(group => group.group === selectedGroup);
    
    //for selection
    function handleClickOption(groupValue) {
        setSelectedGroup(groupValue);
        setIsActive(false);
    }
    //for the icon of down and up
    const handleClickChange = () => {
        setIsActive(!isActive);
    };

  return (
    <div className='organization'>
        <div className="dropdown">
            <h2 className='titleOrgGroup'>Select organization or group</h2>
            <div className="dropdown-btn" onClick={handleClickChange}>
                    {selectedGroup}
                    {isActive? 
                    <MdArrowDropDown className='dropdownIcon'/> :
                    <MdArrowDropUp className='dropdownIcon'/>
                    }
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {PiratesData.map((item) => (
                        <div key={item.group}
                            onClick={()=> handleClickOption(item.group)}
                            className="dropdown-item"
                        >
                            {item.group}
                        </div>
                    ))}
                </div>
            )}
        </div>
        
        <div className="el-heading">
            <h2 className='groupName'>{selectedGroup}</h2>
            <ul className='el-card-list'>
                {selectedData.member.map(item=>{
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
                            <Link className='viewBtnCharact' 
                                  to={`/character/${encodeURIComponent(item.url)}`} 
                                  onClick={handleClick}
                            >
                                View
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default OrganizationContext

