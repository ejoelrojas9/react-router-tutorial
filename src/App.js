import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage'
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <BrowserRouter>

      <Navbar/>
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/users" element={<UsersPage/>}/>
        <Route path="/users/:id" element={<UserPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}
