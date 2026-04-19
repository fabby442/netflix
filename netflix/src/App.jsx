import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./home";
import User from "./user";
import UserDetails from "./userDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="user/:id" element={<UserDetails />} />
      </Route>
    </Routes>
  );
}