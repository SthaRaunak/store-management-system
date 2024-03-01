import styled, { css } from "styled-components";

const StyledForm = styled.form`
    padding: 1rem 1rem;
    border-radius: 10px;
    overflow: hidden;
    font-size: 1.1rem;
`;

const Title = styled.h4`
    font-size: 1rem;
    font-weight: 500;
`;

const Subtitle = styled.p`
    font-size: 0.850rem;
    font-weight: 400;
    color: grey;
    margin-bottom: 10px;
`

Form.defaultProps = {
    type: "normal",
};


function Form({ children, title, subtitle }) {
    return (
        <StyledForm>
            {title && <Title>{title}</Title>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {children}
        </StyledForm>
    );
}

export default Form;
