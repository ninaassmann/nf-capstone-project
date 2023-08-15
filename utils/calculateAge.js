export function calculateAge(birthday) {
  const date = new Date();
  const birthdayDate = new Date(birthday);
  const difference = date.getTime() - birthdayDate.getTime();
  let months = Math.floor(difference / 2629746000);
  const years = Math.floor(months / 12);
  months = months - 12 * years;
  const age = `${years}.${months} years`;

  if (years > 1) return age;
  return `${months} months`;
}
