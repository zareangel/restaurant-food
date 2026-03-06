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