import {SlimLayout} from "./components/SlimLayout.tsx";
import {Link, useNavigate} from "react-router-dom";
import {Logo} from "./components/Logo.tsx";
import {TextField} from "./components/Fields.tsx";
import {Button} from "./components/Button.tsx";
import {useState} from "react";
import {register} from "../app/services/authService.ts";

const Register = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        company_name: "",
        email: "",
        password: "",
        repeat_password: "",
    });

    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            // Call the register function
            const response = await register(formData);
            console.log("User registered:", response);
            navigate("/verify-email");
        } catch (err: any) {
            setError(err.response?.data?.message || "An error occurred");
        }
    };

    return (
        <>
            <SlimLayout>
                <div className="flex">
                    <Link to="/" aria-label="Home">
                        <Logo/>
                    </Link>
                </div>
                <h2 className="mt-16 text-lg font-semibold text-gray-900">
                    Get started for free
                </h2>
                <p className="mt-2 text-sm text-gray-700">
                    Already registered?{" "}
                    <Link
                        to="/login"
                        className="font-medium text-blue-600 hover:underline"
                    >
                        Sign in
                    </Link>{" "}
                    to your account.
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
                >
                    <TextField
                        label="First name"
                        name="first_name"
                        type="text"
                        autoComplete="given-name"
                        required
                        value={formData.first_name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Last name"
                        name="last_name"
                        type="text"
                        autoComplete="family-name"
                        required
                        value={formData.last_name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        className="col-span-full"
                        label="Company name"
                        name="company_name"
                        type="text"
                        autoComplete="company-name"
                        required
                        value={formData.company_name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        className="col-span-full"
                        label="Email address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <TextField
                        className="col-span-full"
                        label="Password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <TextField
                        className="col-span-full"
                        label="Repeat Password"
                        name="repeat_password"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={formData.repeat_password}
                        onChange={handleInputChange}
                    />
                    <div className="col-span-full">
                        <Button type="submit" variant="solid" color="blue" className="w-full">
                        <span>
                            Sign up <span aria-hidden="true">&rarr;</span>
                        </span>
                        </Button>
                    </div>
                </form>
                {error && (
                    <div className="mt-4 text-sm text-red-600">
                        {error}
                    </div>
                )}
                <div className="mt-6 w-full text-sm text-gray-600">
                    By entering your information above and clicking the button, you agree to our Terms of Use,
                    Privacy Policy, and that we may contact you, by SMS, at the phone number and email address you
                    provide in accordance with our Terms of Use.
                </div>
            </SlimLayout>
        </>
    )
}

export default Register;