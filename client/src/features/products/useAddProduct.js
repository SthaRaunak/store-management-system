import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct as addProductApi } from "../../api/products.api.js";
import { toast } from "react-toastify";

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
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });

            toast.success("Product added successfully");
        },
        onError: (error) => {
            toast.error("Product failed to add.")
            console.error(error.message);
        },
    });

    return { addProduct, productData, isAddingProduct, error };
};

export { useAddProduct };
