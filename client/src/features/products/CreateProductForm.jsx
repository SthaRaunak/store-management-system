//LIB
import { useForm } from "react-hook-form";

//HOOKS
import { useAddProduct } from "./useAddProduct.js";

//UI
import Button from "../../ui/Button.jsx";
import Form from "../../ui/Form.jsx";
import FormRow from "../../ui/FormRow.jsx";
import Input from "../../ui/Input.jsx";
import Row from "../../ui/Row.jsx";
import Textarea from "../../ui/Textarea.jsx";

function CreateProductForm({ onCloseModal }) {
    const { register, handleSubmit, formState, reset, getValues } = useForm();

    const { errors } = formState; //errors object errors[fieldName].message

    const { addProduct, isAddingProduct } = useAddProduct();

    const onSubmitForm = (data) => {
        if (!data) {
            return null;
        }

        const formData = new FormData();

        for (const key in data) {
            if (key === "productImage") {
                formData.append(key, data[key][0]);
            } else {
                formData.append(key, data[key]);
            }
        }

        addProduct(formData, {
            onSuccess: (data) => {
                reset();
                onCloseModal();
                console.log(data);
            },
        });
    };

    return (
        <Form
            title="Create New Product"
            subtitle="Enter Product Information"
            onSubmit={handleSubmit(onSubmitForm)}
        >
            <Row type="horizontal">
                <FormRow label="Name*" error={errors?.productName?.message}>
                    <Input
                        type="text"
                        {...register("productName", {
                            required: "Name is Required!",
                        })}
                        disabled={isAddingProduct}
                    />
                </FormRow>
                <FormRow
                    label="Quantity*"
                    error={errors?.productQuantity?.message}
                >
                    <Input
                        type="number"
                        {...register("productQuantity", {
                            required: "Quantity is Required!",
                        })}
                        disabled={isAddingProduct}
                    />
                </FormRow>
            </Row>

            <Row type="horizontal">
                <FormRow label="Price*" error={errors?.productPrice?.message}>
                    <Input
                        type="number"
                        {...register("productPrice", {
                            required: "Price is required!",
                        })}
                        disabled={isAddingProduct}
                    />
                </FormRow>
                <FormRow
                    label="Discount*"
                    error={errors?.productDiscount?.message}
                >
                    <Input
                        type="number"
                        {...register("productDiscount", {
                            validate: (value) => {
                                if (
                                    Number(value) >=
                                    Number(getValues().productPrice)
                                ) {
                                    return "Discount should be less";
                                }
                            },
                        })}
                        defaultValue={0}
                        disabled={isAddingProduct}
                    />
                </FormRow>
            </Row>

            <FormRow label="Summary*" error={errors?.productSummary?.message}>
                <Textarea
                    {...register("productSummary", {
                        required: "Summary is required!",
                        maxLength: {
                            value: 200,
                            message: "Should be less than 200 characters"
                        }
                    })}
                    disabled={isAddingProduct}
                />
            </FormRow>
            <FormRow
                label="Description*"
                error={errors?.productDescription?.message}
            >
                <Textarea
                    {...register("productDescription", {
                        required: "Description is Required!",
                        maxLength: {
                            value: 300,
                            message: "Should be less than 300 characters"
                        }
                    })}
                    disabled={isAddingProduct}
                />
            </FormRow>

            <FormRow label="Image" error={errors?.productImage?.message}>
                <Input
                    type="file"
                    accept="image/*"
                    {...register("productImage", {
                        required: "Image is required!",
                    })}
                    disabled={isAddingProduct}
                />
            </FormRow>
            <FormRow>
                <Button variation="danger" type="reset" onClick={onCloseModal}>
                    Cancel
                </Button>
                <Button variation="primary" disabled={isAddingProduct}>
                    {isAddingProduct ? "Adding ..." : "Add Product"}
                </Button>
            </FormRow>
        </Form>
    );
}

export default CreateProductForm;
