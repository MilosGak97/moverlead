import axios from "axios";

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(
            "https://api.moverlead.com/api/auth",
            {email, password},
            {withCredentials: true} // Ensures cookies are sent and received
        );
        console.log(response.data.message); // e.g., "Login successful"
        return response.data;
    } catch (error: any) {
        console.error(error.response?.data?.message || "Login failed");
        throw error; // Re-throw the error so the calling function can handle it
    }
};

// Logout function
export const logout = async () => {
    try {
        await axios.delete("https://api.moverlead.com/api/auth/logout", {
            withCredentials: true, // Ensures cookies are sent
        });
        console.log("Logout successful");
        // Redirect to login page or clear local state
        window.location.href = "/login";
    } catch (error: any) {
        console.error(error.response?.data?.message || "Logout failed");
        alert("Failed to logout.");
    }
};


// Register function
export const register = async (userData: {
    first_name: string;
    last_name: string;
    company_name: string;
    email: string;
    password: string;
    repeat_password: string;
}) => {
    try {
        const response = await axios.post(
            "https://api.moverlead.com/api/auth/register",
            userData,
            { withCredentials: true }
        );
        console.log("Registration successful:", response.data);
        return response.data;
    } catch (error: any) {
        console.error(error.response?.data?.message || "Registration failed");
        throw error;
    }
};


// Verify email function
export const verifyEmail = async (pin: string) => {
    try {
        const response = await axios.post(
            "https://api.moverlead.com/api/auth/verify-email",
            { pin },
            { withCredentials: true } // Ensures cookies are sent and received
        );
        console.log(response.data.message); // e.g., "Email is verified."
        return response.data;
    } catch (error: any) {
        console.error(error.response?.data?.message || "Verification failed");
        throw error;
    }
};