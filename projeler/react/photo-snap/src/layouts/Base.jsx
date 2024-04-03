import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../components/Footer";

export default function Base() {
    return (
        <div className="container">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}