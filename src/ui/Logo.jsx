import { styled } from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  font-family: mono;
  font-weight: 900;
  font-size: 28px;
  color: white;
`;

function Logo() {
  return <StyledLogo>AresSMS</StyledLogo>;
}

export default Logo;
