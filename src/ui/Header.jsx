import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: brown;
  padding: 1rem 5rem;
  border-bottom: 1px solid black;
`;
function Header() {
  return <StyledHeader>Store Management Header</StyledHeader>;
}

export default Header;
