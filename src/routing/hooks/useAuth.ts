import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface User {
    email: string;
    id: string;
}

const useAuth = () => {
    const [user, setUser] = useState<User | null>(null); // Holds user data
    const [isLoading, setIsLoading] = useState(true); // Tracks loading state
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get("http://localhost:3002/api/auth/who-am-i", {
                    withCredentials: true,
                });
                setUser({
                    email: response.data.email,
                    id: response.data.sub,
                });
            } catch (error: any) {
                console.error("Error fetching user:", error);

                if (error.response?.status === 401) {
                    console.log("Unauthorized12345, redirecting to login...");
                    navigate("/login");
                }
            } finally {
                setIsLoading(false); // Ensure loading state is updated
            }
        };

        fetchUser();
    }, [navigate]);

    return { user, isLoading };
};

export default useAuth;
