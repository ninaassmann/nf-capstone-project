import Fieldset from "./Fieldset.styled";
import Input from "./Input.styled";
import Wrapper from "./Wrapper.styled";

export default function VetFieldset({ pet }) {
  return (
    <Fieldset $isHighlight>
      <legend>Vet Information</legend>
      <Wrapper>
        <label htmlFor="vetName">Name</label>
        <Input
          type="text"
          id="vetName"
          name="vetName"
          placeholder="Enter the name of your vet"
          defaultValue={pet && pet.vet.name}
        />
      </Wrapper>

      <Wrapper>
        <label htmlFor="vetName">Addess</label>
        <Input
          type="text"
          id="vetAddress"
          name="vetAddress"
          placeholder="Enter the address of your vet"
          defaultValue={pet && pet.vet.address}
        />
      </Wrapper>

      <Wrapper>
        <label htmlFor="vetName">Phone</label>
        <Input
          type="tel"
          id="vetPhone"
          name="vetPhone"
          placeholder="Enter the phone number of your vet"
          defaultValue={pet && pet.vet.phone}
        />
      </Wrapper>
    </Fieldset>
  );
}
