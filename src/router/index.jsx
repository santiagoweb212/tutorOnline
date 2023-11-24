import { createBrowserRouter } from "react-router-dom";
/* import LayoutPublic from "@/layout/LayoutPublic"; */
import LayoutPublic from "@/layout/layoutPublic";
import { Nosotros } from '@/pages/Nosotros'
const router = createBrowserRouter([{
    path: '/', element: <LayoutPublic />, children: [
        { index: true, element: <div>home</div> },
        { path: '/inicio-session', element: <div>login</div> },
        { path: '/registro', element: <div>register</div> },
        { path: "/nosotros", element: <Nosotros /> },
    ]
}]);
export default router