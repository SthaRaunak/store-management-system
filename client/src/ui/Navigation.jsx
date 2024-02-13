import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  MdOutlineDashboard,
  MdOutlineShoppingCartCheckout,
} from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";

const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style-type: none;
`;

const StyledNavItem = styled(NavLink)`
  color: white;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  align-items: start;
  gap: 0.5rem;
  padding: 0.8rem 1rem;
  transition: all 0.3s;

  //react router gives active class
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-test);
    background-color: var(--color-brand);
    border-radius: 8px;
  }
  &::after {
    border: 2px solid black;
  }
  & svg {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

const NavHeader = styled.h5`
  font-size: 13px;
  color: gray;
  padding: 0.5rem 1rem;
  font-weight: 600;
`;

function Navigation() {
  return (
    <nav>
      <NavHeader>MENU</NavHeader>
      <NavigationList>
        <li>
          <StyledNavItem to="/dashboard">
            <MdOutlineDashboard /> <span>Dashboard</span>
          </StyledNavItem>
        </li>

        <li>
          <StyledNavItem to="/orders">
            <MdOutlineShoppingCartCheckout />
            <span>Order</span>
          </StyledNavItem>
        </li>

        <li>
          <StyledNavItem to="/products">
            <BsBoxSeam />
            <span>Products</span>
          </StyledNavItem>
        </li>

        <li>
          <StyledNavItem to="/users">
            <FiUsers /> <span>Store Users</span>
          </StyledNavItem>
        </li>
      </NavigationList>
    </nav>
  );
}

export default Navigation;
