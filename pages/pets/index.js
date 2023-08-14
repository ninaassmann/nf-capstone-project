import Button from "@/components/Button";
import Container from "@/components/Container";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import { uid } from "uid";

export default function Form({ addNewPet, dogData }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newPet = {
      id: uid(),
      petName: data.petName,
      petBreed: data.petBreed,
      petBirthday: data.petBirthday,
    };

    console.log(newPet);

    addNewPet(newPet);

    event.target.reset();
    router.push("/");
  }

  return (
    <Container>
      <h1>Create a new Dog</h1>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="petName">Name</label>
          <input
            type="text"
            id="petName"
            name="petName"
            placeholder="Enter the name of your pet"
            pattern="[a-zA-Z]*"
            required
          />
        </div>
        <div>
          <label htmlFor="petBirthday">Birthday</label>
          <input type="date" id="petBirthday" name="petBirthday" required />
        </div>
        <div className="select-wrap">
          <label htmlFor="petBreed">Breed</label>
          <select name="petBreed" id="petBreed">
            {dogData &&
              dogData.map((breed) => (
                <option key={breed.id} value={breed.name}>
                  {breed.name}
                </option>
              ))}
          </select>
        </div>
        <Button type="submit" buttonText="Create a new Dog" />
      </StyledForm>
      <Link href="/">back to overview</Link>
    </Container>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  & div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & input,
    select {
      width: 100%;
      padding: 1rem;
      border-radius: 0.5rem;
      border: 1px solid grey;

      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
  }

  & .select-wrap {
    display: inline-block;
    position: relative;
    &::after {
      content: "↓";
      position: absolute;
      font-size: 1rem;
      right: 1rem;
      top: 2.125rem;
      color: black;
    }
  }
`;
