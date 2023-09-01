import Fieldset from "./Fieldset.styled";
import Input from "./Input.styled";
import Wrapper from "./Wrapper.styled";

export default function VetFieldset({ pet, newPet, vet, setVet }) {
  function handleChange(event, key) {
    const fieldName = key;
    const fieldValue = event.target.value;

    const updateVet = {
      ...vet,
    };
    updateVet[fieldName] = fieldValue;
    setVet(updateVet);
  }

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
          defaultValue={pet?.vet?.name || newPet?.vet?.name}
          onChange={(event) => handleChange(event, "name")}
        />
      </Wrapper>

      <Wrapper>
        <label htmlFor="vetName">Addess</label>
        <Input
          type="text"
          id="vetAddress"
          name="vetAddress"
          placeholder="Enter the address of your vet"
          defaultValue={pet?.vet?.address || newPet?.vet?.address}
          onChange={(event) => handleChange(event, "address")}
        />
      </Wrapper>

      <Wrapper>
        <label htmlFor="vetPhone">Phone</label>
        <Input
          type="tel"
          id="vetPhone"
          name="vetPhone"
          placeholder="Enter the phone number of your vet"
          defaultValue={pet?.vet?.phone || newPet?.vet?.phone}
          onChange={(event) => handleChange(event, "phone")}
        />
      </Wrapper>
    </Fieldset>
  );
}
