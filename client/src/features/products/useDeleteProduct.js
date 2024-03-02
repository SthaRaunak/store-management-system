import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct as deleteProductApi } from "../../api/products.api";
import { toast } from "react-toastify";

function useDeleteProduct() {
    const queryClient = useQueryClient();
    const { mutate: deleteProduct, isPending: isDeletingProduct } = useMutation(
        {
            mutationFn: (id) => deleteProductApi(id),

            onSuccess: (data) => {
                queryClient.invalidateQueries({
                    queryKey: ["products"],
                });

                toast.success(`${data?.data?.productName} deleted successfully`);
            },
            onError: (error) => {
                console.error(error.message);
                toast.error("Product failed to delete");
            },
        }
    );

    return { isDeletingProduct, deleteProduct };
}

export { useDeleteProduct };
