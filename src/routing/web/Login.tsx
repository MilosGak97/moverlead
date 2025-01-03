import {SlimLayout} from "./components/SlimLayout.tsx";
import {Link} from "react-router-dom";
import {Logo} from "./components/Logo.tsx";
import {TextField} from "./components/Fields.tsx";
import {Button} from "./components/Button.tsx";

const Login = () => {
    return (
        <>

            <SlimLayout>
                <div className="flex">
                    <Link to="/" aria-label="Home">
                        <Logo />
                    </Link>
                </div>
                <h2 className="mt-16 text-lg font-semibold text-gray-900">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-sm text-gray-700">
                    Don’t have an account?{' '}
                    <Link
                        to="/register"
                        className="font-medium text-blue-600 hover:underline"
                    >
                        Sign up
                    </Link>{' '}
                    for a free trial.
                </p>
                <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
                    <TextField
                        label="Email address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                    />
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                    />
                    <div>
                        <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Sign in <span aria-hidden="true">&rarr;</span>
            </span>
                        </Button>
                    </div>
                </form>
            </SlimLayout>
        </>
    )
}

export default Login;