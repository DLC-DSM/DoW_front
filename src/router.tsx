import { BrowserRouter, Routes, Route } from "react-router-dom"
import StartPage from "./pages/Startpage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import Scroll from "./scroll"
import MainPage from "./pages/MainPage"

function Router() {
    return (
        <BrowserRouter>
            <Scroll />
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/main" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
