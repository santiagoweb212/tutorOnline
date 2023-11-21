import { createBrowserRouter } from "react-router-dom";
/* import LayoutPublic from "@/layout/LayoutPublic"; */
import LayoutPublic from "@/layout/layoutPublic";
import RegistroUsuario from "@/pages/registerUser/registerUser";
const router = createBrowserRouter([{
    path: '/', element: <LayoutPublic />, children: [
        { index: true, element: <div>home</div> },
        { path: '/inicio-session', element: <div>login</div> },
        { path: '/registro', element: <RegistroUsuario/>},
        { path: "/nosotros", element: <div>nosotros</div> },        
    ]
}]);
export default router