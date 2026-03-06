export const saveSale = async (sale) => {
  const response = await fetch("http://localhost:8080/api/v3/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sale),
  });

  if (!response.ok) {
    throw new Error("Error saving sale");
  }

  return await response.json();
};
const API_URL_SALE_LIST = "http://localhost:8080/api/v3/all"

export const getSaleList = async () => {
    const response = await fetch(API_URL_SALE_LIST)
    if (!response.ok) {
        console.log(response)
        throw new Error("Failed to fetch products")
    }
    return await response.json()
}