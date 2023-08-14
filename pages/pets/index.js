import Button from "@/components/Button";
import Container from "@/components/Container";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import { uid } from "uid";

export default function Form({ addNewPet }) {
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
          <StyledTextInput
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
          <StyledTextInput
            type="date"
            id="petBirthday"
            name="petBirthday"
            required
          />
        </div>
        <div>
          <label htmlFor="petBreed">Breed</label>
          <StyledTextInput
            type="text"
            id="petBreed"
            name="petBreed"
            placeholder="Enter the breed of your pet"
            pattern="[a-zA-Z]*"
            required
          />
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
  }
`;

const StyledTextInput = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid grey;
`;
