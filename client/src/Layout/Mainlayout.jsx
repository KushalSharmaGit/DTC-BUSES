import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function MainLayout(){
    return(
        <>
            <Outlet />
        </>
    )
}
export default MainLayout;