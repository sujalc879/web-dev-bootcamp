import { Outlet } from "react-router";
import { Appbar } from "./Appbar";
import { Footer } from "./Footer";

export function MainLayout() {
    return (
    <div className="min-h-screen flex flex-col">
      <Appbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}