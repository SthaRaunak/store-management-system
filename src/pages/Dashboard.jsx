import { styled } from "styled-components";

const StyledHeader = styled.h2`
  color: red;
`;
function Dashboard() {
  return (
    <div>
      <StyledHeader>Styled component test</StyledHeader>
    </div>
  );
}

export default Dashboard;
