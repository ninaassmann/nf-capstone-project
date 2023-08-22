import { styled } from "styled-components";
import Phone from "@/components/icons/Phone";
import Link from "next/link";

export default function VetSection({ pet }) {
  return (
    <>
      {pet.vet.name && (
        <CTA href={`tel:${pet.vet.phone}`}>
          <div>
            <h3>{pet.vet.name}</h3>
            <p>{pet.vet.address}</p>
          </div>
          <Phone />
        </CTA>
      )}
    </>
  );
}

const CTA = styled(Link)`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  text-decoration: none;

  background-color: rgb(100, 200, 100);

  &:hover {
    filter: brightness(0.85);
  }

  & svg {
    fill: white;
  }
`;
