import Heading from "../ui/Heading";
import Row from "../ui/Row";
import ProductTable from "../features/products/ProductTable";
import AddProduct from "../features/products/AddProduct";

function Products() {
    return (
        <Row>
            <Row type="horizontal">
                <Heading as="h3">Products</Heading>
                <AddProduct/>
            </Row>

            <Row>
                <ProductTable />
            </Row>
        </Row>
    );
}

export default Products;
