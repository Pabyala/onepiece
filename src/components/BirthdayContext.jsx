import React, { useState } from 'react';
import PiratesData from './PiratesData';
import './BirthdayContextStyle.css'
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { Link } from 'react-router-dom';

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const renderMembersByMonth = (month) => {
  const members = [];

  PiratesData.forEach(({ member }) => {
    member.forEach(({ name, birthday, small_image, url }) => {
      const [birthMonth, birthDate] = birthday.split(" ");
      if (birthMonth === month) {
        members.push({ birthday, small_image, name, url });
      }
    });
    
  });
  
  const membersJSX = members.map(({ name, birthday, small_image, url }) => {
    const [birthMonth, birthDate] = birthday.split(" ");
    const birthDateText = `${birthDate}`
    const birthMonthText = `${birthMonth}`

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    return (
            <li className="birthday-info-con" key={`${birthDateText}-${birthMonthText}-${name}-${url}`}>
              <div className='birthDate-con'>
                <span className='birthDate'>{birthDateText}</span>
                <span className='birthMonth'>{birthMonthText}</span>
              </div>
              
              <Link to={`/character/${encodeURIComponent(url)}`} onClick={handleClick} className="birth-link">
                <div className="imgSmall-con">
                  <img className='imgSmall' src={small_image} alt={name} />
                </div>

                <div className="name-con">
                  <span className='birthName'>{name}</span>
                </div>
              </Link>
            </li>
    );
  });

  membersJSX.sort((a, b) => {
    const [aDate] = a.key.split(" ");
    const [bDate] = b.key.split(" ");
    return parseInt(aDate) - parseInt(bDate);
  });

  return membersJSX;
};

const Birthday = () => {

  const [currentMonthIndex, setCurrentMonthIndex] = useState(0)
  const numberOfMonths = months.length - 1


  const handlePrevMonth = () => {   //if prevIndex === 0 is true get all numberOfMonths
    setCurrentMonthIndex((prevIndex) => (prevIndex === 0 ? numberOfMonths : prevIndex - 1))
  }

 
  const handleNextMonth = () => {   //if prevIndex === numberOfMonths is true back to zero(0)
    setCurrentMonthIndex((prevIndex) => (prevIndex === numberOfMonths ? 0 : prevIndex + 1));
  }

  const currentMonth = months[currentMonthIndex]

  return(
    <div className='birthday-list'>
        <div className="btn-months-con">
            <button className='btnMonths' onClick={handlePrevMonth}>
              <BsFillArrowLeftCircleFill className='iconLeftRight'/>
            </button>
            <div className="months-wrap">
              <h3 className='monthName'>{currentMonth}</h3>
            </div>
            <button className='btnMonths' onClick={handleNextMonth}>
              <BsFillArrowRightCircleFill className='iconLeftRight'/>
            </button>
        </div>
      
        <div className="birthdayName-list">
          <ul className='birthdayName-list-wrap'>
            {renderMembersByMonth(currentMonth)}
          </ul>
        </div>
    </div>
    
  )
};

export default Birthday;



