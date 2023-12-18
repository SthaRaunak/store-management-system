import styled from "styled-components";
import Logo from "./Logo.jsx";
import Navigation from "./Navigation.jsx";
const StyledSidebar = styled.aside`
  background-color: var(--color-test);
  grid-row: 1/-1;
  padding: 1.2rem 0.9rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <Navigation />
    </StyledSidebar>
  );
}

export default Sidebar;
