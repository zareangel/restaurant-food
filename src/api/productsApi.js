
const API_URL = "http://localhost:8080/api/v2/products"

export const getProducts = async () => {
    const response = await fetch(API_URL)
    if (!response.ok) {
        throw new Error("Failed to fetch products")
    }
    return await response.json()
}
