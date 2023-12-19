import { createBrowserRouter } from "react-router-dom";
/* import LayoutPublic from "@/layout/LayoutPublic"; */
import LayoutPublic from "@/layout/layoutPublic";
import RegistroUsuario from "@/pages/registerUser/registerUser";
import Login from "@/pages/Login/login";
import Home from "@/pages/Home/home";
import { Nosotros } from '@/pages/Nosotros/Nosotros'
import { Contact } from "@/pages/Contact/Contact";
import { Aprendizaje } from "@/pages/Mi_aprendizaje/aprendizaje";

const router = createBrowserRouter([{
    path: '/', element: <LayoutPublic />, children: [
        { index: true, element: <Home/> },
        { path: '/iniciar-session', element: <Login/> },
        { path: '/crear-cuenta', element: <RegistroUsuario/> },
        { path: "/nosotros", element: <Nosotros /> },
        { path: "/contacto", element: <Contact /> },
        { path: "/mi-aprendizaje", element: <Aprendizaje /> },
    ]
}]);
export default router