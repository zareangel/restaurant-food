

const API_URL_CATEGORIES = "http://localhost:8080/api/categories"

export const getCategories = async () => {
    const response = await fetch(API_URL_CATEGORIES)
    if (!response.ok) {
        throw new Error("Failed to fetch categories")
    }
    return await response.json()
}