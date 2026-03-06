const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

export const loginRequest = async (email, password) => {
    const response = await fetch(`${BASE_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to login");
    }
    return await response.json();
};

export const loginUser = async (email, password) => {
    const response = await fetch(`${BASE_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
        throw new Error("Invalid credentials");
    }
    return await response.json();
};