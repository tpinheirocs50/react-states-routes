// this import is for us to be able to load children pages inside this Layout page, right where <Outlet/> component is
import { Outlet } from "react-router-dom";

// import components used in the page
import Navigation from "../components/Navigation";

export default function RootLayout() {
    return (
        <>
            <h1>Header</h1>
            {/* this is a component we created */}
            <Navigation />
            {/* this is the react component that transforms into our child content */}
            <Outlet />
            <h1>Footer</h1>
        </>
    );
}