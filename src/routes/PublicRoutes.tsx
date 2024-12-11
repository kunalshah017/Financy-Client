import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { Register } from "../pages/Register";

const PublicRoutes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navigate to="/register" replace />
        },
        {
            path: "/register",
            element: <Register />
        }
    ]);

    return <RouterProvider router={router} />;
};

export default PublicRoutes;
