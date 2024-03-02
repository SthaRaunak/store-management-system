import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct as addProductApi } from "../../api/products.api.js";

const useAddProduct = () => {
    const queryClient = useQueryClient();

    const {
        mutate: addProduct,
        data: productData,
        isPending: isAddingProduct,
        error,
    } = useMutation({
        mutationFn: (productData) => addProductApi(productData),
        onSuccess: () => {
            console.log("Succesfully added Product");
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
        onError: () => {
            console.error("Error adding Products");
        },
    });

    return { addProduct, productData, isAddingProduct, error };
};

export { useAddProduct };
