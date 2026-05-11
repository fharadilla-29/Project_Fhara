import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div id="app-container" className="bg-white min-h-screen flex flex-col">
      <div id="main-content" className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
