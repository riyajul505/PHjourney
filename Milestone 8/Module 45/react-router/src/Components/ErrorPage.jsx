import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="flex items-center justify-center">
            {/* <h1 className="text-4xl mt-[200px]">OOppss!!</h1> */}
            {/* <p>{ error.statusText || error.data }</p> */}
            <div>
                {
                    error.status === 404? <h1 className="text-4xl mt-[200px]">Page Not found. {error.status}</h1> : null
                }
            </div>
            <Link to='/users'><button className="btn btn-primary">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;