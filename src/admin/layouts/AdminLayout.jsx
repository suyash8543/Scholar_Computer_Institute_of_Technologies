import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

export default function AdminLayout(){

    return(

        <>

        <AdminSidebar/>

        <div className="admin-content">

            <AdminNavbar/>

            <Outlet/>

        </div>

        </>

    )

}