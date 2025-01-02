import {SlimLayout} from "./components/SlimLayout.tsx";
import {Link} from "react-router-dom";
import {Logo} from "./components/Logo.tsx";
import {SelectField, TextField} from "./components/Fields.tsx";
import {Button} from "./components/Button.tsx";

const Register = () => {
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
                    Already registered?{' '}
                    <Link
                        to="/login"
                        className="font-medium text-blue-600 hover:underline"
                    >
                        Sign in
                    </Link>{' '}
                    to your account.
                </p>
                <form
                    action="#"
                    className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
                >
                    <TextField
                        label="First name"
                        name="first_name"
                        type="text"
                        autoComplete="given-name"
                        required
                    />
                    <TextField
                        label="Last name"
                        name="last_name"
                        type="text"
                        autoComplete="family-name"
                        required
                    />
                    <TextField
                        className="col-span-full"
                        label="Company name"
                        name="company"
                        type="text"
                        autoComplete="company-name"
                        required
                    />
                    <TextField
                        className="col-span-full"
                        label="Email address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                    />
                    <TextField
                        className="col-span-full"
                        label="Password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                    />
                    <SelectField
                        className="col-span-full"
                        label="How did you hear about us?"
                        name="referral_source"
                    >
                        <option>AltaVista search</option>
                        <option>Super Bowl commercial</option>
                        <option>Our route 34 city bus ad</option>
                        <option>The “Never Use This” podcast</option>
                    </SelectField>

                    <div className="col-span-full">
                        <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Sign up <span aria-hidden="true">&rarr;</span>
            </span>
                        </Button>
                    </div>

                </form>
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