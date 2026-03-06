

export const getCategories = async () => {
    const response = await fetch(`${BASE_URL}/api/categories`);
    if (!response.ok) {
        throw new Error("Failed to fetch categories");
    }
    return await response.json();
};