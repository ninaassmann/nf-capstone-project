import { styled } from "styled-components";
import Phone from "@/components/icons/Phone";
import Link from "next/link";

export default function VetSection({ pet }) {
  return (
    <>
      {pet.vet?.name && (
        <CTA href={`tel:${pet.vet?.phone}`} aria-label="Call your vet">
          <div>
            <h3>{pet.vet?.name}</h3>
            <p>{pet.vet?.address}</p>
          </div>
          <Phone />
        </CTA>
      )}
    </>
  );
}

const CTA = styled(Link)`
  width: 100%;
  padding: 1rem 1.5rem 1rem 1rem;
  border-radius: var(--border-radius);

  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;

  background: ${({ theme }) => theme.primary};
  & * {
    color: #eff1f5;
  }

  &:hover {
    filter: brightness(0.85);
  }

  & svg {
    fill: white;
    margin-bottom: 0.25rem;
  }
`;
