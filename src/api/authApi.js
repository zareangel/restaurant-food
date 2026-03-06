

const API_URL = "http://localhost:8080/api/v1/auth/login"

export const loginRequest = async (email, password) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        

    })
    if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to login")
    }

}

// Login
const API_URL_USER = "http://localhost:8080/api/v1/auth";

export const loginUser = async (email, password) => {

    const response = await fetch(`${API_URL_USER}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    if (!response.ok) {
        throw new Error("Invalid credentials");
    }

    return await response.json();
};