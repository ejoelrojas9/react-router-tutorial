import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UserPage from './pages/UserPage'
import NotFoundPage from "./pages/NotFoundPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/users" element={<UserPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}
