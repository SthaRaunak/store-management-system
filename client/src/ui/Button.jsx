import styled, { css } from "styled-components";

const types = {
  primary: css`
    background-color: var(--color-brand);
    color: var(--color-test);
    &:hover {
      background-color: var(--color-brand-darker);
    }
  `,
  danger: css`
    background-color: var(--color-danger);
    color: #f4f4f4;

    &:hover {
      background-color: #4b0c0a;
    }
  `,
};

const sizes = {
  small: css`
    font-size: 11px;
    padding: 0.5rem 1rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
  `,
  medium: css`
    font-size: 0.95rem;
    padding: 0.5rem 2.2rem;
    font-weight: 500;
  `,
};

const Button = styled.button`
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s all;
  box-shadow: 2px 2px 10px #0000002a;
  ${(props) => sizes[props.size]};
  ${(props) => types[props.variation]};
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
