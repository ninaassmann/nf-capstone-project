export default function ListItem({ id, name, breed, birthday }) {
  const date = new Date();
  const birthdayDate = new Date(birthday);
  const difference = date.getTime() - birthday.getTime();

  return (
    <li key={id}>
      <h3>{name}</h3>
      <p>{breed}</p>
      <p>{difference}</p>
    </li>
  );
}
