
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";
export const getCategories = async () => {
    const response = await fetch(`${BASE_URL}/api/categories`);
    if (!response.ok) {
        throw new Error("Failed to fetch categories");
    }
    return await response.json();
};