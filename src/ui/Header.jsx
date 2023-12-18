import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-testLighter);
  padding: 1rem 5rem;
  border-bottom: 1px solid black;
  color: white;
`;
function Header() {
  return <StyledHeader> Header</StyledHeader>;
}

export default Header;
