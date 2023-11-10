import { useQuery } from "@apollo/client";
import { QueryTutors } from "../../utils/queries";

export function Tutors() {
  const { loading, data } = useQuery(QueryTutors);

  if (!loading) {
    return (
      <>
        {data.getTutors.map((tutor) => {
          return (
            <>
              <h3 key={tutor.name}>{tutor.name}</h3>
              <h4 key={tutor.rate}>{tutor.rate}</h4>
              <ul key={tutor.skill}>
                {tutor.skill.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </>
          );
        })}
      </>
    );
  }
}
