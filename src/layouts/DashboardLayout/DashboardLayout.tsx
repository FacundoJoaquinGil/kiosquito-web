import { Outlet } from "react-router-dom";
// import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function DashboardLayout() {
  return (
    <>
      {/* <Header /> */}
      <div className="flex">
        <Sidebar />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </>
  );
}