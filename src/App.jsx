import RegisterUser from './pages/registerUser/registerUser'
import { Nosotros } from "./pages/Nosotros"



function App() {

  return (
    <>      
      <RegisterUser/>
      <nav className="bg-orange-500 p-5">Nav</nav>
      <Nosotros />
      <footer className="bg-yellow-500 h-96">footer</footer>
    </>
  )
}

export default App
