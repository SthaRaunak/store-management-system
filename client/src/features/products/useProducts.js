import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/products.api";


function useProducts() {
    const {data: productsData, isLoading: isLoadingProducts , error} = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    }) 

    return {products: productsData?.products, productsCount : productsData?.productsCount, isLoadingProducts,error};
}

export {useProducts};