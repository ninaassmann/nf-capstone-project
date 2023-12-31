import styled from "styled-components";
import Button from "./Button";

export default function DeleteModal({ pet, setModal, handleDelete }) {
  return (
    <Modal>
      <Container>
        <h3>You are about to delete the following profile</h3>
        <p>This can not be undone.</p>
        <StyledText>{pet.petName}</StyledText>
        <Wrapper>
          <Button
            type="button"
            buttonText="Stop, I changed my mind"
            $variant="secondary"
            onClick={() => setModal(false)}
          />
          <Button
            type="button"
            buttonText="Yes, get rid of it"
            $variant="danger"
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
  left: -1rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;

  background: rgba(0, 0, 0, 0.85);
`;

const Container = styled.div`
  width: min(calc(100vw - 2rem), 600px);
  margin-inline: auto;
  padding: 1rem;
  border-radius: var(--border-radius);

  background: ${({ theme }) => theme.lightBackground};

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
