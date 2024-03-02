import styled, { css } from "styled-components";

const StyledFormRow = styled.div`
    display: grid; 
    align-items: center;
    gap: 0.7rem;
    padding: 0.5rem 0;
    &:has(button) {
        grid-template-columns: 1fr 1fr;
    }
`;

const Label = styled.label`
    font-size: 0.9rem;
    font-weight: 500;
`;

const Error = styled.span`
    font-size: 0.8rem;
    color: red;
`;

function FormRow({ children, label, error = "" }) {
    return (
        <StyledFormRow>
            {label && <Label htmlFor={children.props.id}>{label}</Label>}
            {children}
            {error && <Error>{error}</Error>}
        </StyledFormRow>
    );
}

export default FormRow;
