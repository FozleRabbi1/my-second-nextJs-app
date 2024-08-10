"use client"

const ErrorPage = ({ error, reset }) => {
    return (
        <div>
            <h2 className="text-center text-2xl text-red-500">Somthing went wrong</h2>
            <h2 className="text-center text-xl text-red-500">{error.message}</h2>
            <div className="flex justify-center">
                <button className="btn" onClick={() => { reset() }}>Try Again</button>
            </div>
        </div>
    );
};

export default ErrorPage;