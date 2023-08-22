import Container from "@/components/Container";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import { calculateAge } from "@/utils/calculateAge";
import Label from "@/components/Label";
import { useState } from "react";
import Button from "@/components/Button";
import DeleteModal from "@/components/DeleteModal";
import Toast from "@/components/Toast";
import BreedInfoSection from "@/components/PetDetails/BreedInfoSection";
import Section from "@/components/PetDetails/Section.styled";
import FoodSection from "@/components/PetDetails/FoodSection";
import VetSection from "@/components/PetDetails/VetSection";

export default function Pet({ pets, dogData, handleDelete, toast }) {
  const router = useRouter();
  const { slug } = router.query;

  const [modal, setModal] = useState();

  const pet = pets.find((pet) => slug === pet.slug);
  console.log(pet);

  if (!pet) {
    return (
      <main>
        <Container>
          <h1>page not found</h1>
          <Link href="/">back to overview</Link>
        </Container>
      </main>
    );
  }

  const age = calculateAge(pet.petBirthday);

  const petBreeds = pet.petBreed;

  return (
    <>
      <main>
        <Container>
          <Link href="/">back to overview</Link>
          <Section>
            {pet.mixed && <Label>Mixed</Label>}
            <h1>{pet.petName}</h1>
            <p>{pet.petBreed.join(", ")}</p>
            <p>{age}</p>
          </Section>

          <VetSection pet={pet} />

          <FoodSection pet={pet} />

          <BreedInfoSection petBreeds={petBreeds} dogData={dogData} />

          <Button
            type="button"
            buttonText="Delete"
            variant="danger"
            onClick={() => setModal("delete")}
          />
          <Link href={`/pets/update/${pet.slug}`}>Update</Link>
          {toast === true && (
            <Toast text={"Congratulation! You updated your pet."} />
          )}
        </Container>
      </main>
      {modal === "delete" && (
        <DeleteModal
          pet={pet}
          setModal={setModal}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
}
