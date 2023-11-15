import { useQuery } from "@apollo/client";
import { QueryTutors } from "../../utils/queries";
import '../Tutors/Tutors.css'


const BeRented = (e) => {
  let gtg, hoursSelected, minutesSelected, total;
  const reg = new RegExp('^[0-9]+$');
  do{
    hoursSelected = prompt(`Rate is ${e.target.value}\nEnter number of hours to buy: `);
    minutesSelected = prompt(`Enter number of minutes to buy: `);
    gtg = reg.test(hoursSelected) && reg.test(minutesSelected);
    
    if(!gtg){ 
      alert('Bad input\nHours and minutes must be integers!')
    } else {
      hoursSelected = parseFloat(hoursSelected);
      minutesSelected = parseFloat(minutesSelected);
    }
  } while(!gtg)

  total = (hoursSelected + minutesSelected/60) * e.target.value;
  total = Math.ceil(total*100)/100;
  alert(`Total cost to rent this tutor: $${total}`);
}

export function Tutors() {
  const { loading, data } = useQuery(QueryTutors);

  if (!loading && data && data.getTutors) {
    return (
      <div className="cards-container">
        {data.getTutors.map((tutor) => (
          <div className="card" key={tutor.name}>
            <h3 className="name"> Hi I'm {tutor.name}! 👋<button value={tutor.rate} onClick={BeRented}>RentMe</button></h3>
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
