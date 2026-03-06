
export const getProducts = async () => {
    const response = await fetch(`${BASE_URL}/api/v2/products`);
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return await response.json();
};
