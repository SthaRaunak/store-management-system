import { styled } from "styled-components";
import Button from "../ui/Button.jsx";
const StyledHeader = styled.h2`
  color: black;
`;
function Dashboard() {
  return (
    <div>
      <StyledHeader>Dashboard component</StyledHeader>
      <Button type="primary" size="medium">
        Create new order
      </Button>
    </div>
  );
}

export default Dashboard;
