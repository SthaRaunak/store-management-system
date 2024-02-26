const fetchProducts = async () => {
    const response = await fetch(
        "http://localhost:8000/api/v0/products/getProducts"
    );
    const data = await response.json();
    
    return data.data;
};

const deleteProduct = async(id) => {
    if(!id){
        console.error("Please provided product ID");
    }
    const response = await fetch(`http://localhost:8000/api/v0/products/deleteProduct/${id}`,{
        method: 'DELETE'
    });
    const data = await response.json();

    return data;
}


export { fetchProducts, deleteProduct };
