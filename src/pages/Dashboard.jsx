import { styled } from "styled-components";

const StyledHeader = styled.h2`
  color: yellow;
`;
function Dashboard() {
  return (
    <div>
      <StyledHeader>Dashboard component</StyledHeader>
    </div>
  );
}

export default Dashboard;
