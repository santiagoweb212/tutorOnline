import { createBrowserRouter } from "react-router-dom";
/* import LayoutPublic from "@/layout/LayoutPublic"; */
import LayoutPublic from "@/layout/layoutPublic";
import RegistroUsuario from "@/pages/registerUser/registerUser";
import Login from "@/pages/Login/login";
import Home from "@/pages/Home/home";
import { Nosotros } from '@/pages/Nosotros/Nosotros'
import { Contact } from "@/pages/Contact/Contact";

const router = createBrowserRouter([{
    path: '/', element: <LayoutPublic />, children: [
        { index: true, element: <Home/> },
        { path: '/login', element: <Login/> },
        { path: '/registro', element: <RegistroUsuario/> },
        { path: "/nosotros", element: <Nosotros /> },
        { path: "/contacto", element: <Contact /> },
    ]
}]);
export default router