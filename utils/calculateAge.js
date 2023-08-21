export function calculateAge(birthday) {
  const date = new Date();
  const birthdayDate = new Date(birthday);
  const difference = date.getTime() - birthdayDate.getTime();
  const days = Math.floor(difference / 86400000);

  let months = Math.floor(difference / 2629746000);
  const years = Math.floor(months / 12);

  const ageInYears = `${years} years`;
  const ageInMonths = `${months - 12 * years} months`;
  const ageInDays = `${days} days`;

  if (years > 1) return ageInYears;
  else if (years < 1 && months < 1) return ageInDays;
  return ageInMonths;
}
