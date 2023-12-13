import styled from "styled-components";
import Logo from "./Logo.jsx";

const StyledSidebar = styled.aside`
  background-color: var(--color-test);
  grid-row: 1/-1;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
    </StyledSidebar>
  );
}

export default Sidebar;
