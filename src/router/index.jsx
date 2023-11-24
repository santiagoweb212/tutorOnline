import { createBrowserRouter } from "react-router-dom";
/* import LayoutPublic from "@/layout/LayoutPublic"; */
import LayoutPublic from "@/layout/layoutPublic";
import RegistroUsuario from "@/pages/registerUser/registerUser";
import Home from "@/pages/Home/home";
import { Nosotros } from '@/pages/Nosotros/Nosotros'
const router = createBrowserRouter([{
    path: '/', element: <LayoutPublic />, children: [
        { index: true, element: <Home/> },
        { path: '/inicio-session', element: <div>login</div> },
        { path: '/registro', element: <RegistroUsuario/> },
        { path: "/nosotros", element: <Nosotros /> },
    ]
}]);
export default router