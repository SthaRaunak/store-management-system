const fetchProducts = async () => {
    const response = await fetch(
        "http://localhost:8000/api/v0/products/getProducts"
    );
    const data = await response.json();
    
    return data.data;
};

export { fetchProducts };
