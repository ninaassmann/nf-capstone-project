import Thumbnail from "./Breeds/Thumbnail";
import StyledLink from "./ListLink.styled";

export default function ListItemWithImg({ breed }) {
  return (
    <li>
      <StyledLink href={`/breeds/${breed.slug}`} $variant="breed">
        <Thumbnail breed={breed} />
        <h3>{breed.name}</h3>
      </StyledLink>
    </li>
  );
}
