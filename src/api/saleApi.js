export const saveSale = async (sale) => {
    const response = await fetch(`${BASE_URL}/api/v3/save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sale),
    });

    if (!response.ok) {
        throw new Error("Error saving sale");
    }
    return await response.json();
};

export const getSaleList = async () => {
    const response = await fetch(`${BASE_URL}/api/v3/all`);
    if (!response.ok) {
        throw new Error("Failed to fetch sale list");
    }
    return await response.json();
};