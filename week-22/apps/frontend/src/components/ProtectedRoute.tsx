import { Navigate, Outlet } from 'react-router'

export function ProtectedRoute() {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to={"/signin"} replace />
    }

    return <Outlet />
}