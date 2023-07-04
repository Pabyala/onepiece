import React from "react";
import { useParams } from "react-router";
import PiratesData from "./PiratesData";
import "./CharacterStyle.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Character() {
  //get the characterId param from the URL/<Route path>
  const { characterId } = useParams();

  let member;
  let members = []; // Initialize members as an empty array
  let group = null;

  //for all group or groupData in PirayesData.jsx array. The loop will access each group
  for (const groupData of PiratesData) {
    //each groupData.member find in the member array that have url and
    //check if the emember.url is match characterId and store it in foundMember
    member = groupData.member.find((member) => member.url === characterId);
    //check if the member is exists
    if (member) {
      //asign the value of groupData.group which represent group name or identifier and store in group
      group = groupData.group;
      //asign the value of groupData.member which represent all members of group and store in members
      members = groupData.member;
      //break out the loop using break;
      break;
    }
  }

  if (!member || !group) {
    //return or display this
    return (
      <div>
        <h2>Character Not Found</h2>
      </div>
    );
  }

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="character">
      <Navbar />
      <div className="el-first-card">
        <h2 className="character-name">{member.name}</h2>
        <h3 className="character-group">{member.organization}</h3>
        {member.position !== "" && (
          <h3 className="character-position">{member.position}</h3>
        )}
        <p className="v-actor">
          Voice actor: <span className="character-v-actor">{member.voice_actor}</span>
        </p>
      </div>

      <div className="img-con-car">
        <div className="el-second-card">
          {member.large_image !== "" && (
            <div className="el-second-card-img">
              <img className="character-img" src={member.large_image} alt="" />
            </div>
          )}
        </div>
      </div>
      <div className="el-third-card">
        <h3 className="character-overview">Character overview</h3>
        <div className="el-list-character-data">

          {member.common_name !== "" && (
            <dl className="character-dl">
              <dt className="character-dt">
                <span className="character-title">Common Name</span>
              </dt>
              <dd className="character-dd">
                <span className="character-subTitle">{member.common_name}</span>
              </dd>
            </dl>
          )}

          {member.devel_fruit !== "" && (
            <dl className="character-dl">
              <dt className="character-dt">
                <span className="character-title">Devil Fruit</span>
              </dt>
              <dd className="character-dd">
                <span className="character-subTitle">{member.devel_fruit}</span>
              </dd>
            </dl>
          )}

          {member.bounty !== "" && (
            <dl className="character-dl">
              <dt className="character-dt">
                <span className="character-title">Bounty</span>
              </dt>
              <dd className="character-dd">
                <span className="character-subTitle">{member.bounty}</span>
              </dd>
            </dl>
          )}

          {member.age !== "" && (
            <dl className="character-dl">
              <dt className="character-dt">
                <span className="character-title">Age</span>
              </dt>
              <dd className="character-dd">
                <span className="character-subTitle">{member.age}</span>
              </dd>
            </dl>
          )}

          {member.birthday !== "" && (
            <dl className="character-dl">
              <dt className="character-dt">
                <span className="character-title">Birthday</span>
              </dt>
              <dd className="character-dd">
                <span className="character-subTitle">{member.birthday}</span>
              </dd>
            </dl>
          )}

          {member.height !== "" && (
            <dl className="character-dl">
              <dt className="character-dt">
                <span className="character-title">Height</span>
              </dt>
              <dd className="character-dd">
                <span className="character-subTitle">{member.height}</span>
              </dd>
            </dl>
          )}

          {member.birthdaypalce !== "" && (
            <dl className="character-dl">
              <dt className="character-dt">
                <span className="character-title">Birthplace</span>
              </dt>
              <dd className="character-dd">
                <span className="character-subTitle">{member.birthdaypalce}</span>
              </dd>
            </dl>
          )}

          {member.favorite !== "" && (
            <dl className="character-dl">
              <dt className="character-dt">
                <span className="character-title">Favorite</span>
              </dt>
              <dd className="character-dd">
                <span className="character-subTitle">{member.favorite}</span>
              </dd>
            </dl>
          )}
        </div>
      </div>

      <div className="el-heading">
        <h2 className="groupName">{member.organization}</h2>
        <ul className="el-card-list">
          {members.map((item) => {
            return (
              <li className="el-card-item" key={item.url}>
                <div className="el-list-card-con">
                  <div className="el-card-img-con">
                    <div className="el-card-img">
                      <img className="smallImg" src={item.small_image} alt="" />
                    </div>
                  </div>
                  <div className="el-card-text">
                    <div className="el-card-text-inner">
                      <h3 className="groupMemberName">{item.name}</h3>
                      <div className="el-list-info">
                        {item.bounty !== "" && (
                          <div className="el-list-head-body">
                            <div className="head_text-con">
                              <span className="card-title">Bounty:</span>
                              <span className="card-subTitle">
                                {item.bounty}
                              </span>
                            </div>
                          </div>
                        )}
                        {item.devel_fruit !== "" && (
                          <div className="el-list-head-body">
                            <div className="head_text-con">
                              <span className="card-title">Devil Fruit: </span>
                              <span className="card-subTitle">
                                {item.devel_fruit}
                              </span>
                            </div>
                          </div>
                        )}
                        {item.organization !== "" && (
                          <div className="el-list-head-body">
                            <div className="head_text-con">
                              <span className="card-title">Organizaion: </span>
                              <span className="card-subTitle">
                                {item.organization}
                              </span>
                            </div>
                          </div>
                        )}
                        {item.birthday !== "" && (
                          <div className="el-list-head-body">
                            <div className="head_text-con">
                              <span className="card-title">Birthday: </span>
                              <span className="card-subTitle">
                                {item.birthday}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="viewBtnCharact-con">
                  <Link className="viewBtnCharact"
                        onClick={handleClick}
                        to={`/character/${encodeURIComponent(item.url)}`}
                  >
                    View
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Character;
