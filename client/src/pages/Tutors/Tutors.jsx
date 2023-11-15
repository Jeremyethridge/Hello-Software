import { useQuery } from "@apollo/client";
import { QueryTutors } from "../../utils/queries";
import "../Tutors/Tutors.css";

export function Tutors() {
  const { loading, data } = useQuery(QueryTutors);

  if (!loading && data && data.getTutors) {
    return (
      <div className="cards-container">
        {data.getTutors.map((tutor) => (
          <div className="card" key={tutor.name}>
            <h3 className="name">
              <span>Hi I'm {tutor.name}! 👋</span>
              <a href={tutor.payment} target="_blank">
                <button>Hire Me</button>
              </a>
            </h3>
            <hr></hr>
            <p className="rate"> Rate : ${tutor.rate} / hr. </p>
            <p className="skill-word"> Skills: </p>
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
