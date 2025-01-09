// import React, {useContext} from "react";
// import "./WorkExperience.scss";
// import ExperienceCard from "../../components/experienceCard/ExperienceCard";
// import {workExperiences} from "../../portfolio";
// import {Fade} from "react-reveal";
// import StyleContext from "../../contexts/StyleContext";

import React from "react";
// import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="experience">
        <h1 className="education-heading">Experience</h1>
        <div className="education-card-container">
          {educationInfo.experience.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}

// export default function WorkExperience() {
//   const {isDark} = useContext(StyleContext);
//   if (workExperiences.display) {
//     return (
//       <div id="experience">
//         <Fade bottom duration={1000} distance="20px">
//           <div className="experience-container" id="workExperience">
//             <div>
//               <h1 className="experience-heading">Experiences</h1>
//               <div className="experience-cards-div">
//                 {workExperiences.experience.map((card, i) => {
//                   return (
//                     <ExperienceCard
//                       key={i}
//                       isDark={isDark}
//                       cardInfo={{
//                         company: card.company,
//                         desc: card.desc,
//                         date: card.date,
//                         companylogo: card.companylogo,
//                         role: card.role,
//                         descBullets: card.descBullets
//                       }}
//                     />
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </Fade>
//       </div>
//     );
//   }
//   return null;
// }
