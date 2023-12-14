import { createBrowserRouter } from "react-router-dom";
/* import LayoutPublic from "@/layout/LayoutPublic"; */
import LayoutPublic from "@/layout/layoutPublic";
import RegistroUsuario from "@/pages/registerUser/registerUser";
import Home from "@/pages/Home/home";
import { Nosotros } from '@/pages/Nosotros/Nosotros'
import { Contact } from "@/pages/Contact/Contact";
import { Aprendizaje } from "@/pages/Mi_aprendizaje/aprendizaje";

const router = createBrowserRouter([{
    path: '/', element: <LayoutPublic />, children: [
        { index: true, element: <Home/> },
        { path: '/inicio-session', element: <div>login</div> },
        { path: '/registro', element: <RegistroUsuario/> },
        { path: "/nosotros", element: <Nosotros /> },
        { path: "/contacto", element: <Contact /> },
        { path: "/aprendizaje", element: <Aprendizaje /> },
    ]
}]);
export default router