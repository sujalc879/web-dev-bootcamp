import { useNavigate } from "react-router";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export function Appbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  
  function LogOut() {
    localStorage.removeItem("token");
    navigate("/signin")
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold">higgsfield</h1>

        <div className="flex items-center gap-2">
          {token ? 
          <Button variant="outline" onClick={LogOut}>Log Out</Button> :
           <div>
              <Button variant="outline" onClick={() => navigate("/signup")}>Sign Up</Button>
              <Button variant="outline" onClick={() => navigate("/signin")}>Sign In</Button>
          </div>}
          
          
          
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}