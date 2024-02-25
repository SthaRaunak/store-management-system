import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct as deleteProductApi } from "../../api/products.api";

function useDeleteProduct() {
    const queryclient = useQueryClient();
    const { mutate: deleteProduct, isPending: isDeletingProduct } = useMutation(
        {
            mutationFn: (id) => deleteProductApi(id),

            onSuccess: () => {
                queryclient.invalidateQueries({
                    queryKey: ["products"],
                });
            },
            onError: (error) => {
                console.error(error.message);
            },
        }
    );

    return { isDeletingProduct, deleteProduct };
}

export { useDeleteProduct };
