import { useQuery } from "@apollo/client";
import { QueryTutors } from "../../utils/queries";

export function Tutors() {
  const { loading, data } = useQuery(QueryTutors);

  if (!loading && data && data.getTutors) {
    return (
      <>
        {data.getTutors.map((tutor) => {
          return (
            <div key={tutor.name}>
              <h3>{tutor.name}</h3>
              <h4>{tutor.rate}</h4>
              <ul>
                {tutor.skill.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </>
    );
  }
}

