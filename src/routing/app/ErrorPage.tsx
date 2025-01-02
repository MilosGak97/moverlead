import {isRouteErrorResponse, useRouteError} from "react-router-dom";

const ErrorPage = () =>{

    const error = useRouteError()
    return (
        <>
        <h1> Ooops... </h1>
            <p>
                {isRouteErrorResponse(error) ? 'Error 404' : "Something went wrong" }
            </p>
        </>
    )
}

export default ErrorPage;