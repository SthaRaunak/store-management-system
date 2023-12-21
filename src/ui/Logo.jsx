import { styled } from "styled-components";

const StyledLogo = styled.div`
  font-weight: 600;
  font-size: 26px;
  color: white;
  padding: 10px 1.7rem;
  margin-bottom: 3rem;
`;

function Logo() {
  return <StyledLogo>AresSM</StyledLogo>;
}

export default Logo;
