import { styled } from "styled-components";

export default function ListItem({ id, name, breed, birthday }) {
  const date = new Date();
  const birthdayDate = new Date(birthday);
  const difference = date.getTime() - birthdayDate.getTime();
  let months = Math.floor(difference / 2629746000);
  const years = Math.floor(months / 12);
  months = months - 12 * years;
  const age = `${years}.${months} years`;

  return (
    <StyledListItem>
      <h3>{name}</h3>
      <p>{breed}</p>
      {years > 1 ? <p>{age}</p> : <p>{months} months</p>}
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  padding: 1rem;
  border-radius: 1rem;
  background-color: lightgray;
`;
