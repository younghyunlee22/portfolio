import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.languages.map((skills, i) => {
            return (
              <>
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  {/* <i className={skills.fontAwesomeClassname}></i> */}
                  <img src={skills.iconPath} alt={skills.skillName} />
                  <p>{skills.skillName}</p>
                </li>
              </>
            );
          })}
        </ul>
        <ul className="dev-icons">
          {skillsSection.frameworks.map((skills, i) => {
            return (
              <>
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  {/* <i className={skills.fontAwesomeClassname}></i> */}
                  <img src={skills.iconPath} alt={skills.skillName} />
                  <p>{skills.skillName}</p>
                </li>
              </>
            );
          })}
        </ul>
        <ul className="dev-icons">
          {skillsSection.others.map((skills, i) => {
            return (
              <>
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  {/* <i className={skills.fontAwesomeClassname}></i> */}
                  <img src={skills.iconPath} alt={skills.skillName} />
                  <p>{skills.skillName}</p>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
