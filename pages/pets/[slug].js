import Container from "@/components/Container.styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { calculateAge } from "@/utils/calculateAge";
import Label from "@/components/Label.styled";
import { useState } from "react";
import Button from "@/components/Button";
import DeleteModal from "@/components/DeleteModal";
import Toast from "@/components/Toast";
import BreedInfoSection from "@/components/PetDetails/BreedInfoSection";
import Section from "@/components/PetDetails/Section.styled";
import FoodSection from "@/components/PetDetails/FoodSection";
import VetSection from "@/components/PetDetails/VetSection";
import LinkButton from "@/components/LinkButton.styled";
import BackLink from "@/components/BackLink";

export default function Pet({
  pets,
  updateFoodStock,
  dogBreeds,
  handleDelete,
  toast,
  updatePets,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const [modal, setModal] = useState();

  const pet = pets.find((pet) => slug === pet.slug);
  const age = calculateAge(pet && pet.petBirthday);

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

  return (
    <>
      <Container>
        <BackLink />

        <Section>
          {pet.mixed && <Label>Mixed</Label>}
          <h1>{pet.petName}</h1>
          <p>{pet.petBreed?.join(", ")}</p>
          <p>{age}</p>
        </Section>

        <VetSection pet={pet} />

        <FoodSection
          pet={pet}
          updateFoodStock={updateFoodStock}
          updatePets={updatePets}
        />

        <BreedInfoSection
          petBreeds={pet?.petBreed}
          dogBreeds={dogBreeds && dogBreeds}
        />

        <LinkButton href={`/pets/update/${pet.slug}`}>Update</LinkButton>
        <Button
          type="button"
          buttonText="Delete"
          $variant="danger"
          onClick={() => {
            setModal(true);
            window.scrollTo({ top: 0, left: 0 });
          }}
        />
      </Container>

      {toast === true && (
        <Toast text={"Congratulation! You updated your pet."} />
      )}

      {modal === true && (
        <DeleteModal
          pet={pet}
          setModal={setModal}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
}
