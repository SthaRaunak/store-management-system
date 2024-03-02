import { useProducts } from "./useProducts.js";
import Table from "../../ui/Table.jsx";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
} from "@tanstack/react-table";
import { formatCreatedAt } from "../../utils/formatDate.js";
import { useDeleteProduct } from "./useDeleteProduct.js";
import { formatCurrency } from "../../utils/formatCurrency.js";

function ProductTable() {
    const { products = [], isLoadingProducts } = useProducts();
    const { isDeletingProduct, deleteProduct } = useDeleteProduct();
    /*
       {
                "_id": "65d60619ddb76b915f1b3ee6",
                "productName": "asdasdasd",
                "productImage": "/Users/raunak/Desktop/Dev/store-management-system/server/public/temp/productImage-1708525081913-589259009.jpg",
                "productSummary": "asdasdasd",
                "productPrice": 1000,
                "productDiscount": 2,
                "productQuantity": 6,
                "productCategory": [],
                "createdAt": "2024-02-21T14:18:01.928Z",
                "updatedAt": "2024-02-21T14:18:01.928Z",
                "__v": 0
            }
    */

    /** @type import('@tanstack/react-table').ColumnDef<any> */
    const columns = [
        {
            header: "Image",
            cell: (tableProps) => (
                <img
                    src={tableProps.row.original.productImage}
                    width={100}
                    height={40}
                    style={{ objectFit: "cover" }}
                />
            ),
        },
        {
            header: "Name",
            accessorKey: "productName",
        },
        {
            header: "Price",
            accessorFn: (row) =>
                formatCurrency(row.productPrice - row.productDiscount),
        },
        {
            header: "Quantity",
            accessorKey: "productQuantity",
        },
        {
            header: "Created At",
            accessorFn: (row) => formatCreatedAt(row.createdAt),
        },
        {
            header: "Actions",
            cell: (tableProps) => (
                <h4
                    onClick={() => deleteProduct(tableProps.row.original._id)}
                    style={{ cursor: "pointer" }}
                >
                    X
                </h4>
            ),
        },
    ];

    const table = useReactTable({
        data: products,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    if (isLoadingProducts) return <h2>Loading...</h2>;
    return (
        <Table>
            <Table.Head>
                {table.getHeaderGroups().map((headerGroup) => (
                    <Table.Row key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <Table.Header key={header.id}>
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext
                                )}
                            </Table.Header>
                        ))}
                    </Table.Row>
                ))}
            </Table.Head>

            <Table.Body>
                {table.getRowModel().rows.map((row) => (
                    <Table.Row key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <Table.Data key={cell.id}>
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )}
                            </Table.Data>
                        ))}
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
}

export default ProductTable;
