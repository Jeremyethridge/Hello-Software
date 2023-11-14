import { useQuery } from "@apollo/client";
import { QueryTutors } from "../../utils/queries";
import '../Tutors/Tutors.css'


export function Tutors() {
  const { loading, data } = useQuery(QueryTutors);

  if (!loading && data && data.getTutors) {
    return (
      <div className="cards-container">
        {data.getTutors.map((tutor) => (
          <div className="card" key={tutor.name}>
            <h3 className="name"> Hi I'm {tutor.name}! 👋</h3>
            <hr></hr>
            <p className="rate"> Rate : {tutor.rate} $</p>
            <p className="skill-word"> Skills </p>
            {tutor.skill.map((skill) => (
              <p className="skills" key={skill}>
                {skill}
              </p>
            ))}
          </div>
        ))}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

// export function Tutors() {
//   const { loading, data } = useQuery(QueryTutors);

//   if (!loading && data && data.getTutors) {
//     return (
//       <>
//         {data.getTutors.map((tutor) => {
//           return (
//             <>
              
//                 <h3 className="Hello" key={tutor.name}>
//                   {tutor.name}
//                 </h3>
//                 <h4 key={tutor.rate}>{tutor.rate}</h4>
//                 <ul key={tutor.skill}>
//                   {tutor.skill.map((skill) => (
//                     <li key={skill}>{skill}</li>
//                   ))}
//                 </ul>
             
//             </>
//           );
//         })}
//       </>
//     );
//   }
// }
