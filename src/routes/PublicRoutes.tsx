import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Register } from "../pages/Register";

const PublicRoutes = () => {

    const router = createBrowserRouter([
        { path: '/register', element: <Register /> },
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default PublicRoutes;
