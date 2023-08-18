import { css, styled } from "styled-components";
import Button from "./Button";

export default function DeleteModal({ pet, handleModalState, handleDelete }) {
  return (
    <Modal>
      <Container>
        <h3>You are about to delete the following profile</h3>
        <p>This can not be undone.</p>
        <StyledText isHighlight>{pet.petName}</StyledText>
        <span>{pet.petBreed.join(", ")}</span>
        <Wrapper>
          <Button
            type="button"
            buttonText="Stop, I changed my mind"
            onClick={handleModalState}
          />
          <Button
            type="button"
            buttonText="Yes, get rid of it"
            variant="danger"
            onClick={() => handleDelete(pet)}
          />
        </Wrapper>
      </Container>
    </Modal>
  );
}

const Modal = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  width: min(90vw, 600px);
  margin-inline: auto;
  padding: 1rem;
  border-radius: 1rem;

  background-color: white;

  & h3 {
    max-width: 60%;
  }

  & p {
    margin-top: 1rem;
  }
`;

const StyledText = styled.p`
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;
