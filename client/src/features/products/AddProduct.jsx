import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateProductForm from "./CreateProductForm";

function AddProduct() {
    return (
        <>
        <Modal>
            <Modal.Open>
                <Button type="primary" size="small">Add Product</Button>
            </Modal.Open>

            <Modal.Window>
                <CreateProductForm/>
            </Modal.Window>
        </Modal>
        </>
    );
}

export default AddProduct;
