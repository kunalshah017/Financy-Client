import { Route, Routes } from "react-router-dom";
import { Register } from "../pages/Register";
import { Suspense } from "react";

const PublicRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Register />} />
                <Route path="*" element={<div className="w-full min-h-screen flex justify-center items-center text-xl font-bold">404 - Not Found</div>} />
            </Routes>
        </Suspense>
    );
};

export default PublicRoutes;
