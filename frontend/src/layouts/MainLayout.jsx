import { Outlet } from "react-router-dom";

import Navbar from "@/components/Navbar/navbar";
import SocialSidebar from "@/components/Navbar/SocialSidebar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <SocialSidebar />

      <main>
        <Outlet />
      </main>
    </>
  );
}