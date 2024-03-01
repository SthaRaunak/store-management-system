//LIB
import styled, { css } from "styled-components";

//UI
import Button from "../../ui/Button.jsx";
import Form from "../../ui/Form.jsx";
import FormRow from "../../ui/FormRow.jsx";
import Input from "../../ui/Input.jsx";
import Row from "../../ui/Row.jsx";
import Textarea from "../../ui/Textarea.jsx";

function CreateProductForm({ onCloseModal }) {
    return (
        <Form title="Create New Product" subtitle="Enter Product Information">
            <Row type="horizontal">
                <FormRow label="Name*">
                    <Input type="text" />
                </FormRow>
                <FormRow label="Quantity*">
                    <Input type="number" />
                </FormRow>
            </Row>
            <Row type="horizontal">
                <FormRow label="Price*">
                    <Input type="text" />
                </FormRow>
                <FormRow label="Discount">
                    <Input type="number" />
                </FormRow>
            </Row>
            <FormRow label="Summary*">
                <Textarea />
            </FormRow>
            <FormRow label="Description*">
                <Textarea />
            </FormRow>

            <FormRow label="Image">
                <Input type="file" />
            </FormRow>
            <FormRow>
                <Button type="danger" onClick={onCloseModal}>
                    Cancel
                </Button>
                <Button type="primary">Submit</Button>
            </FormRow>
        </Form>
    );
}

export default CreateProductForm;
