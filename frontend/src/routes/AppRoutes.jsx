import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";


import MainLayout from "@/layouts/MainLayout";

const Home = lazy(() => import("@/pages/Home/Home"));
const About = lazy(() => import("@/pages/About/About"));
const Contact = lazy(() => import("@/pages/Contact/ContactUs"));
const Events = lazy(() => import("@/pages/Events/Events"));
const EventDetails = lazy(() => import("@/pages/Events/sub/event"));
const News = lazy(() => import("@/pages/News/News"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/event-details" element={<EventDetails />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </Suspense>
  );
}