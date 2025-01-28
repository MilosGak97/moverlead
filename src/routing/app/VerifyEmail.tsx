import {useState} from "react";
import {verifyEmail} from "./services/authService.ts";
import {useNavigate} from "react-router-dom";

const VerifyEmail = () => {
    const [pin, setPin] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const [toast, setToast] = useState<string | null>(null);
    const [toastGood, setToastGood] = useState<string | null>(null);

    const navigate = useNavigate();
    const handleVerify = async () => {
        try {
            setError(null);
            setSuccess(null);
            const response = await verifyEmail(pin);
            setToastGood(response.message)
            setSuccess(response.message); // e.g., "Email is verified."

            navigate("/dashboard");
        } catch (error: any) {
            setError(error.response?.data?.message || "Verification failed");

            setToast("Invalid passcode. Please try again.");
            // Clear red borders and toast after 5 seconds
            setTimeout(() => {
                setToast(null);
            }, 5000);
        }
    };

    return (
        <div className="space-y-12 mt-8 px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 pb-12 md:grid-cols-3">
                <div>
                    <h2 className="text-base/7 font-semibold text-gray-900">Verify Email</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">
                        We have sent you an email with a 6-Digit Pin Code. Please enter it here to verify your email
                        account.
                    </p>
                </div>

                <div className="flex max-w-2xl flex-col">
                    <div className="sm:col-span-4">
                        <label htmlFor="pincode" className="block text-sm/6 font-medium text-gray-900">
                            6-Digit Pin Code
                        </label>
                        <div className="mt-2">
                            <input
                                id="pincode"
                                name="pincode"
                                type="text"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                placeholder="Enter Here"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#4379F2] sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleVerify}
                        className="mt-4 rounded-md bg-[#4379F2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4379F2]"
                    >
                        Verify Email
                    </button>

                    {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                    {success && <p className="mt-2 text-sm text-green-600">{success}</p>}
                </div>
            </div>

            {/* Toast Notification */}
            {toast && (
                <div
                    className="fixed bottom-4 right-4 bg-red-600 text-white text-sm font-medium px-4 py-2 rounded shadow-lg animate-slide-in">
                    {toast}
                </div>
            )}

            {/* Toast Notification */}
            {toastGood && (
                <div
                    className="fixed bottom-4 right-4 bg-green-700 text-white text-sm font-medium px-4 py-2 rounded shadow-lg animate-slide-in">
                    {toastGood}
                </div>
            )}
        </div>
    );
};

export default VerifyEmail;
